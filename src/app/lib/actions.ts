'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { SignInResponse } from 'next-auth/react';
 interface IFormInput {
  usermail: string
  password: string
}
 
export async function authenticate(
  prevState: string | undefined,
  formData: IFormInput,
) {
  try {
    await signIn('credentials', formData)
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {
        console.log(err)
      })
    
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error)
      switch (error.type) {
        case 'CredentialsSignin':
          return 'algo';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}