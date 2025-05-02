import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

interface Skill {
  skill: string;
  icon: IconType;
}

export const skills: Skill[] = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "Angular",
    icon: FaAngular,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "NodeJS",
    icon: FaNode,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Shadcnui",
    icon: SiShadcnui,
  },
];
