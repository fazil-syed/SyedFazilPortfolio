import React from "react";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import Image from "next/image";
const About = () => {
  return (
    <div className="flex items-center justify-center mt-28 flex-col">
      <p className="my-8 text-subtle-medium text-gray-400">SYNOPSIS</p>
      <div
        className={`flex items-center mb-7 justify-center flex-col w-[75%] lg:w-[65%] ${oswald.className}`}
      >
        <p className=" text-heading3-bold text-slate-300 mb-3">About Me</p>
        <p
          className={`text-zinc-500 text-small-semibold lg:text-base1-semibold text-center leading-relaxed`}
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
      <div className="flex flex-col lg:flex-row items-center justify-center my-10">
        <div className="m-3 ">
          <Image
            src={"/assets/image4.jpeg"}
            width={350}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col lg:w-[30%] gap-2 ">
          <div className="flex flex-col items-center justify-center mt-3 lg:mt-0 lg:w-[120%] ml-5 p-5 border-0 bg-[#0F0E0E] rounded-lg">
            <div>
              <div className="flex">
                <div className="flex items-center bg-slate-500 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              </div>
              <p className=" mt-3 mb-2 text-base-medium  md:text-body1-bold">
                Soft Skills
              </p>
              <p className=" text-small-regular text-gray-200">
                With a solid background in design and technical expertise, I am
                a skilled developer who excels in delivering high-quality
                solutions. Alongside my proficiency in coding, I possess strong
                leadership, time management, and multitasking skills, which I
                have honed through managing complex development projects. As a
                dedicated individual, I constantly seek opportunities to expand
                my knowledge and stay updated with the latest industry trends.
                With a passion for creating innovative and efficient
                applications, I am committed to bringing value and success to
                every development endeavor.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-3 lg:mt-0 lg:w-[120%] ml-5 p-5 border-0 bg-[#0F0E0E] rounded-lg">
            <div>
              <div className="flex">
                <div className="flex items-center bg-slate-500 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>
              </div>
              <p className=" mt-3 mb-2 text-base-medium  md:text-body1-bold">
                Development and Projects
              </p>
              <p className=" text-small-regular text-gray-200">
                Development and project execution are my passion. I thrive on
                the challenges of bringing ideas to life through coding and
                turning concepts into functional, robust solutions. With
                meticulous planning, efficient workflows, and a keen eye for
                detail, I ensure successful project delivery, meeting objectives
                and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
