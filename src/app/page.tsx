import About from "@/components/About";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <main className="w-full h-screen overflow-x-hidden scrollbar-thin select-none bg-zinc-800">
        <About />
        {/* <Projects />
        <Skills /> */}
        <About />
        <About />
      </main>
    </>
  );
}
