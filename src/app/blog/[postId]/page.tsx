'use client'

import useAppContext from "@/hooks/useAppContext"
import { Post as PostType} from "@/types/index.s"
import Image from "next/image";

interface PostProps {
    params: {
        postId: string
    }
    searchParams: {}[]
}

export default function Post(props : PostProps){
    const {postsContext} = useAppContext()
    console.log(postsContext)

    const postId = props.params.postId
    const post: PostType = postsContext.filter(obj => obj.postId == postId)[0]

    return(
        <div className="contentPost">
            <div className="postTitle">
                {post.title}
            </div>

            <Image 
                width={300}
                height={300}
                alt="Post Image"
                unoptimized
                src={post.urlImage}
            />
            

            <div className="postResume">
                {post.resume}
            </div>

            {post.rawText.split(';').map(p => (
                <div className="postParagraph" key={'paragraphs'}>
                    <div className="p" key={`p-${Math.random()}`}>
                        {p}
                    </div>
                </div>
            ))}

            <div className="acthorInfos">
                Publicado em {post.publishedDate}, por {post.acthor}
            </div>
        </div>
    )
}