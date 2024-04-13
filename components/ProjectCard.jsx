import { Quicksand, Teko } from "next/font/google";
import Image from "next/image";
import { GitHubIcon } from "./svgs";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "700", "600", "500"],
});

const quicksand = Quicksand({ subsets: ["latin"] });
const ProjectCard = ({ title, img, description, projectUrl }) => {
  return (
    <div className={`flex items-center justify-center w-fit shrink-0`}>
      <div className=" w-[100%] md:w-[65%] flex flex-col items-center justify-center bg-[#0F0E0E]  rounded-md m-5 p-5 md:m-8 md:p-6">
        <div className="self-start flex items-center justify-center space-x-4 md:space-x-8">
          <p
            className={` text-small-medium  lg:text-base-regular  ${teko.className}`}
          >
            {title}
          </p>
          <a
            className="p-0 md:p-[.4rem] bg-[#666666] rounded-lg mb-1"
            href={projectUrl}
            target="__blank"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={img}
            className="rounded-lg  m-4 "
            width={1000}
            height={1000}
          />
          <p
            className={` text-body-normal md:text-body-medium text-gray-300 ${quicksand.className}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
