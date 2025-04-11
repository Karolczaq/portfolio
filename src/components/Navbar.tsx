"use client";
import { stages } from "@/utils/stages";
import type { Stage } from "@/utils/stages";
import NavbarItem from "./NavbarItem";
import ScrollProgress from "./ScrollProgress";

type NavbarProps = {
  scrollProgress: number; // Add scrollProgress as a prop
};

export function Navbar({ scrollProgress }: NavbarProps) {
  return (
    <>
      <ScrollProgress progress={scrollProgress} zIndex={50} />
      <nav className="w-full absolute top-0 flex justify-center bg-transparent items-center p-4 z-10">
        <div className="flex space-x-10">
          {stages.map((stage: Stage) => (
            <NavbarItem
              key={stage.name}
              href={`#${stage.name.toLowerCase()}`}
              active={true}
              iconLeft={stage.Icon}
            >
              {stage.name}
            </NavbarItem>
          ))}
        </div>
      </nav>
    </>
  );
}
