import { connectText, shortIntro } from "../../constants/aboutMeData";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const AboutMeText = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">
        {t("aboutMeSection.aboutMe_text")}
      </h2>
      <p className="text-white text-xl">{t(`aboutMeSection.${shortIntro}`)}</p>
      <p className="mt-1 text-white text-xl">
        {t(`aboutMeSection.${connectText}`)}
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          {t("aboutMeSection.aboutMe_btn_projects")}
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
