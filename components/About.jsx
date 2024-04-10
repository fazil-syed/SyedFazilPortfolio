import React from "react";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
const About = () => {
  return (
    <div className="flex items-center justify-center mt-28 flex-col">
      <p className="my-8 text-subtle-medium text-gray-400">SYNOPSIS</p>
      <div
        className={`flex items-center mb-7 justify-center flex-col w-[75%] ${oswald.className}`}
      >
        <p className=" text-heading3-bold text-slate-300 mb-3">About Me</p>
        <p
          className={`text-gray-600 text-small-semibold lg:text-base1-semibold text-center`}
        >
          From an early age, my passion and curiosity for learning and creating
          new things has been a driving force. Immersed in the world of
          development and coding, I honed my skills and explored innovative
          solutions. This love for creation has shaped my career, fueling my
          desire to bring impactful and stunning projects to life. With
          meticulous attention to detail, I strive to craft exceptional and
          memorable experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
