import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          HELP: "Help",
          START: "Start",
          STOP: "Stop",

          MESSAGES: {
            PROJECT_ADD_SAVED: "New project saved successfully!",
          },
        },
      },
      fa: {
        translation: {
          OK: "باشه",

          HELP: "راهنما",
          START: "شروع",

          MESSAGES: {
            PROJECT_ADD_SAVED: "پروژه جدید با موفقیت افزوده شد",
          },
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
