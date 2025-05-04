import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const AboutMeMain = () => {
  const { t } = useTranslation();
  return (
    <div
      id={t("aboutMeSection.aboutMe_text")}
      className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
