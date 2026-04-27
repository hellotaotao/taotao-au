import { NextRequest, NextResponse } from "next/server";

import { resolvedLocaleHeader, resolveLocale } from "./app/i18n";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const languageParam =
    request.nextUrl.searchParams.get("language") ??
    request.nextUrl.searchParams.get("lang");

  requestHeaders.set(
    resolvedLocaleHeader,
    resolveLocale({
      languageParam,
      acceptLanguage: request.headers.get("accept-language"),
    }),
  );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/",
};
