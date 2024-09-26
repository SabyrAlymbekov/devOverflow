import React from "react";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "../RenderTag";

const txts = [
  [
    "Would it be appropriate to point out an error in another paper during a referee report?",
    1,
  ],
  ["How can an airconditioning machine exist?", 2],
  ["Interrogated every time crossing UK Border as citizen", 3],
  ["Low digit addition generator", 4],
  ["What is an example of 3 numbers that do not make up a vector?", 5],
];
const tags = [
  { name: "NEXTJS", count: 20152, id: 1 },
  { name: "REDUX", count: 6, id: 2 },
  { name: "REACT", count: 132, id: 3 },
  { name: "CSS", count: 241, id: 4 },
  { name: "JAVASCRIPT", count: 817923, id: 5 },
];

function RightSidebar() {
  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[330px] flex-col gap-6
                        overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div className="flex flex-col">
        <h1 className="h3-bold text-dark200_light900 gap-[30px]">
          Top Questions
        </h1>
        <div className="mt-[26px] flex w-full flex-col gap-[30px]">
          {txts.map((txt, ind) => (
            <Link
              className="flex w-full flex-row items-start justify-between gap-[10px]"
              key={ind}
              href={`/questions/${txt[1]}`}
            >
              <p className="text-dark500_light700 body-medium text-[14px]">
                {txt[0]}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow"
                width={20}
                height={20}
                className="invert-colors"
              ></Image>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="h3-bold text-dark200_light900 gap-[30px]">
          Popular Tags
        </h1>
        <div className="mt-[26px] flex w-full flex-col gap-4">
          {tags.map((tag, index) => (
            <RenderTag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              totalQuestions={tag.count}
              showCount
            ></RenderTag>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
