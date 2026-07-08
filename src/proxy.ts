import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicSeoPaths =
    pathname === "/jummah-prayer-ballantyne" ||
    pathname === "/masjid-ballantyne" ||
    pathname === "/masjid-indian-land" ||
    pathname === "/mosque-fort-mill";

  const allowedPaths =
    pathname === "/" ||
    publicSeoPaths ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/media") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".");

  if (allowedPaths) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/:path*",
};