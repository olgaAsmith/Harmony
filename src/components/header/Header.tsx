import { InputWithIcon } from '../ui/input-with-icon';
import HeaderMenu from './HeaderMenu';
import HeaderProfile from './HeaderProfile';

export default function Header() {
  return (
    <header className='px-2 pt-4 pb-1.5 lg:px-6 lg:pt-8 lg:pb-0'>
      <div className='flex justify-between gap-6 items-center lg:items-start'>
        <h1 className='text-xl'>HarmonyHR</h1>
        <HeaderMenu></HeaderMenu>
        <InputWithIcon
          type='text'
          placeholder='Search'
          className='placeholder:opacity-0 md:placeholder:opacity-100 cursor-pointer'
        />
        <HeaderProfile></HeaderProfile>
      </div>
    </header>
  );
}
