import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const isLoggedIn = Boolean(request.cookies.get("auth_token")); // adjust cookie name
  const { pathname } = request.nextUrl;

  // Redirect logged-in users away from /auth/signin
  if (pathname === "/auth/signin" && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Handle internationalization
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except:
    // - api routes
    // - trpc routes
    // - _next system routes
    // - _vercel system routes
    // - files with extensions (e.g., favicon.ico)
    // - static assets
    // - /admin or anything starting with /admin
    "/((?!api|trpc|_next|_vercel|.*\\..*|favicon.ico|robots.txt|sitemap.xml|images|admin).*)",
  ],
};
