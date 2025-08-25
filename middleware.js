import { NextResponse } from 'next/server'

export function middleware(req) {
  const auth = req.headers.get('authorization')
  const USER = process.env.BASIC_AUTH_USER
  const PASS = process.env.BASIC_AUTH_PASS

  if (auth && auth.startsWith('Basic ')) {
    const base64 = auth.split(' ')[1]
    try {
      const decoded = atob(base64) // Edge runtime safe
      const sep = decoded.indexOf(':')
      const user = decoded.slice(0, sep)
      const pass = decoded.slice(sep + 1)
      if (user === USER && pass === PASS) {
        return NextResponse.next()
      }
    } catch {}
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Private"' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
