import React from "react";
import SkillCard from "./SkillCard";
import {
  CPPIcon,
  ExpressIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
} from "./svgs";

const Skills = () => {
  return (
    <>
      <div className="m-10">
        <div className="flex items-center justify-center m-20">
          <p className="text-small-semibold text-gray-400">SKILLS</p>
        </div>
        <div className="flex space-x-12 overflow-hidden group">
          <div className="flex items-center justify-center space-x-28 skills-slide group-hover:paused ">
            <SkillCard
              icon={<ReactIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"React JS"}
            />
            <SkillCard
              icon={<MongoDBIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Mongo DB"}
            />
            <SkillCard
              icon={<NextJSIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"NextJS"}
            />
            <SkillCard
              icon={<CPPIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"C++"}
            />
            <SkillCard
              icon={<NodeIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Node JS"}
            />
            <SkillCard
              icon={<ExpressIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Express"}
            />
            <SkillCard
              icon={<PythonIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Python"}
            />
            <SkillCard
              icon={<SQLIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"SQL"}
            />
          </div>
          <div
            className="flex items-center justify-center space-x-28 skills-slide group-hover:paused "
            aria-hidden
          >
            <SkillCard
              icon={<ReactIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"React JS"}
            />
            <SkillCard
              icon={<MongoDBIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Mongo DB"}
            />
            <SkillCard
              icon={<NextJSIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"NextJS"}
            />
            <SkillCard
              icon={<CPPIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"C++"}
            />
            <SkillCard
              icon={<NodeIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Node JS"}
            />
            <SkillCard
              icon={<ExpressIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Express"}
            />
            <SkillCard
              icon={<PythonIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"Python"}
            />
            <SkillCard
              icon={<SQLIcon className="w-8 h-8 md:w-10 md:h-10" />}
              title={"SQL"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
