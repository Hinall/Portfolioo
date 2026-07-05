"use client";
import React, { useEffect } from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  useEffect(() => {
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = process.env.NEXT_PUBLIC_TAWK_TO_ID ?? "";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div id="footer" className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex gap-4">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1] inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <Image
                src={social.image}
                height={24}
                width={24}
                alt={social.alt}
                sizes="100vw"
                className=""
              />
            </Link>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
