export interface Project {
    name: string;
    year: string;
    align: "left" | "right";
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        name: "your-project-1",
        year: "2024",
        align: "right",
        image: "/images/website-img-1.jpg",
        link: "https://github.com/your-username/your-project-1",
    },
    {
        name: "your-project-2",
        year: "2024",
        align: "left",
        image: "/images/website-img-2.webp",
        link: "https://github.com/your-username/your-project-2",
    },
    {
        name: "your-project-3",
        year: "2023",
        align: "right",
        image: "/images/website-img-3.jpg",
        link: "https://github.com/your-username/your-project-3",
    },
    {
        name: "your-project-4",
        year: "2023",
        align: "left",
        image: "/images/website-img-4.jpg",
        link: "https://github.com/your-username/your-project-4",
    },
];