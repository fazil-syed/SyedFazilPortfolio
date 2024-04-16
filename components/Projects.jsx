"use client";

import { useEffect, useState } from "react";
import { projects } from "./../constants/index";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "react-feather";

const Projects = () => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
  // useEffect(() => {
  //   const slideInterval = setInterval(next, 5000);
  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, []);

  return (
    <div className="my-10">
      <div className="flex items-center justify-center m-10">
        <p className="my-8 text-subtle-medium text-gray-400">PROJECTS</p>
      </div>
      <div>
        <div className="overflow-hidden relative ">
          <div
            className="flex  flex-nowrap transition-transform  ease-out duration-1000  relative"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {projects.map((project) => (
              <ProjectCard
                title={project.title}
                projectUrl={project.projectUrl}
                description={project.description}
                img={project.img}
              />
            ))}
          </div>
          <div className=" relative bottom-[17rem] md:bottom-96 flex items-center justify-between  md:p-5 ">
            <button
              onClick={prev}
              className="md:p-1 px-1 rounded-full shadow bg-white/80 text-gray-800 hover:text-white"
            >
              <ChevronLeft className="w-4 md:w-6 " />
            </button>
            <button
              onClick={next}
              className="md:p-1  px-1  rounded-full shadow bg-white/80 text-gray-800 hover:text-white"
            >
              <ChevronRight className="w-4 md:w-6 " />
            </button>
          </div>
          <div className="absolute  bottom-0 right-0 left-0">
            <div className="flex items-start justify-center gap-2">
              {projects.map((_, i) => (
                <div
                  className={` transition-all w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-white rounded-full ${
                    curr === i ? "p-[0.1rem]" : "bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
