import Image from "next/image";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
  };
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-2 hover:border-gray-700">
      
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-white transition hover:border-gray-500"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Live Demo
          </a>

        </div>

      </div>
    </article>
  );
}