'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
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
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}