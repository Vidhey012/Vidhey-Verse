// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-3xl font-bold leading-10 mb-5 mt-5 text-[#16f2b3] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
           🤔 Who am I ?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}&nbsp;That&apos;s all about me,
            <span className=" text-pink-500"><a href="#contact">&nbsp;then what about you !</a></span>
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 mr-5">
          <Image
            src={personalData.profile}
            width={450}
            height={280}
            alt="Vidhey Bhogadi"
            className="rounded-3xl transition-all duration-1000 md:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;