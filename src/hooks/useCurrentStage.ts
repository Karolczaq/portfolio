import { useEffect, useState } from "react";
import { stages } from "@/utils/stages";
import type { Stage } from "@/utils/stages";
import useScrollProgress from "./useScrollProgress";

const useCurrentStage = (): Stage | null => {
  const [scrollRef, setScrollRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    setScrollRef(mainElement);
  }, []);

  const scrollProgress = useScrollProgress({
    scrollRef: { current: scrollRef },
  });

  if (scrollProgress >= 0 && scrollProgress < 33) {
    return stages[0];
  } else if (scrollProgress >= 33 && scrollProgress < 66) {
    return stages[1];
  } else if (scrollProgress >= 66 && scrollProgress <= 100) {
    return stages[2];
  } else {
    return null;
  }
};

export default useCurrentStage;
