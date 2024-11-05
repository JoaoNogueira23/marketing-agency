import { Post } from "@/types/index.s"
import Image from "next/image";

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

export default async function PostPage(props : PostProps){

    const url = `${process.env.NEXT_PRIVATE_API_URL}/posts/get-posts?postId=${props.params.postId}`;
    const data = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
    });
    const response: ResponseRequest = await data.json();
    console.log(response)
    const post = response.items[0]

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