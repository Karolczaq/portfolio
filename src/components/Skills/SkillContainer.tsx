import { cn } from "@/lib/utils";
import React, { HTMLAttributes, FC } from "react";
import SkillImage from "./SkillImage";

type Skill = {
  _id: string;
  name: string;
  type: string;
  color: string;
  logoUrl: string;
};

interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  skill: Skill;
}

const SkillContainer: FC<SkillProps> = ({ skill, className, ...props }) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center p-4 justify-center w-full gap-2 md:gap-4 rounded-md shadow-md h-full md:h-40 bg-neutral-900/70 backdrop-blur-sm border-b-4`,
        className
      )}
      style={{ borderColor: skill.color }}
      {...props}
    >
      <SkillImage image={skill.logoUrl} color={skill.color} small={false} />
      <div className="flex flex-col text-center">
        <div className="text-[0.7rem] font-medium sm:text-sm md:text-base text-neutral-200">
          {skill?.name}
        </div>
        <div className="text-[0.65rem] md:text-sm text-neutral-400">
          {skill?.type}
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
