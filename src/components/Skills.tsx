"use client";

import { useEffect, useState } from "react";
import SkillContainer from "./Skills/SkillContainer";
import { Skill } from "@/app/api/getSkills/route";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("/api/getSkills");
      const data = await res.json();
      setSkills(data.skills);
      console.log(data.skills);
    };

    fetchSkills();
  }, []);

  return (
    <div
      id="skills"
      className="w-full h-screen snap-start flex items-center justify-center px-4"
    >
      <div className="p-6 max-w-5xl bg-zinc-700 rounded-lg">
        <h2 className="text-amber-100 text-3xl font-bold mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full">
          {skills.map((skill) => (
            <SkillContainer key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
