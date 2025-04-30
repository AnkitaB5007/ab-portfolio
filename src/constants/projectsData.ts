export interface Project {
    name: string;
    year: string;
    align: "left" | "right";
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        name: "shopping-list-app",
        year: "Apr2024",
        align: "right",
        image: "/images/website-img-3.jpg",
        link: "https://github.com/arpita009/shopping-list-app",
    },
    {
        name: "quiz-app",
        year: "May2024",
        align: "left",
        image: "/images/website-img-4.jpg",
        link: "https://github.com/arpita009/quiz-app",
    },
    {
        name: "chocolate-calendar",
        year: "Jan2022",
        align: "right",
        image: "/images/website-img-1.jpg",
        link: "https://github.com/arpita009/chocolate-calendar",
    },
    {
        name: "findingfalconeReactRedux",
        year: "Jan2022",
        align: "left",
        image: "/images/website-img-2.webp",
        link: "https://github.com/arpita009/findingfalconeReactRedux",
    },
];