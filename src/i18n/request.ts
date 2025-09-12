// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  // 必要に応じて default/fallback を入れてもOK
  messages: (await import(`../messages/${locale}.json`)).default
}));
