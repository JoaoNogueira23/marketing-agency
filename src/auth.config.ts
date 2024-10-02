import type { NextAuthConfig } from 'next-auth';
import { isAuthenticated } from './hooks/useAuth';
import { cookies } from 'next/headers';
 
export const authConfig = {
  pages: {
    signIn: '/admin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const cookiesSession = cookies()
      const userData = cookiesSession.get('user')
      const isLoggedIn = userData ? true : false
      const isOnDashboard = nextUrl.pathname == '/admin/manager-page'
      if (isOnDashboard) {
        if (isLoggedIn) 
          return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname == '/admin') {
        console.log('aqui')
        return Response.redirect(new URL('/admin/manager-page', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;