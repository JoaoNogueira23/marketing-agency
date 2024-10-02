import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';
import { isTokenValid } from './utils/tokenUser';

interface IFormInput {
  usermail: string
  password: string
}

type userPayload = {
  message: string
  data: {
    token: string
    username: string
    userType: string
  }
}

export const { auth, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/admin',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        usermail: {label: 'usermail', type: 'text'},
        password: {label: 'password', type: 'password'}
      },
      authorize: async (credentials) => {
        const cookiesSession = cookies()
        const { usermail, password } = credentials as unknown as IFormInput;
        const url = 'http://localhost:8000/api'
        // logica de autenticação (request na minha api)
        const response = await fetch(
            url + '/user/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
              },    
              body: new URLSearchParams({
                  'username': usermail,
                  'password': password,
                  'grant_type': 'password'
              })
            }
        )
 
        // Verificação da resposta
        if (response.ok) {
          const user = await response.json();
          cookiesSession.set('user', JSON.stringify(user))
          return response
        } else {
          const dataError = await response.json()
          return response
        }
      },
    })
  ],
  callbacks:{
    authorized({ auth, request: { nextUrl } }) {
      console.log('auth callback:', auth)
      const cookiesSession = cookies()
      const userCookie = cookiesSession.get('user')
      let userData: userPayload | undefined;

      // verificando sessão do usuário pelos cookies
      if (userCookie?.value) {
        try {
          userData = JSON.parse(userCookie.value) as userPayload;
        } catch (error) {
          console.error("Erro ao fazer o parse do cookie:", error);
          userData = undefined;
        }
      }
      const isLoggedIn = false
      const isOnDashboard = nextUrl.pathname == '/admin/manager-page'
      try{
        if (isOnDashboard && !isLoggedIn) {
            return false;
        } 

        if (isLoggedIn && nextUrl.pathname == '/admin') {
          return true
        }
        return true;
  
      }catch (error){
        console.log("new error:", error)
        throw error
      }

      
      
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith(baseUrl)) return url;
      // Redireciona o usuário para o dashboard ao invés da página de login se ele já estiver autenticado
      return baseUrl;
    },
  }
});