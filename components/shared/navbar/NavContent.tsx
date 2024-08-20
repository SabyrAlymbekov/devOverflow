'use client'

import React from 'react'
import { sidebarLinks } from "@/constants/constants";
import {
    SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavContent = () => {
    const path = usePathname();

    return <section className="flex h-full flex-col gap-6">
      {
        sidebarLinks.map(item=>{
            const isActive = (path.includes(item.route) && item.route.length > 1) || path === item.route;
            return (<SheetClose asChild key={item.route}>
                <Link href={item.route} className={`
                    ${isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'}
                    flex items-center justify-start gap-4 bg-transparent p-4
                `}>
                    <Image src={item.imgURL} alt={item.label} width={20} height={20} className={!isActive ? 'invert-colors' : ''}></Image>
                    <p className={isActive ? 'font-bold' : 'font-medium'}>{item.label}</p>
                </Link>
            </SheetClose>)
        })
      }
    </section>;
};

export default NavContent