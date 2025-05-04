import { useTranslation } from "react-i18next";

const ContactText = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-orange text-3xl mb-4">
        {t("contactMeSection.contactMe_text")}
      </h2>
      <p className="text-white">
        {t("contactMeSection.contactMe_text_connect_shortDesc1")}
        <br />
        {t("contactMeSection.contactMe_text_connect_shortDesc2")}
      </p>
    </div>
  );
};

export default ContactText;
