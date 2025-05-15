"use client";
import { stages } from "@/utils/stages";
import type { Stage } from "@/utils/stages";
import NavbarItem from "./NavbarItem";
import ScrollProgress from "./ScrollProgress";
import useCurrentStage from "@/hooks/useCurrentStage";

type NavbarProps = {
  scrollProgress: number;
};

export function Navbar({ scrollProgress }: NavbarProps) {
  const currentStage = useCurrentStage();
  return (
    <>
      <ScrollProgress progress={scrollProgress} />
      <nav
        className={`w-full absolute top-0 flex transition-all transition-300 justify-center bg-transparent backdrop-blur-sm border-amber-100 items-center p-4 z-10${
          scrollProgress > 15 ? " border-b-1" : ""
        } `}
      >
        <div className="flex space-x-10">
          {stages.map((stage: Stage) => (
            <NavbarItem
              key={stage.name}
              href={`#${stage.name.toLowerCase()}`}
              active={stage === currentStage}
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
