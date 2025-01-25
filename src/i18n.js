import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNav from "./locales/en/navigation.json";
import ruNav from "./locales/ru/navigation.json";
import hyNav from "./locales/hy/navigation.json";
import enCommon from "./locales/en/common.json";
import ruCommon from "./locales/ru/common.json";
import hyCommon from "./locales/hy/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { navigation: enNav, common: enCommon },
      ru: { navigation: ruNav, common: ruCommon },
      hy: { navigation: hyNav, common: hyCommon },
    },
    fallbackLng: "en",
    ns: ["navigation", "common"], // Убедись, что здесь есть "navigation"
    defaultNS: "navigation", // Либо поменяй defaultNS на "navigation"
    interpolation: { escapeValue: false },
  });

export default i18n;
