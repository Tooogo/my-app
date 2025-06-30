import 'server-only'
import { cookies } from 'next/headers'
import { JWTPayload, jwtVerify } from 'jose'
export { jwtVerify };

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret');  // セキュアなキーを使用

interface SessionPayload extends JWTPayload {
    userId: string
    role: 'admin' | 'user'
    expiresAt: Date
  }


export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as SessionPayload;
  } catch {
    return null;
  }
}