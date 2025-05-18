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
      className="w-full h-screen snap-start flex flex-col md:flex-row items-center justify-center md:space-y-0 gap-4 md:gap-8 px-4 relative about-background animate-gradient"
    >
      <div className="flex flex-row sm:flex-col items-center gap-4">
        <Image
          src="/photo.jpg"
          alt="Profile"
          width={192}
          height={192}
          className="object-cover rounded-full min-h-[100px] min-w-[100px] md:min-h-[160px] md:min-w-[160px]"
        />
        <span className="mt-2 text-amber-200 text-xl font-bold">
          Karol Krasoń, <span className="text-zinc-400"> 19</span>
        </span>
      </div>

      <div className="p-6 md:max-w-lg md:min-w-sm max-w-xl bg-zinc-800 rounded-lg text-center mx-4 md:mx-0">
        <span className="text-amber-100 text-sm md:text-base font-bold break-words">
          Hello! I’m an aspiring{" "}
          <span className="text-amber-400">Full-Stack</span> developer
          passionate about building web applications and eager to gain my first
          professional experience. I enjoy solving challenges, learning new
          technologies, and creating efficient solutions.
        </span>
        <div className="mt-4">
          <p className="text-amber-100 text-md md:text-lg font-bold break-words">
            I’m currently looking for an internship.
          </p>
          <p className="text-amber-100 text-md md:text-lg font-bold break-words">
            <span className="hidden md:inline">Reach me anytime 👉</span>
            <span className="inline md:hidden">Reach me anytime 👇</span>
          </p>
        </div>
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
      <Link
        href="#projects"
        className="p-4 absolute bottom-5 md:bottom-10 animate-bounce"
      >
        <IoIosArrowDown className="text-5xl text-amber-100" />
      </Link>
    </div>
  );
}
