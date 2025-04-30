import SingleExperience from "./SingleExperience";
import {experiences} from "../../constants/experienceData";

const AllExperiences = () => {
    return (
        <div className="flex flex-wrap md:flex-row sm:flex-col items-center justify-between">
            {experiences.map((experience, index) => {
                return(
                    <>
                        <SingleExperience key={index} experience={experience} />
                    </>
                )
            })}
        </div>
    );
};

export default AllExperiences;