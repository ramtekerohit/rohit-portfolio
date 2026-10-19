import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Soso-Jojo Therapy Clinic",
    description:
      "A modern full-stack clinic website with service information, therapist details, appointment booking and an admin dashboard.",
    image: "/images/soso-jojo.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    github:
      "https://github.com/ramtekerohit/soso-jojo-clinic",
    live: "#",
  },

  {
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio designed to showcase my skills, projects and frontend development services.",
    image: "/images/portfolio.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Things I've built
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of projects demonstrating my frontend
            development, UI implementation and problem-solving skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}