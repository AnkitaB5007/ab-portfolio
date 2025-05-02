import { useTranslation } from "react-i18next";

const ExperienceTopRight = () => {
  const { t } = useTranslation();
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">
        {t("experienceSection.experienceDetails_text.specialization")}{" "}
        <span className="font-bold text-white">
          {t("experienceSection.experienceDetails_text.technologies")}
        </span>
        , {t("experienceSection.experienceDetails_text.description")} <br />
        {t("experienceSection.experienceDetails_text.handsOnExperience")}
        <span className="font-bold text-white">
          {" "}
          {t("experienceSection.experienceDetails_text.backendTechnology")}
        </span>
        {t("experienceSection.experienceDetails_text.understanding")}
        <span>
          {t("experienceSection.experienceDetails_text.overallExperience")}{" "}
          <span className="font-bold text-white">
            {t("experienceSection.experienceDetails_text.projectType")}
          </span>
          , {t("experienceSection.experienceDetails_text.codeQuality")}
          {t("experienceSection.experienceDetails_text.integration")}
        </span>
      </p>
    </div>
  );
};

export default ExperienceTopRight;
