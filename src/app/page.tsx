import LoginButton from '@/components/LoginButton';

export default function HomePage() {
  return (
    <div className='flex gap-8 h-screen bg-lightblue'>
      <h1 className='text-3xl m-8'>WLCOME HOME</h1>
      <LoginButton isMiniButton={false}></LoginButton>
    </div>
  );
}
