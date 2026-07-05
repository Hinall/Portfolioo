"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex rounded-full overflow-hidden w-[250px] h-[250px]">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="Hinal Panchal"
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Hinal Panchal
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
            Full Stack Developer
          </p>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Full Stack Developer with 1.6 years of experience building scalable,
          production-ready applications using React.js, Next.js, Node.js, and
          Express.js. Focused on RESTful APIs, integrations, and clean,
          high-performance code.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={scrollToFooter}
            className=" z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
