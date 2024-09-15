'use client';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

type LoginButton = {
  isMiniButton: boolean;
};

export default function LoginButton({ isMiniButton }: LoginButton) {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <>
      {isMiniButton ? (
        <Button
          variant='outline'
          onClick={handleSignIn}
          className='flex items-center justify-center bg-transparent border-none '
        >
          <LogIn className='w-6 h-6 inline-block'></LogIn>
        </Button>
      ) : (
        <Button onClick={handleSignIn} className='m-8 w-[200px]'>
          Sign in
        </Button>
      )}
    </>
  );
}
