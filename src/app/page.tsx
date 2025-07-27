// src/app/page.tsx

import { redirect } from 'next/navigation';

import { headers } from 'next/headers';
import Negotiator from 'negotiator';

const LOCALES = ['ja', 'en'];
const DEFAULT_LOCALE = 'ja';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') ?? '';
  const negotiator = new Negotiator({ headers: { 'accept-language': acceptLanguage } });
  const locale = negotiator.language(LOCALES) || DEFAULT_LOCALE;

  redirect(`/${locale}`);
}