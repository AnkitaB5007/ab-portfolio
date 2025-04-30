export interface Experience {
    job: string;
    company: string;
    location: string;
    date: string;
    responsibilities: string[];
};
export const experiences: Experience[] = [
    {
        job: "Full-Stack Developer",
        company: "COMECO GmbH & Co. KG",
        location: "Stuttgart",
        date: "2024 - Present",
        responsibilities: [
            "Building user-facing features using JavaScript frameworks",
            "Creating responsive, mobile-friendly designs",
            "Managing component states",
            "Developing server-side logic with Node.js",
            "Handling API development",
            "Managing Databases",
            "Testing & Debugging",
        ],
    },
    {
        job: "Front-End Developer",
        company: "COMECO GmbH & Co. KG",
        location: "Stuttgart",
        date: "2022 - 2023",
        responsibilities: [
            "Implementing reusable components",
            "Fetching and displaying data from backend APIs",
            "Participating in large scale application",
            "Working on the performance of web applications",
            "Generating new ideas for better user experience",
        ],
    },
    {
        job: "Software Developer",
        company: "Cognizant Technology Solutions",
        location: "India",
        date: "2018 - 2019",
        responsibilities: [
            "Developing responsive, accessible, and cross-browser compatible web pages",
            "Translating UI/UX designs (often from Figma or Adobe XD) into fully functional web components and layouts",
            "Identifying issues reported by QA or users and fix frontend bugs",
        ],
    },
    {
        job: "Senior Test Analyst",
        company: "Cognizant Technology Solutions",
        location: "India",
        date: "2018 - 2019",
        responsibilities: [
            "ETL Testing",
            "Identified business flows and defined Test Strategy",
            "Developed test cases",
            "Tracked bugs/defects",
            "Data comparison between source & target",
        ],
    },
];