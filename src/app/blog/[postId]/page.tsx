import Header from "@/components/Header/Header";
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

    const post = response.items[0]

    const urlImage = await post.urlImage

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
                    src={urlImage}
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