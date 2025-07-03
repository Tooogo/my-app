import 'server-only'
import { cookies } from 'next/headers'
import { JWTPayload, SignJWT, jwtVerify } from 'jose'
export { jwtVerify };

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret');  // セキュアなキーを使用

interface SessionPayload extends JWTPayload {
    userId: string
    role: 'admin' | 'user'
    expiresAt: Date
  }


export async function encrypt(payload: SessionPayload) {
return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(payload.expiresAt.getTime() / 1000) // 秒単位に変換
    .sign(SECRET_KEY)
}

// JWT を復号してセッション情報を取得する関数
export async function decrypt(session: string | undefined = '') {
try {
    const { payload } = await jwtVerify(session, SECRET_KEY, {
    algorithms: ['HS256'],
    })
    return payload as SessionPayload
} catch (error) {
    console.log('Failed to verify session:', error)
    return null
}
}

// セッションを作成しクッキーに保存する関数
export async function createSession(userId: string, role: 'admin' | 'user') {
const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7日間有効
const session = await encrypt({ userId, role, expiresAt })

const cookieStore = await cookies()
cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
})
}


export async function clearSession() {
  const cookieStore = await cookies()
  cookieStore.set('session', '', {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
    sameSite: 'lax',
    path: '/',
  })
}


export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
  }