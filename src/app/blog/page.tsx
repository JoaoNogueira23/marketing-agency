import Header from "@/components/Header/Header"
import React, { useEffect } from "react"
import { Providers, useAppContext } from "../providers/providers";
import { Post } from "@/types/index.s";
import { PostsLoader } from "./postLoader";
interface BlogPageProps {

}

type ResponseRequest = {
    items: Post[]
    total: number
    limit: number
    offset: number
}


export default async function BlogPage(props : BlogPageProps){
    const limit = 10
    const offset = 0
    const url = process.env.NEXT_PRIVATE_API_URL + `/posts/get-posts`   
    let data = await fetch(url, {
        method: 'GET',
        cache: 'no-store'  
    })
    let posts: ResponseRequest = await data.json()
    return(
        <>
            <Providers>
                <Header />
                <PostsLoader 
                posts={posts.items}
                />
            </Providers>
        </>
    )
}