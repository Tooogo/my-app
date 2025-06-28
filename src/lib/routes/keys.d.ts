// lib/routes/keys.ts

export const ROUTE_KEYS = {
  EN_SUBMIT: 'EN_SUBMIT',
  EN_MYPAGE: 'EN_MYPAGE',
  JP_SUBMIT: 'JP_SUBMIT',
  JP_MYPAGE: 'JP_MYPAGE',
  EN_FAMILY_EDIT: 'EN_FAMILY_EDIT',
  JP_FAMILY_EDIT: 'JP_FAMILY_EDIT',
} as const;

export type RouteKey = keyof typeof ROUTE_KEYS;
