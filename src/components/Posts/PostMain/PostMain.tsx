import { objectPostType, PropsPost } from '../types/postTypes'
import '../styles/postmain.sass'

export default function PostMain({reverse=false, data, sectionTitle, catchphrase}: PropsPost) {

    return(
        <div className={`post-container${reverse ? '-reverse' : ''}`}>
            <div className="image-post">
                Imagem
            </div>

            <div className="content-post">
                <h4 className='post-title medium'>{sectionTitle}</h4>

                <h1 className='post-title-larger'>{catchphrase}</h1>
                
                <div className="content-services">
                    {data.map((obj: objectPostType) => (
                        <div className="describe-services" key={Math.random()}>
                            {obj.title && <h4 className='service-title'>{obj.title}</h4>}
                            <p>
                            {obj.paragraph}
                            </p>

                            {!obj.title && <button className='btn'>Learn More</button>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}