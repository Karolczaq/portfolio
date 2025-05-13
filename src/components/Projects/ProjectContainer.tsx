import React, { FC } from "react";
import Image from "next/image";
import { Project } from "@/app/api/getProjects/route";

interface ProjectContainerProps {
  project: Project;
}

const ProjectContainer: FC<ProjectContainerProps> = ({ project }) => {
  return (
    <div
      className="flex flex-col w-full border-b-4 max-w-md h-72 bg-zinc-700 rounded-lg shadow-md overflow-hidden hover:bg-zinc-600 transition-colors"
      style={{ borderColor: project.color }}
    >
      <div className="h-1/2 bg-white relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400">
            No Image
          </div>
        )}
      </div>
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <h3 className="text-amber-100 text-lg font-bold">{project.title}</h3>
        <p className="text-zinc-300 text-sm mt-1 line-clamp-2">
          {project.shortDescription || "No description available."}
        </p>
        <div className="flex items-center gap-4 mt-2">
          {project.technologies &&
            project.technologies.map((tech) => (
              <Image
                key={tech.name}
                src={tech.logoUrl}
                alt={tech.name}
                width={24}
                height={24}
                className="w-6 h-6 invert-100 sepia-100"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
