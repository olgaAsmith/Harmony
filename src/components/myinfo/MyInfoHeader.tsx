import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { EllipsisVertical } from 'lucide-react';
import MyInfoMenu from './MyInfoMenu';
import MyInfoSelectMenu from './MyInfoSelectMenu';

export default function MyInfoHeader() {
  return (
    <section className='w-full bg-lightblue '>
      <div className='flex gap-8 2xl:gap-16 items-end pt-6 lg:pt-9 md:px-6 xl:px-20'>
        <div className='flex min-w-[225px] items-center justify-center hidden lg:flex'>
          <Avatar>
            <AvatarImage
              className='z-10'
              src='https://steamuserimages-a.akamaihd.net/ugc/2298589242640309549/CF7290FDC05473039DA56E6D03A5FB6A48DA39EA/?imw=512&imh=425&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex flex-col w-8/12 xl:w-9/12 2xl:w-full grow'>
          <div className='flex justify-center lg:justify-between px-6 md:px-0'>
            <Avatar className='w-[60px] h-[60px] mr-[22px] lg:hidden'>
              <AvatarImage src='https://steamuserimages-a.akamaihd.net/ugc/2298589242640309549/CF7290FDC05473039DA56E6D03A5FB6A48DA39EA/?imw=512&imh=425&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <h2 className='text-xl lg:text-3xl font-semibold'>
              Alexandra Kuibyshevskaya
            </h2>
            <EllipsisVertical className='w-4 h-4 ml-auto cursor-pointer lg:hidden'></EllipsisVertical>
            <MyInfoSelectMenu></MyInfoSelectMenu>
          </div>
          <MyInfoMenu></MyInfoMenu>
        </div>
      </div>
    </section>
  );
}
