'use client'
import { Post } from "@/types/index.s"
import { useAppContext } from "../providers/providers"
import { useEffect } from "react"
import CardPost from "@/components/CardPost"
import Link from "next/link"


export const PostsLoader = ({posts}: {
    posts: Post[]}
) => {
    'use client'
    const {setPostsContext} = useAppContext()

    useEffect(() => {
        setPostsContext(posts)
    }, [posts, setPostsContext])

    return(
        <div className="containerBlog">
            {/* Slider with  */}
            {posts.map(post => (
                <Link
                href="/blog/[postId]" 
                as={`/blog/${post.postId}`}
                >
                    <CardPost 
                    title={post.title}
                    publishedDate={post.publishedDate}
                    urlImage={post.urlImage}
                    />
                </Link>
                
            ))}
        </div>
    )

}