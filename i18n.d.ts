// i18n.d.ts
import 'next-i18next';

declare module 'next-i18next' {
  interface Resources {
    common: {
      greeting: string;
      // 他の翻訳キーをここに追加
    };
  }
}
