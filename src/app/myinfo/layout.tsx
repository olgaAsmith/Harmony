import MyInfoHeader from '@/components/myinfo/MyInfoHeader';
import SideBarMyInfo from '@/components/myinfo/SideBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col'>
      <MyInfoHeader></MyInfoHeader>
      <div className='flex gap-8 md:px-2 md:px-6 xl:px-20 xxl:gap-16'>
        <SideBarMyInfo></SideBarMyInfo>
        {children}
      </div>
    </div>
  );
}
