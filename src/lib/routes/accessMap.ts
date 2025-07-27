import { RouteKey } from './keys';
import { UserRole } from '@/types/auth';

export const ROUTE_PATHS: Record<RouteKey, string | ((id: string) => string)> = {
  EN_SUBMIT: '/en/submit',
  JP_SUBMIT: '/jp/submit',
  EN_MYPAGE: '/en/mypage',
  JP_MYPAGE: '/jp/mypage',
  EN_FAMILY_EDIT: (id: string) => `/en/family/${id}/edit/`,
  JP_FAMILY_EDIT: (id: string) => `/jp/family/${id}/edit/`,
};


export const ROUTE_ACCESS: Record<RouteKey, UserRole[]> = {
  EN_SUBMIT: [UserRole.Admin, UserRole.User],
  EN_MYPAGE: [UserRole.Admin],
  JP_SUBMIT: [UserRole.Admin, UserRole.User],
  JP_MYPAGE: [UserRole.Admin],
  EN_FAMILY_EDIT: [UserRole.Admin],
  JP_FAMILY_EDIT: [UserRole.Admin],
};
