import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

function HomeFilters() {
  const active = "newest";

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          className={`body-medium background-light800_dark300
                        rounded-lg px-6 py-3 text-sm font-medium
                        capitalize shadow-none ${
                          active === item.value
                            ? "!bg-primary-100 text-primary-500"
                            : "text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
                        }`}
          key={item.value}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}

export default HomeFilters;
