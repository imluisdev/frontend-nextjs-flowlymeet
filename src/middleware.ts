import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req: any) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If user is not signed in and the current path is not /login or /auth/callback
    // redirect the user to /auth/login
    // if (!session && !req.nextUrl.pathname.startsWith('/auth/login') && !req.nextUrl.pathname.startsWith('/auth/callback')) {
    //   const redirectUrl = req.nextUrl.clone()
    //   redirectUrl.pathname = '/auth/login'
    //   return NextResponse.redirect(redirectUrl)
    // }
  } catch (error) {
    console.error('Error getting session:', error);
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth/login'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}