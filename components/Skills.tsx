import React from "react";

const Skills: React.FC<{}> = () => {
    const skills = [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "AWS EC2",
        "AWS S3",
        "Route 53",
        "GitHub Actions",
        "RESTful APIs",
        "JWT Authentication",
        "RBAC",
        "Redux",
        "Context API",
        "Material-UI",
        "Ant Design",
    ];

    return (
        <section id="skills" className="pt-[35px]">
            <h2 className="text-white font-semibold text-center text-6xl">
                SKILLS
            </h2>
            <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
                TECH STACK
            </p>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white shadow-sm shadow-black/10"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
