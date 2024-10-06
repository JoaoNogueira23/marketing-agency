'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { SignInResponse } from 'next-auth/react';
import { cookies } from 'next/headers';
import { FormState, SignupFormSchema } from './definitions';
 
// ...

interface IFormInput {
  usermail: string
  password: string
}
 
export async function signInAction(
  state: FormState,
  FormData: IFormInput
) {
  try {
    const response: SignInResponse = await signIn('credentials', FormData);

    return response
  } catch (error) {
    if (error instanceof AuthError) {
      return error.message.split(' .Read')[0].toString()
    }
    throw error;
  }
}