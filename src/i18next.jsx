import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    allowMultiLoading:false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lng) => {
        const url = `/locales/${lng}/translation.json`;
        console.log('URL ', url);
        return url;
      },
    },
    supportedLngs: ['en', 'pt'], // Add or remove languages as needed
    // Specify the fallback language
    fallbackLng: 'en', // Set the default fallback languag
  });

export default i18n;