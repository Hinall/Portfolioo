import React from "react";

const Education: React.FC<{}> = () => {
    return (
        <section id="education" className="pt-[35px]">
            <h2 className="text-white font-semibold text-center text-6xl">
                EDUCATION
            </h2>
            <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
                ACADEMIC BACKGROUND
            </p>
            <div className="mx-auto max-w-4xl px-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
                    <p className="text-2xl font-semibold text-white">Bachelor&apos;s Degree in Computer Engineering</p>
                    <p className="text-gray-400 mt-2">LJ Institute of Engineering and Technology, GTU</p>
                    <div className="mt-4 text-gray-300">
                        <p>2020 – 2024</p>
                        <p className="mt-1">CGPA: 8.49</p>
                    </div>
                    <p className="mt-6 text-gray-300 text-sm">
                        Focused on software development fundamentals, web technologies, and full stack engineering principles with strong academic performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
