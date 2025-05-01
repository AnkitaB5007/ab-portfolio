import { useTranslation } from "react-i18next";

const SubHeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown">
      <p className="md:block sm:hidden">
        {t("heroSection.hero_text_subHero_1")}
      </p>
      <p className="md:block sm:hidden">
        {t("heroSection.hero_text_subHero_2")}
      </p>
      <p>{t("heroSection.hero_text_subHero_3")}</p>
    </div>
  );
};

export default SubHeroSection;
