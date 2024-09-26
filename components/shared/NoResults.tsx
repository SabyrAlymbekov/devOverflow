import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

function NoResults({ title, description, link, linkTitle }: Props) {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No results illustration"
        width={270}
        height={200}
        className="block object-cover dark:hidden"
      ></Image>

      <Image
        src="/assets/images/dark-illustration.png"
        alt="No results illustration"
        width={270}
        height={200}
        className="hidden object-cover dark:block"
      ></Image>

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>

      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <Button
          className="paragraph-regular mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900
                            hover:bg-primary-500 dark:bg-primary-500 dark:text-light-800"
        >
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
}

export default NoResults;
