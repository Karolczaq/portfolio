"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/api/getProjects/route";
import ProjectContainer from "./Projects/ProjectContainer";
import ProjectFrame from "./Projects/ProjectFrame";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>();
  const [currentProject, setCurrentProject] = useState<Project>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/getProjects");
      const data = await res.json();
      setProjects(data.projects);
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="projects"
      className="w-full min-h-screen snap-start flex items-center justify-center px-4 projects-bg"
    >
      <div className="p-6 max-w-6xl rounded-lg">
        <h2 className="text-5xl sm:text-6xl font-bold mb-10 md:mb-20 mt-15 md:mt-0 text-center bg-clip-text text-transparent bg-amber-100 p-2">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="flex justify-center cursor-pointer"
              onClick={() => {
                setCurrentProject(project);
                setIsOpen(true);
              }}
            >
              <ProjectContainer key={project._id} project={project} />
            </div>
          ))}
        </div>
        {isOpen && (
          <ProjectFrame
            project={currentProject}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
