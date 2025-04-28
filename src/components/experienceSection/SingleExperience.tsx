import React from "react";

interface Experience {
    job: string;
    company: string;
    location: string;
    date: string;
    responsibilities: string[];
}

interface SingleExperienceProps {
    experience: Experience;
}

const SingleExperience: React.FC<SingleExperienceProps> = ({ experience }) => {
    return (
        <div className="md:h-[400px] md:w-[300px] sm:h-auto sm:w-full border-2 border-orange border-dashed
        rounded-2xl mt-12 p-2"
        >
            <p className="font-bold text-cyan">{experience.job}</p>
            <p className="text-orange">{experience.company}</p>
            <p className="text-orange">{experience.location}</p>
            <p className="text-lightGrey">{experience.date}</p>
            <ul className="list-disc mt-4 pl-4">
                {experience.responsibilities.map((resp, index) => {
                    return <li key={index} className="text-white">{resp}</li>;
                })}
            </ul>
        </div>
    );
};

export default SingleExperience;
;
