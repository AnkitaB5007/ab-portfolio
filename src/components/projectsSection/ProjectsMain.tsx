import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

interface Project {
    name: string;
    year: string;
    align: "left" | "right"; // restricts align to only these two values
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        name: "Vacation of Africa",
        year: "Mar2022",
        align: "right",
        image: "/images/website-img-1.jpg",
        link: "#",
    },
    {
        name: "Moola App",
        year: "Sept2022",
        align: "left",
        image: "/images/website-img-2.webp",
        link: "#",
    },
    {
        name: "Tourzania",
        year: "Jan2023",
        align: "right",
        image: "/images/website-img-3.jpg",
        link: "#",
    },
    {
        name: "Bank of Luck",
        year: "May2024",
        align: "left",
        image: "/images/website-img-4.jpg",
        link: "#",
    },
];
const ProjectsMain = () => {
    return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4">
            <ProjectText/>
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
                {projects.map((project, index) => {
                    return (
                        <SingleProject
                            key={index}
                            name={project.name}
                            year={project.year}
                            align={project.align}
                            image={project.image}
                            link={project.link}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsMain;
