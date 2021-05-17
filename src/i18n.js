import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

import English from "./locales/en/translation.json";
import Portuguese from "./locales/pt/translation.json";

const resources = {
  en: { translation: English },
  pt: { translation: Portuguese },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    resources,
    load: "languageOnly",
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "de"],
    nonExplicitWhitelist: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
