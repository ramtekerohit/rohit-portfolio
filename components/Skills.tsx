"use client";

import { useState } from "react";

type Category = "All" | "Frontend" | "Backend" | "Tools";

type Skill = {
  name: string;
  category: Exclude<Category, "All">;
  level: "Advanced" | "Intermediate" | "Learning";
  description: string;
  progress: number;
};

const categories: Category[] = ["All", "Frontend", "Backend", "Tools"];

const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    level: "Advanced",
    description: "Building accessible, semantic web page structures.",
    progress: 85,
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Advanced",
    description: "Creating responsive layouts and polished interfaces.",
    progress: 85,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Intermediate",
    description: "Adding interactivity and dynamic behavior to websites.",
    progress: 60,
  },
  {
    name: "React",
    category: "Frontend",
    level: "Intermediate",
    description: "Building reusable components and interactive UIs.",
    progress: 60,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Learning",
    description: "Learning modern React application development.",
    progress: 40,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Learning",
    description: "Learning type-safe development with JavaScript.",
    progress: 40,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Learning",
    description: "Exploring server-side JavaScript development.",
    progress: 40,
  },
  {
    name: "Git",
    category: "Tools",
    level: "Intermediate",
    description: "Managing code changes and development workflows.",
    progress: 60,
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Intermediate",
    description: "Hosting repositories and collaborating on code.",
    progress: 60,
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-black px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            My expertise
          </p>

          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            The technologies and tools I use to build responsive,
            user-friendly web experiences while continuously expanding
            my development skills.
          </p>
        </div>

        {/* Category filters */}
        <div
          className="mb-10 flex flex-wrap gap-3"
          aria-label="Filter skills by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  isActive
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-gray-800 bg-gray-950 text-gray-400 hover:border-blue-500/60 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skill cards */}
        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {filteredSkills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-gray-900/80"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                    {skill.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                    {skill.name}
                  </h3>
                </div>

                <span className="rounded-full border border-gray-800 bg-black px-3 py-1 text-xs text-gray-400">
                  {skill.level}
                </span>
              </div>

              <p className="mt-5 min-h-12 text-sm leading-6 text-gray-400">
                {skill.description}
              </p>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
                  <span>Proficiency indicator</span>
                  <span>{skill.progress}%</span>
                </div>

                <div
                  className="h-1.5 overflow-hidden rounded-full bg-gray-800"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency indicator`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.progress}
                >
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <p className="mt-10 text-sm leading-6 text-gray-500">
          Always learning, improving, and exploring better ways to build
          for the web.
        </p>
      </div>
    </section>
  );
}