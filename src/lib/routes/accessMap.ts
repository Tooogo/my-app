// lib/routes/accessMap.ts

import { RouteKey } from './keys';
import type { Role } from '@/types/auth';

export const ROUTE_PATHS: Record<RouteKey, string | ((id: string) => string)> = {
  EN_SUBMIT: '/en/submit',
  JP_SUBMIT: '/jp/submit',
  EN_MYPAGE: '/en/mypage',
  JP_MYPAGE: '/jp/mypage',
  EN_FAMILY_EDIT: (id: string) => `/en/family/${id}/edit/`,
  JP_FAMILY_EDIT: (id: string) => `/jp/family/${id}/edit/`,
};

export const ROUTE_ACCESS: Record<RouteKey, Role[]> = {
  EN_SUBMIT: ['admin', 'user'],
  EN_MYPAGE: ['admin'],
  JP_SUBMIT: ['admin', 'user'],
  JP_MYPAGE: ['admin'],
  EN_FAMILY_EDIT: ['admin'],
  JP_FAMILY_EDIT: ['admin'],
};