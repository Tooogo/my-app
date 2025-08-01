// __tests__/middleware.test.ts

// ✅ joseが含まれるgetSession.tsを完全にモックする
jest.mock('../lib/session/getSession', () => ({
  getSession: jest.fn(),
}));

// ✅ モックの後にインポート（順番重要）
import { getSession } from '../lib/session/getSession';
import { middleware } from '../middleware';
import { NextRequest } from 'next/server';

jest.mock('next/server', () => ({
  NextResponse: {
    next: jest.fn(() => 'next response'),
    redirect: jest.fn((url) => `redirect to ${url}`),
  },
}));

function mockRequest(pathname: string) {
  const baseUrl = 'http://localhost'; // 必須
  return {
    nextUrl: {
      pathname,
      search: '',
      searchParams: new URLSearchParams(),
      clone: () => ({}),
    },
    cookies: {
      get: jest.fn(() => null),
    },
    url: `${baseUrl}${pathname}`, // ← ⭐ ここが必要！
  } as unknown as NextRequest;
}




describe('middleware', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to /login if no session exists', async () => {
    (getSession as jest.Mock).mockResolvedValue(null);

    const req = mockRequest('/en/mypage');
    const result = await middleware(req);

    expect(result).toBe('redirect to http://localhost/login');
  });

  it('redirects to /not-found if role is not allowed', async () => {
    (getSession as jest.Mock).mockResolvedValue({
      userId: 'u1',
      role: 'user',
      expiresAt: new Date(Date.now() + 10000),
    });

    const req = mockRequest('/en/mypage');
    const result = await middleware(req);

    expect(result).toBe('redirect to http://localhost/not-found');
  });

  it('allows access if session and role are valid', async () => {
    (getSession as jest.Mock).mockResolvedValue({
      userId: 'u1',
      role: 'admin',
      expiresAt: new Date(Date.now() + 10000),
    });

    const req = mockRequest('/en/mypage');
    const result = await middleware(req);

    expect(result).toBe('next response');
  });
});
