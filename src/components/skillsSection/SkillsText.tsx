import { useTranslation } from "react-i18next";

const SkillsText = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {t("skillsSection.skills_text")}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        {t("skillsSection.skills_text_shortDesc")}
      </p>
    </div>
  );
};

export default SkillsText;
