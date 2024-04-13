import Image from "next/image";
import { GitHubIcon } from "./svgs";
const ProjectCard = ({ title, img, description, projectUrl }) => {
  return (
    <div className="flex items-center justify-center w-fit shrink-0">
      <div className=" w-[100%] md:w-[65%] flex flex-col items-center justify-center bg-[#0F0E0E]  rounded-md m-5 p-5 md:m-8 md:p-6">
        <div className="self-start flex items-center justify-center space-x-4 md:space-x-8">
          <p className="  text-base-medium  lg:text-body1-bold">{title}</p>
          <a
            className="p-0 md:p-1 bg-[#666666] rounded-lg"
            href={projectUrl}
            target="__blank"
          >
            <GitHubIcon className="w-4 h-4 md:w-4 md:h-4" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={img}
            className="rounded-lg  m-4 "
            width={1000}
            height={1000}
          />
          <p className=" text-base-semibold md:text-body-medium text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
