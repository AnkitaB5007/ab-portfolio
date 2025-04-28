import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";

interface Skill {
    skill: string;
    icon: IconType;
}

const skills: Skill[] = [
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

const AllSkillsSM = () => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
            {skills.map((item, index) => {
                return <div key={index} className="flex flex-col items-center">
                    <item.icon className="text-7xl text-orange" />
                    <p className="text-center mt-4 text-white">{item.skill}</p>
                </div>
            })}
        </div>
    );
};

export default AllSkillsSM;
