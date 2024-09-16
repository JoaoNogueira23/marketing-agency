import './home.sass'
import Image from 'next/image'
import PostSection from '@/components/Posts'
import DividerSection from '@/components/Divider/Divider'
import BlogSection from './Sections/BlogSection/BlogSection'
import TestimonialsSection from './Sections/Testimonials/TestimonialsSection'


export default function HomePage() {

    return(
        <div className="container-home">
            <div className="content-home">
                <div className="apresentation">
                    <div className="describe">
                        <h1 className='title'>
                            Grow Your Business <br/> with our Proven <br/> Marketing Service
                        </h1>

                        <p>
                            We help businesses of all sizes achieve their <br/>
                            marketing goals through ourcomprehensive <br/>
                            suite of services.
                        </p>

                        <button className="btn">
                            Sechedule a call
                        </button>
                    </div>
                </div>

                <Image 
                src={'/women_home.webp'}
                width={600}
                height={500}
                alt='Imagem de capa'
                />
            </div>

            <DividerSection />

            <PostSection />

            <BlogSection />

            <TestimonialsSection />
            
        </div>
    )
    
}