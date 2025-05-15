import { MdMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaCopy } from "react-icons/fa";

export const socialLinks = [
  {
    name: "GitHub",
    icon: IoLogoGithub,
    href: "https://github.com/karolczaq",
    sideIcon: FiExternalLink,
    className:
      "p-4 bg-zinc-800 rounded-lg text-center text-amber-100 hover:bg-zinc-600 transition flex items-center space-x-2",
  },
  {
    name: "karolczaq",
    icon: FaDiscord,
    copyText: "karolczaq",
    sideIcon: FaCopy,
    className:
      "p-4 bg-zinc-800 rounded-lg text-center text-amber-100 hover:bg-zinc-600 transition flex items-center space-x-2",
  },
  {
    name: "Email",
    icon: MdMailOutline,
    copyText: "k.krasonn@gmail.com",
    sideIcon: FaCopy,
    className:
      "p-4 bg-zinc-800 rounded-lg text-center text-amber-100 hover:bg-zinc-600 transition flex items-center space-x-2",
  },
];
