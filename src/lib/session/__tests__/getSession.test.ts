// __tests__/getSession.test.ts
import { getSession } from '@/lib/session/getSession';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

jest.mock('jose', () => ({
  jwtVerify: jest.fn(),
}));

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('getSession', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns session payload if token is valid', async () => {
    (cookies as jest.Mock).mockReturnValueOnce({
      get: () => ({ value: 'valid.jwt.token' }),
    });
    (jwtVerify as jest.Mock).mockResolvedValueOnce({
      payload: {
        userId: 'abc123',
        role: 'admin',
        expiresAt: new Date(),
      },
    });

    const session = await getSession();
    expect(session?.userId).toBe('abc123');
  });

  it('returns null if no session cookie is present', async () => {
    (cookies as jest.Mock).mockReturnValueOnce({
      get: () => null,
    });

    const session = await getSession();
    expect(session).toBeNull();
  });

  it('returns null if jwtVerify throws', async () => {
    (cookies as jest.Mock).mockReturnValueOnce({
      get: () => ({ value: 'invalid.jwt.token' }),
    });
    (jwtVerify as jest.Mock).mockRejectedValueOnce(new Error('Invalid token'));

    const session = await getSession();
    expect(session).toBeNull();
  });
});
