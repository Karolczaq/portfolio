import { IconType } from "react-icons";
import { GoHome, GoRocket, GoNorthStar } from "react-icons/go";
export type Stage = {
  name: string;
  Icon?: IconType;
};

export const stages: Stage[] = [
  { name: "About", Icon: GoHome },
  { name: "Projects", Icon: GoRocket },
  { name: "Skills", Icon: GoNorthStar },
];
