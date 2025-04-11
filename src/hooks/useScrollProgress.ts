import { useState, useEffect } from "react";

type UseScrollProgressProps = {
  scrollRef: React.RefObject<HTMLElement | HTMLDivElement | null>;
  onScroll?: (progress: number) => void;
};

function useScrollProgress({ scrollRef, onScroll }: UseScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    if (!scrollRef.current) return;

    const scrollTop = scrollRef.current.scrollTop;
    const scrollHeight =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    setScrollProgress(progress);
    if (onScroll) onScroll(progress);
  };

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    updateScrollProgress();
    container.addEventListener("scroll", updateScrollProgress);

    return () => {
      container.removeEventListener("scroll", updateScrollProgress);
    };
  }, [scrollRef]);

  return scrollProgress;
}

export default useScrollProgress;
