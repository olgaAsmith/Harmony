'use client';
import {
  AlignJustify,
  BellIcon,
  CircleHelpIcon,
  LogOut,
  SettingsIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';
import LoginButton from '../LoginButton';
import { Button } from '../ui/button';
import { useAuthStore } from '@/app/store/authStore';
import { getInitials } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function HeaderProfile() {
  const router = useRouter();
  const [initials, setInitials] = useState('');
  const { profile, isAuthenticated, loadProfile } = useAuthStore();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    loadProfile();
    router.push('/login');
  };

  useEffect(() => {
    if (profile) {
      setInitials(getInitials(profile.name));
    }
  }, [profile]);

  return (
    <div className='flex items-center gap-1 sm:gap-6 h-10'>
      <Button title='Settings' variant='icon' className='hidden lg:flex'>
        <SettingsIcon className='ease-in-out duration-300 hover:scale-125'></SettingsIcon>
      </Button>
      <Button title='Ask us' variant='icon' className='hidden lg:flex'>
        <CircleHelpIcon className='ease-in-out duration-300 hover:scale-125'></CircleHelpIcon>
      </Button>
      <Button title='Notices' variant='icon' className='hidden lg:flex'>
        <BellIcon className='ease-in-out duration-300 hover:scale-125'></BellIcon>
      </Button>
      <Button title='Menu' variant='icon' className='flex lg:hidden'>
        <AlignJustify className='ease-in-out duration-300 hover:scale-125'></AlignJustify>
      </Button>
      {isAuthenticated ? (
        <div className='flex items-center gap-1 sm:gap-6'>
          <Avatar className='w-10 h-10'>
            <AvatarImage src={profile?.avatar} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <Button
            title='Logout'
            variant='outline'
            onClick={handleLogout}
            className='flex items-center justify-center bg-transparent border-none '
          >
            <LogOut className='w-6 h-6 inline-block ease-in-out duration-300 hover:scale-125'></LogOut>
          </Button>
        </div>
      ) : (
        <LoginButton isMiniButton={true}></LoginButton>
      )}
    </div>
  );
}
