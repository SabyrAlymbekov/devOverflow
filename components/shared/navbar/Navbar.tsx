import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from "@clerk/nextjs"
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href='/' className="flex items-center gap-1">
        <Image src="/assets/images/site-logo.svg" width={23} height={23} alt="DevOverflow"></Image>
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Dev<span className="primary-text-gradient">Overflow</span></p>
      </Link>

      <GlobalSearch></GlobalSearch>

      <div className="flex-between gap-5">
        <Theme></Theme>

        <SignedIn>
            <UserButton appearance={{
                elements: {
                    avatarBox: 'h-10 w-10',
                    userButtonPopoverFooter: 'hidden'
                },
                variables: {
                    colorPrimary: '#ff7000'
                }
            }} />
        </SignedIn>

        <MobileNav></MobileNav>
      </div>
    </nav>
  );
}

export default Navbar;
