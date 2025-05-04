import SingleExperience from "./SingleExperience";
import { useTranslation } from "react-i18next";
import { Experience } from "../../constants/experienceData";

const AllExperiences = () => {
  const { t } = useTranslation();
  const experiences = t("experienceSection.experienceAllYearCategorization", {
    returnObjects: true,
  }) as Experience[];

  return (
    <div className="flex flex-wrap md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience: Experience) => {
        return (
          <SingleExperience key={experience.indexNo} experience={experience} />
        );
      })}
    </div>
  );
};

export default AllExperiences;
