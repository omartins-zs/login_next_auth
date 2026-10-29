import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    app: 'login_next_auth',
    framework: 'Next.js 14',
    authProvider: 'NextAuth.js v4 (Credentials)',
    timestamp: new Date().toISOString(),
  })
}
