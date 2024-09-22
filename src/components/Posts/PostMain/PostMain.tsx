import { objectPostType, PropsPost } from '../types/postTypes'
import '../styles/postmain.sass'
import Image from 'next/image'

export default function PostMain({reverse=false, data, sectionTitle, catchphrase}: PropsPost) {

    return(
        <div className={`post-container${reverse ? '-reverse' : ''}`}>

            <div className="container-frame-img">
                <Image 
                src={'/team_work_coffe.webp'}
                width={400}
                height={400}
                alt='Team Work Image'
                className='image-post'
                />
            </div>
            


            <div className="content-post">
                <h4 className='post-title medium'>{sectionTitle}</h4>

                <h1 className='post-title-larger'>{catchphrase}</h1>
                
                <div className={`content-services${reverse || !data[0].title? '-reverse' : ''}`}>
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