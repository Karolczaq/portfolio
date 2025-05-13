"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/api/getProjects/route";
import ProjectContainer from "./Projects/ProjectContainer";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

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
      className="w-full h-screen snap-start flex items-center justify-center px-4"
    >
      <div className="p-6 max-w-6xl rounded-lg">
        <h2 className="text-amber-100 text-3xl font-bold mb-20 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  to add when more projects*/}
          {projects.map((project) => (
            <ProjectContainer key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
