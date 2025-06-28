// src/lib/routes/__tests__/accessMap.test.ts

import { ROUTE_PATHS, ROUTE_ACCESS } from '../accessMap';
import type { RouteKey } from '../keys';
import type { Role } from '@/types/auth';

describe('ROUTE_PATHS', () => {
  it('全てのルートキーがstringまたはfunctionである', () => {
    for (const key in ROUTE_PATHS) {
      const path = ROUTE_PATHS[key as RouteKey];
      const type = typeof path;
      expect(['string', 'function']).toContain(type);
    }
  });

  it('動的ルートは関数であり、:idを含んだURLを生成する', () => {
    const editKeys = ['EN_FAMILY_EDIT', 'JP_FAMILY_EDIT'] as RouteKey[];
    for (const key of editKeys) {
      const pathFn = ROUTE_PATHS[key] as (id: string) => string;
      expect(typeof pathFn).toBe('function');
      const path = pathFn('123');
      expect(path).toMatch(/\/family\/123\/edit\/?$/);
    }
  });
});

describe('ROUTE_ACCESS', () => {
  const validRoles: Role[] = ['admin', 'user'];

  it('全てのルートキーに対応する権限が設定されている', () => {
    for (const key in ROUTE_ACCESS) {
      const roles = ROUTE_ACCESS[key as RouteKey];
      expect(Array.isArray(roles)).toBe(true);
      for (const role of roles) {
        expect(validRoles).toContain(role);
      }
    }
  });

  it('admin専用ルートはuserを含まない', () => {
    const adminOnly = ['EN_MYPAGE', 'JP_MYPAGE', 'EN_FAMILY_EDIT', 'JP_FAMILY_EDIT'] as RouteKey[];
    for (const key of adminOnly) {
      const roles = ROUTE_ACCESS[key];
      expect(roles).not.toContain('user');
      expect(roles).toContain('admin');
    }
  });

  it('adminとuserの両方が許可されているルートがある', () => {
    const dualAccess = ['EN_SUBMIT', 'JP_SUBMIT'] as RouteKey[];
    for (const key of dualAccess) {
      const roles = ROUTE_ACCESS[key];
      expect(roles).toContain('admin');
      expect(roles).toContain('user');
    }
  });
});
