import React, { useState, useEffect } from "react";
import { Project } from "@/app/api/getProjects/route";
import { IoClose } from "react-icons/io5";
import { BsFillMarkdownFill } from "react-icons/bs";
import ProjectReadme from "./ProjectReadme";
import ProjectHeader from "./ProjectHeader";

interface ProjectFrameProps {
  project?: Project;
  onClose: () => void;
}

const ProjectFrame: React.FC<ProjectFrameProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const markdown = project?.description || "";

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!project) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className={`absolute w-full max-w-10/12 h-[80vh] bg-zinc-700 rounded-lg  p-2 transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
      >
        <IoClose
          onClick={handleClose}
          className="absolute -top-2 -right-2 text-amber-100 bg-zinc-600 hover:bg-zinc-500 rounded-full p-3 cursor-pointer shadow-lg z-30"
          size={48}
        />
        {project.liveUrl && (
          <BsFillMarkdownFill
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            className="absolute -top-2 right-12 text-amber-100 bg-zinc-600 hover:bg-zinc-500 rounded-full p-3 cursor-pointer shadow-md z-30"
            size={48}
          />
        )}
        {project.liveUrl ? (
          <div className="w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-none"
              style={{
                transform: "scale(1)",
                transformOrigin: "top left",
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-700 text-zinc-500">
            No Live URL Available
          </div>
        )}
        {markdown && (
          <div
            className={`absolute inset-0 rounded-lg w-full h-full overflow-y-auto transition-all duration-300 ${
              isDescriptionVisible
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 -z-1"
            }`}
            style={{ background: "rgba(0, 0, 0, 0.95)" }}
          >
            <div className="flex items-center justify-center max-w-4xl mx-auto">
              <div className="w-full p-5 pt-10 text-white">
                <ProjectHeader project={project} />
                <hr />
                {markdown && <ProjectReadme markdown={markdown} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFrame;
