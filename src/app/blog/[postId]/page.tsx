"use client"
import { Post } from "@/types/index.s"
import Image from "next/image";
import { useEffect, useState } from "react";

type PostProps = {
    params: {
        postId: string
    }
    searchParams: {}[]
}

type ResponseRequest = {
    items: Post[]
    total: number
    limit: number
    offset: number
}

export default function PostPage(props : PostProps){
    const [loading, setLoading] = useState<Boolean>(false)
    const [post, setPost] = useState<Post>() 
    

    const fetchData = async () => {
        const url = `http://localhost:8000/api/posts/get-posts?postId=${props.params.postId}`;

        const data = await fetch(url, {
            method: 'GET',
            cache: 'no-store',
        });
        const response: ResponseRequest = await data.json();

        setPost(response.items[0])
        
        setLoading(true)
    
    }

    useEffect(() => {
        fetchData()
    }, [props])

    // suspense loading
    if(!loading){
        return(
            <div className="loading-error">
                <div className="fakeImage"></div>
    
                <div className="fakeParagraphs"></div>
                <div className="fakeParagraphs"></div>
                <div className="fakeParagraphs"></div>
            </div>
        )
    }

    if(post){
        return(
            <div className="contentPost">
                <div className="postTitle">
                    {post.title}
                </div>

                <Image
                    className="image" 
                    width={800}
                    height={400}
                    alt="Post Image"
                    src={post.urlImage}
                    key={`image-${Math.random()}`}
                />
                

                <div className="postResume">
                    {post.resume}
                </div>

                {post.rawText.split(';').map(p => (
                    <div className="postParagraph" key={'paragraphs'}>
                        <p className="p" key={`p-${Math.random()}`}>
                            {p}
                        </p>
                    </div>
                ))}

                <div className="acthorInfos">
                    Publicado em {post.publishedDate}, por {post.acthor}
                </div>
            </div>
        )
    }
    
}