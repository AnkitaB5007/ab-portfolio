import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { words } from "../../constants/heroData";
import { useTranslation } from "react-i18next";

const HeroText = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  // console.log("Current language:", currentLanguage);

  return (
    <div className="flex w-full md:w-[60%] flex-col gap-4 h-full justify-center text-center md:text-left mb-[10rem] md:mb-0">
      <motion.h2
        className="text-[2.5rem] lg:text-2xl sm:text-xl uppercase text-cyan"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {t("heroSection.hero_text_designation")}
      </motion.h2>
      <motion.h1
        className="text-[2rem] md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        Arpita Behura
      </motion.h1>
      {currentLanguage === "en" ? (
        <motion.div
          className="hero-text text-left"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">
            {t("heroSection.hero_text_tagline_1")}
            <span className="slide">
              <span className="wrapper">
                {words.map((word) => (
                  <span
                    key={t(`heroSection.${word.slideText}`)}
                    className="flex items-center md:gap-3 gap-2 pb-[3px]"
                  >
                    <img
                      src={word.imgPath}
                      alt={t(`heroSection.${word.slideText}`)}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full white-bg"
                    />
                    <span>{t(`heroSection.${word.slideText}`)}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">
            {t("heroSection.hero_text_tagline_2")}
          </h1>
          <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">
            {t("heroSection.hero_text_tagline_3")}
          </h1>
        </motion.div>
      ) : (
        <motion.div
          className="hero-text text-left"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <h1 className="flex items-center flex-wrap md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-0 font-bold font-special text-white">
            {t("heroSection.hero_text_tagline_0")}
            <br />
            <span className="slide-de">
              <span className="wrapper">
                {words.map((word) => (
                  <span
                    key={t(`heroSection.${word.slideText}`)}
                    className="flex items-center md:gap-3 gap-2 pb-[3px]"
                  >
                    <img
                      src={word.imgPath}
                      alt={t(`heroSection.${word.slideText}`)}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full white-bg"
                    />
                    <span>{t(`heroSection.${word.slideText}`)}</span>
                  </span>
                ))}
              </span>
            </span>
            <span className="absolute left-[10rem] sm:left-[12rem] md:left-[18rem]">
              {t("heroSection.hero_text_tagline_1")}
            </span>
          </h1>
          <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">
            {t("heroSection.hero_text_tagline_2")}
          </h1>
          <h1 className="md:text-[2.7rem] lg:text-5xl sm:text-3xl mt-4 font-bold font-special text-white">
            {t("heroSection.hero_text_tagline_3")}
          </h1>
        </motion.div>
      )}
    </div>
  );
};

export default HeroText;
