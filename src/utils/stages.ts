import { IconType } from "react-icons";
import { GoHomeFill, GoRocket, GoNorthStar } from "react-icons/go";
type Stage = {
  name: string;
  Icon?: IconType;
};

export const stages: Stage[] = [
  { name: "About", Icon: GoHomeFill },
  { name: "Projects", Icon: GoRocket },
  { name: "Skills", Icon: GoNorthStar },
];
