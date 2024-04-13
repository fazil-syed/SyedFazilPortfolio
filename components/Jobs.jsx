import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const Jobs = () => {
  return (
    <div className="flex items-center justify-center my-28">
      <div className="relative w-[80%] lg:w-[50%]">
        <p
          className={` text-zinc-500 text-small-semibold lg:text-base1-semibold ${roboto.className}`}
        >
          I'm currently looking for ...
        </p>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-gray-300">
          Jobs: {"{"}
        </h1>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-transparent gradient-text1 ">
          Software Engineer,
        </h1>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-transparent gradient-text2">
          FullStack Developer
        </h1>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-gray-300">
          {"}"}
        </h1>
        <p
          className={` text-zinc-500 text-small-semibold lg:text-base1-semibold ${roboto.className}`}
        >
          I'm eager to be take up product based positions where I can help make
          an organization wide impact with my skill set.
        </p>
      </div>
    </div>
  );
};

export default Jobs;
