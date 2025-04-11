"use client";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Navbar } from "@/components/Navbar";
import Skills from "@/components/Skills";
import { useRef, useState } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageState, setPageState] = useState({ scrollProgress: 0 });

  useScrollProgress({
    scrollRef,
    onScroll: (progress) => {
      setPageState((state) => ({ ...state, scrollProgress: progress }));
    },
  });

  return (
    <>
      <Navbar scrollProgress={pageState.scrollProgress} />{" "}
      <main
        ref={scrollRef}
        className="w-full h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scroll-smooth select-none bg-zinc-800"
      >
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
