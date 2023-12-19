import { NextRequest, NextResponse } from "next/server";
 
const isPasswordEnabled = !!process.env.PASSWORD_PROTECT;


export async function middleware(req) {

  const isLoggedIn = req.cookies.has("login");
  const isPathPasswordProtect = req.nextUrl.pathname.startsWith("/password-protect");
  
  if (isPasswordEnabled && !isLoggedIn && !isPathPasswordProtect) {
    const newurl = new URL('/password-protect', req.url)
    newurl.searchParams.set('from', req.nextUrl.pathname)
    return NextResponse.redirect(newurl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/work/:path*',
  ],
};
