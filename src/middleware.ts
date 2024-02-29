import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { locales, localePrefix, defaultLocale } from "./navigation";

const protectedPages: Array<string> = [];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  const protectedPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${protectedPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const isProtectedPathnameRegexPage = protectedPathnameRegex.test(
    req.nextUrl.pathname
  );

  if (isProtectedPathnameRegexPage && protectedPages.length > 0) {
  } else {
    return intlMiddleware(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
