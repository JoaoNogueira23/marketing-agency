import Image from "next/image";

interface CardPostProps {
    title: string
    urlImage: string
    publishedDate: string
}
export default function CardPost({publishedDate, title, urlImage} : CardPostProps){
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
                className="cardPostImage"
                width={150}
                height={150}
                alt="Post Image"
                key={`image-${Math.random()}`}
                unoptimized // sem essa teg que bloqueia a otimização automática do nextjs n carrega
                src={urlImage}
            />
        </div>
    )
}