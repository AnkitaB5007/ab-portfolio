import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { useTranslation } from "react-i18next";

const SkillsMain = () => {
  const { t } = useTranslation();
  return (
    <div id={t("skillsSection.skills")}>
      <div className="max-w-[1200px] px-4 mx-auto py-20">
        <SkillsText />
        {/* Desktop Skills Layout */}
        <div className="hidden lg:block mt-16">
          <AllSkills />
        </div>
        {/* Mobile/Tablet Skills Layout */}
        <div className="block lg:hidden mt-16">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
