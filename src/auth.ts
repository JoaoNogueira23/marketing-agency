import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { cookies } from 'next/headers';
//import { AuthorizeError} from 'next-auth/errors' talvez depois
interface IFormInput {
  usermail: string
  password: string
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials, request) {
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
          cookiesSession.set('session', JSON.stringify(user.data.token))
          return user
        } else {
          const responseError = await response.json()
          throw new AuthError(responseError.message || 'Authentication failed')
        }
      },
    })
  ],

});