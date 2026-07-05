"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL ?? "#";
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="hinal logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Me.png"
            alt="Hinal Panchal - Developer"
            width={50}
            height={50}
            sizes="50vw"
            className="rounded-full"
          />
        </a>

        <div className="flex flex-row gap-3">
          <div
            onClick={scrollToFooter}
            className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
