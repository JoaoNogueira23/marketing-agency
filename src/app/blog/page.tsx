import Header from "@/components/Header/Header"
import React from "react"
import { Providers } from "../providers/providers";
import { Post } from "@/types/index.s";
import { PostsLoader } from "./postLoader";

type ResponseRequest = {
    items: Post[]
    total: number
    limit: number
    offset: number
}

type BlogPageProps = {
    searchParams: {
      offset?: string;
    };
};

export default async function BlogPage({ searchParams }: BlogPageProps){
    const limit = 50
    const page = 1
    const size = 10
    const offset = searchParams.offset ? parseInt(searchParams.offset) : 0;

    

    const url = `${process.env.NEXT_PRIVATE_API_URL}/posts/get-posts?limit=${limit}&offset=${offset}&page${page}&size=${size}`;
    const data = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
    });
    const posts: ResponseRequest = await data.json();
    return(
        <>
            <Providers>
                <Header />
                <div className="containerBlogPage">
                    <div>
                        <PostsLoader 
                        posts={posts.items}
                        />
                    </div>
                    
                    <div className="contentControl">
                        <a className="btnControlData" href={`?offset=${offset - limit}`} style={{ marginRight: '10px' }}>
                            Anterior
                        </a>
                        <a className="btnControlData" href={`?offset=${offset + limit}`}>
                            Próximo
                        </a>
                    </div>
                </div>
               
            </Providers>
        </>
    )
}