'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import ReddishLogo from '@/images/Reddish Full.png';
import ReddishLogoOnly from '@/images/Reddish Logo Only.png';
import { ChevronLeftIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { useSidebar } from '../ui/sidebar';
import { ModeToggle } from '../theme-btn';

function Header() {
  //   const { user } = useUser();
  const { toggleSidebar, open, isMobile } = useSidebar();

  //   const isBanned = user?.publicMetadata['IS_BANNED'] as boolean;

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/*Left Side*/}
      <div className="h-10 flex items-center">
        {open && !isMobile ? (
          <ChevronLeftIcon onClick={toggleSidebar} className="w-6 h-6" />
        ) : (
          <div className="flex items-center gap-2">
            <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
            <Image
              src={ReddishLogo}
              alt="logo"
              width={150}
              height={150}
              className="hidden md:block"
            />
            <Image
              src={ReddishLogoOnly}
              alt="logo"
              width={40}
              height={40}
              className="block md:hidden"
            />
          </div>
        )}
      </div>

      {/*Rigth Side*/}
      <div className="flex items-center gap-2">
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant={'outline'}>
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
