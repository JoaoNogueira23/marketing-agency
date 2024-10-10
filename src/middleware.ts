import NextAuth from "next-auth";
import { authConfig } from "./auth.config";


const protectedRoutes = ["/admin/manager-page"];

export default NextAuth(authConfig).auth;


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  /* console.log(isAuthenticated)
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  } */
}