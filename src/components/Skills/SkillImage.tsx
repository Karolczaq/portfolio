import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface SkillImageProps {
  image: string;
  color: string;
  small: boolean;
}

const SkillImage: FC<SkillImageProps> = ({ image, color, small }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(
        small ? "w-6 h-6 lg:w-6 lg:h-6" : "w-14 h-14",
        "relative rounded-full backdrop-blur-lg"
      )}
    >
      <Image
        alt={`Skill image`}
        src={image}
        width={128}
        height={128}
        className={small ? "p-2" : "p-2 md:p-3"}
        priority={true}
      />
    </div>
  );
};

export default SkillImage;
