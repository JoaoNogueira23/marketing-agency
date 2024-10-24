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
                    placeholder="blur"
                    blurDataURL="/frame_images.webp"
                    src={urlImage}
                />

            
        </div>
    )
}