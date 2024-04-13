import { ReactIcon } from "./svgs";

const SkillCard = ({ icon, title }) => {
  return (
    <div className=" flex items-center justify-center flex-row gap-4 bg-violet-200 w-[10.3rem] h-[3.4rem] md:w-[11.6rem] md:h-[4.1rem]  m-2 ml-14 rounded-3xl divide-x divide-gray-600 max-w-none">
      {icon}
      <p className=" text-body1-bold md:text-body-bold text-black pl-3">
        {title}
      </p>
    </div>
  );
};

export default SkillCard;
