import { connectText, shortIntro } from "../../constants/aboutMeData";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const AboutMeText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center max-w-lg mx-auto md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        {t("aboutMeSection.aboutMe_text")}
      </h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mb-8 md:mx-0 mx-auto"></div>
      
      <div className="space-y-4 mb-8">
        <p className="text-slate-300 text-base leading-relaxed">
          {t(`aboutMeSection.${shortIntro}`)}
        </p>
        <p className="text-slate-300 text-base leading-relaxed">
          {t(`aboutMeSection.${connectText}`)}
        </p>
      </div>
      
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to={t("aboutMeSection.aboutMe_btn_link_projects")}
        className="inline-flex items-center gap-2 px-6 py-3 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg font-medium cursor-pointer"
      >
        {t("aboutMeSection.aboutMe_btn_text_projects")}
      </Link>
    </div>
  );
};

export default AboutMeText;
