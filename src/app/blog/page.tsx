import BlogPost from "@/components/BlogPost"
import Header from "@/components/Header/Header"
import React from "react"
import { Post } from './../../components/Posts/types/postTypes';


interface BlogPageProps {

}

type ResponseRequest = {
    items:{
            title: string
            resume: string
            rawText: string
            publishedData: string
            postId: string
            acthor: string
    }[]
    total: number
    limit: number
    offset: number
}
export default async function BlogPage(props : BlogPageProps){
    const url = process.env.NEXT_PRIVATE_API_URL + '/posts/get-posts'
    let data = await fetch(url, {
        method: 'GET'
    })
    let posts: ResponseRequest = await data.json()

    return(
        <>
            <Header />
            <div className="containerBlog">
                {posts.items.map(post=> (
                    <BlogPost 
                    title={post.title}
                    resume={post.resume}
                    rawText={post.rawText}
                    postId={post.postId}
                    acthor={post.acthor}
                    publishedDate={post.publishedData}
                    />
                ))}
            </div>
            
        </>
    )
}