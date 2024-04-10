import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const Jobs = () => {
  return (
    <div className="flex items-center justify-center my-5 ">
      <div className="relative w-[80%] lg:w-[50%]">
        <p
          className={`text-gray-500 text-small-semibold lg:text-base-semibold ${roboto.className}`}
        >
          I'm currently looking for jobs
        </p>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-gray-300">
          Jobs: {"{"}
        </h1>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-transparent gradient-text animate-gradient">
          Software Engineer,
        </h1>
        <h1 className="text-heading3-semibold lg:text-heading3-bold">
          FullStack Developer
        </h1>
        <h1 className="text-heading3-semibold lg:text-heading3-bold text-gray-300">
          {"}"}
        </h1>
        <p
          className={`text-gray-500 text-small-semibold lg:text-base-semibold ${roboto.className}`}
        >
          I'm particularly interested in product based positions where I can
          help make an organization wide impact.
        </p>
      </div>
    </div>
  );
};

export default Jobs;
