import BlogPost from "@/components/BlogPost"
import Header from "@/components/Header/Header"
import React from "react"
import { Post } from './../../components/Posts/types/postTypes';
import CardPost from "@/components/CardPost";


interface BlogPageProps {

}

type ResponseRequest = {
    items:{
            title: string
            resume: string
            rawText: string
            publishedDate: string
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

    const firstPost = posts.items[0]

    return(
        <>
            <Header />
            <div className="containerBlog">

                {/* Slider with  */}
                {posts.items.map(post => (
                    <CardPost 
                    title={post.title}
                    publishedDate={post.publishedDate}
                    urlImage="https://storage.cloud.google.com/blog-content-s3/posts/20241007/1ef85076-48bf-6486-a79f-2bcd2a62c6b6.webp"
                    />
                ))}



            </div>
            
        </>
    )
}