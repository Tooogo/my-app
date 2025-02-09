// app/i18n.ts
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: {
          greeting: "Hello",
        },
      },
      ja: {
        common: {
          greeting: "こんにちは",
        },
      },
      // 他の言語を追加する場合はここに追加
    },
    lng: 'en', // デフォルトの言語
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // Reactは自動的にエスケープするので設定は不要
    },
  });

export default i18next;
