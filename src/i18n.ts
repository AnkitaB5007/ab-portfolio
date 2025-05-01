import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locale/en.json";
import de from "./locale/de.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  fallbackLng: "en",
});

export default i18next;
