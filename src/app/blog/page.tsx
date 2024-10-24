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
    const limit = 10;
    const offset = searchParams.offset ? parseInt(searchParams.offset) : 0;

    const url = `${process.env.NEXT_PRIVATE_API_URL}/posts/get-posts?limit=${limit}&offset=${offset}`;
    const data = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
    });
    const posts: ResponseRequest = await data.json();
    return(
        <>
            <Providers>
                <div className="containerBlogPage">
                    <Header />
                    <PostsLoader 
                    posts={posts.items}
                    />
                    <div>
                        <a href={`?offset=${offset - limit}`} style={{ marginRight: '10px' }}>
                            Anterior
                        </a>
                        <a href={`?offset=${offset + limit}`}>
                            Próximo
                        </a>
                    </div>
                </div>
               
            </Providers>
        </>
    )
}