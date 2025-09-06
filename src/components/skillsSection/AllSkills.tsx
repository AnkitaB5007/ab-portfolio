import SingleSkill from "./SingleSkill";
import { skills } from "../../constants/skillsData";

const AllSkills = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
      {skills.map((item, index) => {
        return (
          <div key={index}>
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </div>
        );
      })}
    </div>
  );
};

export default AllSkills;
