import {
  encrypt,
  decrypt,
  createSession,
  clearSession,
  deleteSession,
} from '../session';
import { cookies } from 'next/headers';

jest.mock('jose', () => ({
  SignJWT: jest.fn().mockImplementation(() => ({
    setProtectedHeader: jest.fn().mockReturnThis(),
    setIssuedAt: jest.fn().mockReturnThis(),
    setExpirationTime: jest.fn().mockReturnThis(),
    sign: jest.fn().mockResolvedValue('mocked-token'),
  })),
  jwtVerify: jest.fn().mockResolvedValue({
    payload: {
      userId: 'mock-user-id',
      role: 'admin',
      expiresAt: new Date(),
    },
  }),
}));

jest.mock('next/headers', () => {
  const cookieStore = {
    set: jest.fn(),
    delete: jest.fn(),
    get: jest.fn(() => ({ value: 'mock-token' })),
  };
  return {
    cookies: jest.fn(() => cookieStore),
  };
});

describe('session utilities', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('encrypt should return mocked token', async () => {
    const token = await encrypt({
      userId: 'user123',
      role: 'admin',
      expiresAt: new Date(),
    });
    expect(token).toBe('mocked-token');
  });

  test('decrypt should return mocked payload', async () => {
    const session = await decrypt('dummy-token');
    expect(session).toEqual({
      userId: 'mock-user-id',
      role: 'admin',
      expiresAt: expect.any(Date),
    });
  });

  test('createSession should set cookie with session token', async () => {
    const cookieStore = await cookies();
    await createSession('admin123', 'admin');
    expect(cookieStore.set).toHaveBeenCalledWith(
      'session',
      'mocked-token',
      expect.objectContaining({
        httpOnly: true,
        secure: true,
        path: '/',
      })
    );
  });

  test('clearSession should set session cookie to empty with expired date', async () => {
    const cookieStore = await cookies();
    await clearSession();
    expect(cookieStore.set).toHaveBeenCalledWith(
      'session',
      '',
      expect.objectContaining({
        expires: new Date(0),
      })
    );
  });

  test('deleteSession should call delete on cookieStore', async () => {
    const cookieStore = await cookies();
    await deleteSession();
    expect(cookieStore.delete).toHaveBeenCalledWith('session');
  });
});
