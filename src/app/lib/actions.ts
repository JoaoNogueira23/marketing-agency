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

interface IFormInputPost {
  title: string
  resume: string
  acthor: string
  paragraphs: string
  Image?: string
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

export async function crestePostAction(
  formData: IFormInputPost
) 
{
  try{
      const url = 'http://localhost:8080/api'
      // logica de autenticação (request na minha api)
      const response = await fetch(
          url + '/posts/create-post',
          {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },    
          body: JSON.stringify(formData)
          }
      )

      if(response.ok){
          alert("Post created with sucess!")
      }else{
          console.log(response)
          alert("Error on request")
      }
  }
  catch (err) {
    console.log(err)
  }
}