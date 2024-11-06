import Image from 'next/image'

export default function TestimonialsSection() {
    return(
        <div className={"containerTestimonialsSection"}>
            <h5 className={"titlePrimary"}>
                Testimonials
            </h5>

            <h3 className={"titleSecondary"}>
                What clients are say
            </h3>

            <div className={"cardsTestimonials"}>

                <div className={"cardTestimonial"}>
                    <h4 className={"titleCard"}>
                        It has been a great help by Agency
                    </h4>

                    <p>
                        I was so impressed with the results of our digital
                        marketing compaign. We saw a significant incrase in website
                        traffic and leads
                    </p>

                    <div className={"profileUser"}>
                        <Image 
                        src={'/profile1.webp'}
                        width={50}
                        height={50}
                        alt='Profile Image'
                        className={"imgUser"}
                        />

                        <div className={"contentInfoUser"}>
                            <h4 className={"useName"}>
                                John Smith
                            </h4>

                            <p className={"userPosition"} >
                                CEO of Company X
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className={"cardTestimonial"}>
                    <h4>
                        It has been a great help by Agency
                    </h4>

                    <p>
                        I was so impressed with the results of our digital
                        marketing compaign. We saw a significant incrase in website
                        traffic and leads
                    </p>
                    <div className={"profileUser"}>
                        <Image 
                        src={'/profile2.webp'}
                        width={50}
                        height={50}
                        alt='Profile Image'
                        className={"imgUser"}
                        />

                        <div className={"contentInfoUser"}>
                            <h4 className={"useName"}>
                                Jane Doe
                            </h4>

                            <p className={"userPosition"} >
                                CEO of Company Y
                            </p>
                        </div>

                        
                    </div>
                </div>     
            </div>
        </div>
    )
}