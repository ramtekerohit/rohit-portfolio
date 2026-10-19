"use client";

import { useState } from "react";
type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  level: string;
};

const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "React",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Learning",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Learning",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Learning",
  },
  {
    name: "Git",
    category: "Tools",
    level: "Intermediate",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Intermediate",
  },
];

export default function Skills() {

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A collection of technologies and tools I use to build
            modern web applications.
          </p>
        </div>
        <div className="mb-10 flex flex-wrap gap-3">{["All", "Frontend", "Backend", "Tools"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === category
                ? "bg-blue-600 text-white"
                : "border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
              }`}
          >
            {category}
          </button>

        ))}</div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {skill.category}
              </p>
              <p className="mt-6 text-sm text-gray-400">
                {skill.level}
              </p>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-800">
                <div
                  className={`h-full rounded-full ${skill.level === "Advanced"
                      ? "w-5/6 bg-blue-500"
                      : skill.level === "Intermediate"
                        ? "w-3/5 bg-blue-500"
                        : "w-2/5 bg-blue-500"
                    }`}
                />
              </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}