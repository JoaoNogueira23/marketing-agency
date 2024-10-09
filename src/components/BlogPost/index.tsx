import Image from "next/image"
import { Suspense } from "react"

interface BlogPostProps {
    title: string
    rawText: string
    publishedDate: string
    resume: string
    acthor: string
    postId: string
}

export default async function BlogPost({title, rawText, resume, acthor, publishedDate} : BlogPostProps){
    
    
    return(
        <>
            <div className="contentPost">
                <div className="postTitle">
                    {title}
                </div>

                <Suspense fallback={<div>loading...</div>}>
                    <Image 
                         width={300}
                         height={300}
                         alt="Post Image"
                         unoptimized // sem essa teg que bloqueia a otimização automática do nextjs n carrega
                         src={"https://storage.cloud.google.com/blog-content-s3/posts/20241007/1ef85076-48bf-6486-a79f-2bcd2a62c6b6.webp"}
                    />
                </Suspense>
                

                <div className="postResume">
                    {resume}
                </div>

                {rawText.split(';').map(p => (
                    <div className="postParagraph" key={'paragraphs'}>
                        <div className="p" key={`p-${Math.random()}`}>
                            {p}
                        </div>
                    </div>
                ))}

                <div className="acthorInfos">
                    Publicado em {publishedDate}, por {acthor}
                </div>
            </div>
        </>
    )
}