import Image from "next/image";
import { Project } from "@/app/api/getProjects/route";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-zinc-600 text-white rounded-lg"
            >
              <Image
                src={tech.logoUrl}
                alt={tech.name}
                width={32}
                height={32}
              />
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 font-bold">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
