'use client';
import { InputWithIcon } from '../ui/input-with-icon';
import {
  AlignJustify,
  BellIcon,
  CircleHelpIcon,
  SettingsIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Menu, MenuItem } from '../ui/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LoginButton from '../LoginButton';

export default function Header() {
  const [isLogin, seIsLogin] = useState(false);

  const pathname = usePathname();
  return (
    <header className='px-2 pt-4 pb-1.5 lg:px-6 lg:pt-8 lg:pb-0'>
      <div className='flex justify-between gap-6 items-center lg:items-start'>
        <h1 className='text-xl'>HarmonyHR</h1>
        <Menu className='hidden lg:flex'>
          <MenuItem isActive={pathname === '/'}>
            <Link href='/'>Home</Link>
          </MenuItem>
          <MenuItem isActive={pathname.startsWith('/myinfo')}>
            <Link href='/myinfo'>My info</Link>
          </MenuItem>
          <MenuItem isActive={pathname === '/people'}>
            <Link href='/people'>People</Link>
          </MenuItem>
          <MenuItem isActive={pathname === '/hiring'}>
            <Link href='/hiring'>Hiring</Link>
            Hiring
          </MenuItem>
          <MenuItem isActive={pathname === '/reports'}>
            <Link href='/reports'>Reports</Link>
            Reports
          </MenuItem>
          <MenuItem isActive={pathname === '/files'}>
            <Link href='/files'>Files</Link>
            Files
          </MenuItem>
        </Menu>
        <InputWithIcon
          type='text'
          placeholder='Search'
          className='placeholder:opacity-0 md:placeholder:opacity-100 cursor-pointer'
        />
        <div className='flex items-center gap-6 h-10'>
          <SettingsIcon className='hidden lg:block cursor-pointer'></SettingsIcon>
          <CircleHelpIcon className='hidden lg:block cursor-pointer'></CircleHelpIcon>
          <BellIcon className='hidden lg:block cursor-pointer'></BellIcon>
          <AlignJustify className='cursor-pointer lg:hidden'></AlignJustify>
          {isLogin ? (
            <Avatar className='w-10 h-10'>
              <AvatarImage src='https://steamuserimages-a.akamaihd.net/ugc/2298589242640309549/CF7290FDC05473039DA56E6D03A5FB6A48DA39EA/?imw=512&imh=425&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          ) : (
            <LoginButton isMiniButton={true}></LoginButton>
          )}
        </div>
      </div>
    </header>
  );
}
