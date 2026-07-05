import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="relative mx-auto max-w-4xl px-4 pt-5">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-white/10" />
          <div className="space-y-12">
            <div className="relative pl-14">
              <div className="absolute left-0 top-3 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 border border-white" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">Fullstack Developer</p>
                    <p className="text-gray-400">Prepseed</p>
                  </div>
                  <div className="text-right text-sm text-gray-300">
                    <p>October 2024 – March 2026</p>
                    <p>Ahmedabad, Gujarat</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm list-disc list-inside">
                  <li>Built full-stack applications using React.js, Node.js, and Express.js.</li>
                  <li>Delivered end-to-end solutions with dynamic UI, optimized RESTful APIs, and secure RBAC.</li>
                  <li>Deployed applications on AWS EC2 with Nginx, Route 53, and GitHub Actions.</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-14">
              <div className="absolute left-0 top-3 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 border border-white" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">Software Developer Intern</p>
                    <p className="text-gray-400">Amnex Info Technologies</p>
                  </div>
                  <div className="text-right text-sm text-gray-300">
                    <p>October 2023 – July 2024</p>
                    <p>Ahmedabad, India</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm list-disc list-inside">
                  <li>Built interactive dashboards using Angular, Material UI, and Spring Boot.</li>
                  <li>Implemented 2D/3D geospatial visualizations with OpenLayers and CesiumJS.</li>
                  <li>Optimized PostgreSQL/PostGIS spatial queries for efficient data processing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
