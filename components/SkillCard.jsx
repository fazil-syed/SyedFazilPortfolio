import { ReactIcon } from "./svgs";

const SkillCard = ({ icon, title }) => {
  return (
    <div className=" flex items-center justify-center flex-row gap-6 bg-white w-44 h-14 md:w-48 md:h-[4.4rem] m-2 ml-14 rounded-3xl divide-x divide-gray-600 max-w-none">
      {icon}
      <p className=" text-body1-bold md:text-body-bold text-black pl-5">
        {title}
      </p>
    </div>
  );
};

export default SkillCard;
