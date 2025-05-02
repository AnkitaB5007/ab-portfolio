import SingleExperience from "./SingleExperience";
import { useTranslation } from "react-i18next";
import { Experience } from "../../constants/experienceData";

const AllExperiences = () => {
  const { t } = useTranslation();
  const experiences = t("experienceSection.experienceAllYearCategorization", {
    returnObjects: true,
  }) as Experience;

  return (
    <div className="flex flex-wrap md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience: Experience, index: number) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
