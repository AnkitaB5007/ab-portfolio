import ExperienceInfo from "./ExperienceInfo";
import { useTranslation } from "react-i18next";

const ExperienceTopLeft = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        {t("experienceSection.experience_text_since_year")}
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo
          number={3}
          text={t("experienceSection.experience_text_years")}
        />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo
          number={15}
          text={t("experienceSection.experience_text_websites")}
        />
      </div>
      <p className="text-center text-white text-2xl">
        {t("experienceSection.experience_text_shortDesc")}
      </p>
      <ExperienceInfo
        number={720000}
        text={t("experienceSection.experience_text_customers")}
      />
      <ExperienceInfo
        number={4500}
        text={t("experienceSection.experience_text_new_users_monthly")}
      />
      <ExperienceInfo
        number={8500000}
        text={t("experienceSection.experience_text_logins_per_month")}
      />
      <p className="text-center text-white text-xl">
        {t("experienceSection.experience_text_shortDesc_note")}
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
