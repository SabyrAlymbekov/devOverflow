import React from "react";
import Link from "next/link";
import NavContent from "./NavContent";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

const AuthSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SignedOut>
        <Link
          href="/sign-in"
          className="background-light800_dark400 flex h-10 items-center justify-center rounded-lg"
        >
          <Image
            src="/assets/icons/account.svg"
            alt="login"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          ></Image>
          <span className="primary-text-gradient max-lg:hidden">Log In</span>
        </Link>
        <Link
          href="/sign-up"
          className="background-light700_dark300 text-dark400_light900 flex h-10 items-center justify-center rounded-lg"
        >
          <Image
            src="/assets/icons/sign-up.svg"
            alt="login"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          ></Image>
          <span className="max-lg:hidden">Sign up</span>
        </Link>
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
            <h2 className="base-medium text-dark300_light900 text-[18px] max-lg:hidden">
              Logout
            </h2>
          </button>
        </SignOutButton>
      </SignedIn>
    </section>
  );
};

function LeftSidebar() {
  return (
    <main className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between gap-10 overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <NavContent></NavContent>
      <AuthSection></AuthSection>
    </main>
  );
}

export default LeftSidebar;
