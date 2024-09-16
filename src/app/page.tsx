import LoginButton from '@/components/LoginButton';

export default function HomePage() {

  return (
    <div className='flex flex-col lg:flex-row gap-8 h-screen bg-lightblue'>
      <h1 className='text-3xl m-8'>WELCOME HOME</h1>
      <LoginButton isMiniButton={false}></LoginButton>
    </div>
  );
}
