import React, {useRef} from "react";
import {motion} from 'framer-motion';
import {Experience} from "../../constants/experienceData";

interface SingleExperienceProps {
    experience: Experience;
}

const SingleExperience: React.FC<SingleExperienceProps> = ({ experience }) => {
    const ref = useRef(null);
    return (
        <motion.div className="md:h-[400px] md:w-[300px] sm:h-auto sm:w-full border-2 border-orange border-dashed
        rounded-2xl mt-12 p-2"
                    initial={{ opacity: 0, y: 50, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 360 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                    }}
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
        </motion.div>
    );
};

export default SingleExperience;
;
