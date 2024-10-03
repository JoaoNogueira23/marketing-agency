'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { SignInResponse } from 'next-auth/react';
import { cookies } from 'next/headers';
 
// ...

interface IFormInput {
  usermail: string
  password: string
}
 
export async function authenticate(
  prevState: string | undefined,
  formData: IFormInput,
) {
  try {
    const response: SignInResponse = await signIn('credentials', formData);

    return response
    
  } catch (error) {
    if (error instanceof AuthError) {
      return error.message.split(' .Read')[0].toString()
    }
    throw error;
  }
}