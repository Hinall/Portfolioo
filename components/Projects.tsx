import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "AI-Powered Task Manager",
    year: "2026",
    description:
      "A full-stack task manager with an integrated AI chat assistant — streaming responses via SSE and fully provider-agnostic architecture, alongside JWT-secured, per-user task management.",
    features: [
      "Real-time SSE AI chat assistant",
      "Provider-agnostic AI via env vars",
      "JWT auth with per-user data isolation",
      "CRUD tasks with filtering and sorting",
      "Bcryptjs password hashing",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    frontend: "React (Vercel)",
    backend: "Node.js/Express (Render)",
    database: "MongoDB Atlas",
    ai: "OpenAI-compatible (Groq/Gemini)",
    liveLink: "https://web-opt-task.vercel.app/",
    githubLink: "https://github.com/Hinall/web-opt-task",
    image: "/FirstProject.png",
  },

];

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PERSONAL PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="w-full px-8 lg:px-24 py-6">
        <div className="grid gap-5 mt-7 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-gray-300">{project.description}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-gray-300">
                      {project.year}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="pl-5 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                        Features
                      </p>
                      <ul className="mt-2 space-y-1 pl-5 text-gray-300 text-xs leading-4 list-disc list-inside">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                          Tech stack
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                          Deployment
                        </p>
                        <div className="mt-2 space-y-2 text-gray-300 text-xs">
                          <div className="rounded-3xl border border-white/10 bg-white/5 px-2 py-1">
                            Frontend: {project.frontend}
                          </div>
                          <div className="rounded-3xl border border-white/10 bg-white/5 px-2 py-1">
                            Backend: {project.backend}
                          </div>
                          <div className="rounded-3xl border border-white/10 bg-white/5 px-2 py-1">
                            Database: {project.database}
                          </div>
                          <div className="rounded-3xl border border-white/10 bg-white/5 px-2 py-1">
                            AI: {project.ai}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-w-[110px] items-center justify-center rounded-3xl border border-white/10 bg-black/80 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-w-[110px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
