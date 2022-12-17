import { NextRequest, NextResponse } from "next/server";
import { withClerkMiddleware } from "@clerk/nextjs/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)",
  ],
};

export default withClerkMiddleware((req: NextRequest) => {
  const url = req.nextUrl;

  // Get hostname of request (e.g. localhost:3000, acme.localhost:3000, authenticinsurance.com, etc.)
  const hostname = req.headers.get("host") || "localhost:3000";

  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(``, "") // TODO Add production URL here
      : hostname.replace(`.localhost:3000`, "");

  // rewrites for app pages
  if (currentHost == "app") {
    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname === "localhost:3000") {
    // TODO Add the production URL here
    url.pathname = `/home${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
});
