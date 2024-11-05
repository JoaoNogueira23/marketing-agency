"use client"
import Image from "next/image";
import { useState } from "react";
interface CardPostProps {
    title: string
    urlImage: string
    publishedDate: string
}
export default async function CardPost({publishedDate, title, urlImage} : CardPostProps){
    "use client"
    const [loading, setLoading] = useState<Boolean>(false)

    return(
        <div className="containerCardPost" key={`card-${Math.random()}`}>
            <div className="cardInfos">
                <h4 className="cardTitle">
                    {title}
                </h4>

                <div className="cardDate">
                    {publishedDate}
                </div>
            </div>


            <Image
                className={loading ? "fakeImage" : "cardPostImage"}
                width={150}
                height={150}
                alt="Post Image"
                key={`image-${Math.random()}`}
                src={urlImage}
                onLoad={() => setLoading(true)}
                onError={() => setLoading(true)}
            />

            
        </div>
    )
}