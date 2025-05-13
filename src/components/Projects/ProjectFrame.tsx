import React, { useState, useEffect } from "react";
import { Project } from "@/app/api/getProjects/route";
import { IoClose } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { BsFillMarkdownFill } from "react-icons/bs";
import Image from "next/image";

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
        {isDescriptionVisible && (
          <div
            className="absolute inset-0 z-10 rounded-lg"
            style={{ background: "rgba(0, 0, 0, 0.95)" }}
          >
            <div className="w-full h-full overflow-y-auto">
              <div className="flex items-center justify-center max-w-4xl mx-auto">
                <div className="w-full p-5 pt-10 text-white">
                  <div className="flex items-center justify-between mb-4">
                    {/* Project Title and Technologies */}
                    <div>
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

                    {/* Links to GitHub and Live URL */}
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
                  <hr />
                  {markdown && (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1
                            className="py-10 text-3xl font-bold lg:text-4xl"
                            {...props}
                          />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2
                            className="py-2 font-medium text-md lg:text-xl xl:py-5"
                            {...props}
                          />
                        ),
                        table: ({ node, ...props }) => (
                          <table
                            className="w-full px-2 overflow-hidden text-center border-collapse rounded-lg xl:p-2"
                            {...props}
                          />
                        ),
                        thead: ({ node, ...props }) => (
                          <thead
                            className="border-b bg-neutral-700 border-neutral-500 text-neutral-50"
                            {...props}
                          />
                        ),
                        tbody: ({ node, ...props }) => (
                          <tbody className="bg-neutral-800" {...props} />
                        ),
                        tr: ({ node, ...props }) => (
                          <tr className="p-1 text-neutral-200" {...props} />
                        ),
                        td: ({ node, ...props }) => (
                          <td className="p-1" {...props} />
                        ),
                        th: ({ node, ...props }) => (
                          <th className="p-1 py-2" {...props} />
                        ),
                        pre: ({ node, ...props }) => (
                          <pre
                            className="p-2 my-2 text-sm whitespace-pre-wrap rounded-lg bg-neutral-800 text-neutral-200"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {markdown}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFrame;
