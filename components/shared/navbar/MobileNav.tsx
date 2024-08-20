import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut, SignedIn, SignOutButton} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavContent from "./NavContent";

function MobileNav() {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="haburger menu icon"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="background-light900_dark200 border-none flex flex-col justify-between"
      >
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/assets/images/site-logo.svg"
                width={23}
                height={23}
                alt="DevOverflow"
              ></Image>
              <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
                Dev<span className="primary-text-gradient">Overflow</span>
              </p>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div>
          <SheetClose asChild>
            <NavContent></NavContent>
          </SheetClose>
        </div>
        <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Signup
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
          <SignedIn>
        <SignOutButton>
          <button className="flex flex-row items-center gap-4 p-4">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout image"
              width={19.5}
              height={21.5}
              className="invert-0 dark:invert"
            ></Image>
            <h2 className="base-medium text-dark300_light900 text-[18px]">
              Logout
            </h2>
          </button>
        </SignOutButton>
      </SignedIn>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
