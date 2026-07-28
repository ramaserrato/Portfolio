import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const es = await import("./locales/Es.json", { assert: { type: "json" } });
const en = await import("./locales/En.json", { assert: { type: "json" } });

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

export default i18n;    