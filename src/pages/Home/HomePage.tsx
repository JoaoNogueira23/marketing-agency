import Divider from '@/components/Divider/Divider'
import './home.sass'
import PostPage from '@/components/Posts'


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

                <div>
                    Imagem
                </div>
            </div>

            <Divider />


            <PostPage />
            
        </div>
    )
    
}