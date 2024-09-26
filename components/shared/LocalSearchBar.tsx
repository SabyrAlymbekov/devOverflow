import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

function LocalSearchBar() {
  return (
    <div className="background-light800_darkgradient flex max-h-[56px] w-full flex-row items-center gap-1 rounded-[10px] p-4">
      <Image
        src="/assets/icons/search.svg"
        alt="search icon"
        width={24}
        height={24}
      ></Image>
      <Input
        type="text"
        className="paragraph-regular background-light800_darkgradient placeholder no-focus border-none shadow-none outline-none"
        placeholder="Search questions..."
      ></Input>
    </div>
  );
}

export default LocalSearchBar;
