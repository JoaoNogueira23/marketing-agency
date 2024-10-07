import type { NextAuthConfig } from 'next-auth';
import { cookies } from 'next/headers';
import { isTokenValid } from './utils/tokenUser';

type userPayload = {
  token: string
}
 
export const authConfig = {
  pages: {
    signIn: '/admin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const cookiesSession = cookies()
      const userCookie = cookiesSession.get('session')
      let userSession: string | undefined

      // verificando sessão do usuário pelos cookies
      if (userCookie?.value) {
        try {
          userSession = String(JSON.parse(userCookie.value))
          
        } catch (error) {
          console.error("Erro ao fazer o parse do cookie:", error);
        }
      }

      const isLoggedIn = userSession ? isTokenValid(userSession) : false
      const isOnDashboard = nextUrl.pathname == '/admin/dashboard' || nextUrl.pathname == '/admin/create-post'
      if (isOnDashboard) {
        if (isLoggedIn) 
          return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname == '/admin') {
        return Response.redirect(new URL('/admin/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.NEXTAUTH_SECRET
} satisfies NextAuthConfig;