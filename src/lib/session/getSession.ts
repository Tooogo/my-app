import 'server-only';
import { cookies } from 'next/headers';
import { JWTPayload, jwtVerify, JWTHeaderParameters } from 'jose';
export { jwtVerify };

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret');

interface SessionPayload extends JWTPayload {
  userId: string;
  role: 'admin' | 'user';
  expiresAt: string;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session'); // 型: Cookie | undefined
  if (!sessionCookie?.value) return null;

  const token: string = sessionCookie.value;

  try {
    const { payload }: { payload: JWTPayload; protectedHeader: JWTHeaderParameters } =
      await jwtVerify(token, SECRET_KEY);

    return payload as SessionPayload;
  } catch {
    return null;
  }
}
