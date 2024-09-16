'use client';

import { Menu, MenuItem } from '../ui/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderMenu() {
  const pathname = usePathname();

  return (
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
      </MenuItem>
      <MenuItem isActive={pathname === '/reports'}>
        <Link href='/reports'>Reports</Link>
      </MenuItem>
      <MenuItem isActive={pathname === '/files'}>
        <Link href='/files'>Files</Link>
      </MenuItem>
    </Menu>
  );
}
