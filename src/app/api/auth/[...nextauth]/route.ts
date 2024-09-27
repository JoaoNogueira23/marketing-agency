import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import {cookies} from 'next/headers'
import { authConfig } from "../auth.config"

type User = {
    usermail: string
    token: string 
    userType: string
}

const handler = NextAuth({
    ...authConfig,
    pages:{
        signIn: '/admin'
    },
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                console.log(credentials)
                return null
            }
        })
    ]
})

export {handler as GET, handler as POST}
