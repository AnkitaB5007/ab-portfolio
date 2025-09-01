import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { words } from "../../constants/heroData";
import { useTranslation } from "react-i18next";

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full md:w-[60%] flex-col gap-8 h-full justify-center text-center md:text-left mb-20 md:mb-0">
      {/* Role/Title */}
      <motion.div
        className="flex flex-col gap-2"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <p className="text-sm md:text-base font-mono text-slate-400 tracking-wider uppercase">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Ankita <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Behura</span>
        </h1>
      </motion.div>

      {/* Dynamic Role */}
      <motion.h2
        className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-300"
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {t("heroSection.hero_text_designation")}
      </motion.h2>

      {/* Animated Tagline */}
      <motion.div
        className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl"
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <p>
          {t("heroSection.hero_text_tagline_1")}{" "}
          <span className="inline-flex items-center relative overflow-hidden h-8 md:h-10">
            <span className="wrapper text-cyan-400 font-semibold">
              {words.map((word) => (
                <span
                  key={t(`heroSection.${word.slideText}`)}
                  className="flex items-center gap-2 pb-1"
                >
                  <img
                    src={word.imgPath}
                    alt={t(`heroSection.${word.slideText}`)}
                    className="w-6 h-6 md:w-8 md:h-8 p-1 rounded-lg bg-white/10"
                  />
                  <span>{t(`heroSection.${word.slideText}`)}</span>
                </span>
              ))}
            </span>
          </span>
          <br />
          {t("heroSection.hero_text_tagline_2")} <span className="text-amber-400 font-semibold">{t("heroSection.hero_text_tagline_3")}</span>
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8"
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
          View My Work
        </button>
        <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:bg-slate-600 hover:text-white transition-all duration-300">
          Get In Touch
        </button>
      </motion.div>
    </div>
  );
};

export default HeroText;
