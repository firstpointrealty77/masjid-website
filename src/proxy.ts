import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicSeoPaths =
    pathname === "/jummah-prayer-ballantyne" ||
    pathname === "/masjid-ballantyne" ||
    pathname === "/masjid-indian-land" ||
    pathname === "/mosque-fort-mill";

  const publicAboutPaths =
    pathname === "/about" ||
    pathname === "/about/leadership";

  const allowedPaths =
    pathname === "/_not-found" ||
    pathname === "/" ||
    pathname === "/donate" ||
    pathname === "/contact" ||
    pathname === "/construction-progress" ||
    publicSeoPaths ||
    publicAboutPaths ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/media") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".");

  if (allowedPaths) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/_not-found", request.url), { status: 404 });
}

export const config = {
  matcher: "/:path*",
};
