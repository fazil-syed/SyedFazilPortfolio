import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const Education = () => {
  return (
    <div className=" my-8 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
        <p className="my-8 text-subtle-medium text-gray-400">FORMAL</p>
      </div>
      <div
        className={`flex items-center mb-7 justify-center flex-col w-[75%] lg:w-[65%] ${oswald.className}`}
      >
        <p className=" text-heading3-bold text-slate-300 mb-3">Education</p>
        {/* <div className="flex flex-col gap-2 w-[120%] m-5 md:m-0 md:w-fit">
          <div className="flex flex-col items-center justify-center mt-3 lg:mt-0  p-5 border-0 bg-[#0F0E0E] rounded-lg">
            <div>
              <p className=" mt-3 mb-1 text-small-medium  lg:text-base-regular text-gray-300">
                Dayananda Sagar College Of Engineering
              </p>
              <p className=" mb-2 text-small-regular text-zinc-600">
                Bengaluru, Karnataka
              </p>
              <p className=" text-zinc-500 text-small-semibold lg:text-base1-semibold leading-relaxed">
                I am currently pursuing my Bachelors degree in Computer Science
                and Engineering at Dayananda Sagar College Of Engineering. This
                four-year program offers a comprehensive curriculum that covers
                various aspects of computer science and its applications.
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center my-10">
          <div className="flex flex-col items-center justify-center mt-3 lg:mt-0 lg:w-[120%]  p-5 border-0 bg-[#0F0E0E] rounded-lg">
            <div>
              <p className=" mt-3 mb-1 text-small-medium  lg:text-base-regular text-gray-300">
                Dayananda Sagar College Of Engineering
              </p>
              <p className=" mb-2 text-small-regular text-zinc-600">
                Bengaluru, Karnataka
              </p>
              <p className=" text-zinc-500 text-small-semibold lg:text-base1-semibold leading-relaxed">
                I am currently pursuing my Bachelors degree in Computer Science
                and Engineering at Dayananda Sagar College Of Engineering. This
                four-year program offers a comprehensive curriculum that covers
                various aspects of computer science and its applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
