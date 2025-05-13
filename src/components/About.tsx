import { socialLinks } from "@/utils/socialLinks";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard!`);
    });
  };

  return (
    <div
      id="about"
      className="w-full h-screen snap-start flex flex-col md:flex-row items-center justify-center md:space-y-0 gap-8 px-4 relative"
    >
      <div className="flex flex-col items-center min-w-[192px] min-h-[192px]">
        <Image
          src="/photo.jpg"
          alt="Profile"
          width={192}
          height={192}
          className="object-cover rounded-full"
        />
        <span className="mt-2 text-amber-100 text-xl font-bold">
          Karol Krasoń, <span className="text-zinc-400"> 19</span>
        </span>
      </div>

      <div className="p-6 max-w-xl bg-zinc-700 rounded-lg text-center mx-4 md:mx-0">
        <span className="text-amber-100 text-lg font-bold break-words">
          Hello! I’m an aspiring{" "}
          <span className="text-amber-400">Full-Stack</span> developer with a
          passion for creating efficient, scalable, and user-friendly
          applications. My journey in software development has been driven by a
          deep curiosity for how technology can solve real-world problems and
          make everyday life easier.
        </span>
      </div>

      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 font-bold">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => {
              if (link.copyText) {
                handleCopyToClipboard(link.copyText);
              }
            }}
            className={`${link.className} flex items-center justify-center space-x-0 md:justify-start md:space-x-4`}
          >
            <link.icon className="text-amber-100 -m-1 md:mr-2" size="35" />
            <span className="hidden md:inline">{link.name}</span>{" "}
            <link.sideIcon className="hidden md:inline" />
          </a>
        ))}
      </div>
      <Link href="#projects" className="p-4 absolute bottom-10 animate-bounce">
        <IoIosArrowDown className="text-5xl text-amber-100" />
      </Link>
    </div>
  );
}
