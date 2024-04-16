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
          <p className="my-8 text-subtle-medium text-gray-400">SKILLS</p>
        </div>
        <div className="flex overflow-hidden group ">
          <div className="flex items-center justify-center skills-slide group-hover:paused  ">
            <SkillCard
              icon={<MongoDBIcon className="w-8 h-8 " />}
              title={"Mongo DB"}
            />
            <SkillCard
              icon={<ExpressIcon className="w-8 h-8 " />}
              title={"Express"}
            />
            <SkillCard
              icon={<ReactIcon className="w-8 h-8 " />}
              title={"React JS"}
              className=""
            />
            <SkillCard
              icon={<NodeIcon className="w-8 h-8 " />}
              title={"Node JS"}
            />
            <SkillCard
              icon={<NextJSIcon className="w-8 h-8 " />}
              title={"NextJS"}
            />
            <SkillCard icon={<CPPIcon className="w-8 h-8 " />} title={"C++"} />
            <SkillCard
              icon={<PythonIcon className="w-8 h-8 " />}
              title={"Python"}
            />
            <SkillCard icon={<SQLIcon className="w-8 h-8 " />} title={"SQL"} />
          </div>
          <div
            className="flex items-center justify-center  skills-slide group-hover:paused "
            aria-hidden
          >
            <SkillCard
              icon={<MongoDBIcon className="w-8 h-8 " />}
              title={"Mongo DB"}
            />
            <SkillCard
              icon={<ExpressIcon className="w-8 h-8 " />}
              title={"Express"}
            />
            <SkillCard
              icon={<ReactIcon className="w-8 h-8 " />}
              title={"React JS"}
              className=""
            />
            <SkillCard
              icon={<NodeIcon className="w-8 h-8 " />}
              title={"Node JS"}
            />
            <SkillCard
              icon={<NextJSIcon className="w-8 h-8 " />}
              title={"NextJS"}
            />
            <SkillCard icon={<CPPIcon className="w-8 h-8 " />} title={"C++"} />
            <SkillCard
              icon={<PythonIcon className="w-8 h-8 " />}
              title={"Python"}
            />
            <SkillCard icon={<SQLIcon className="w-8 h-8 " />} title={"SQL"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
