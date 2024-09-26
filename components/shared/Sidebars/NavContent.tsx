"use client";

import React from "react";
import { sidebarLinks } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavContent() {
  const path = usePathname();
  return (
    <nav className="flex flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (path.includes(item.route) && item.route.length > 1) ||
          path === item.route;
        return (
          <Link
            href={item.route}
            key={item.label}
            className={`
                            ${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"}
                            flex items-center justify-start gap-4 bg-transparent p-4 max-lg:w-fit
                        `}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={!isActive ? "invert-colors" : ""}
            ></Image>
            <p
              className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}

export default NavContent;
