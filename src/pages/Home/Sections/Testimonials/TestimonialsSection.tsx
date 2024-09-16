import Image from 'next/image'
import styles from './styles.module.sass'

export default function TestimonialsSection() {
    return(
        <div className={styles.containerTestimonialsSection}>
            <h5 className={styles.titlePrimary}>
                Testimonials
            </h5>

            <h3 className={styles.titleSecondary}>
                What clients are say
            </h3>

            <div className={styles.cardsTestimonials}>

                <div className={styles.cardTestimonial}>
                    <h4 className={styles.titleCard}>
                        It has been a great help by Agency
                    </h4>

                    <p>
                        I was so impressed with the results of our digital
                        marketing compaign. We saw a significant incrase in website
                        traffic and leads
                    </p>

                    <div className={styles.profileUser}>
                        <Image 
                        src={'/profile1.webp'}
                        width={50}
                        height={50}
                        alt='Profile Image'
                        className={styles.imgUser}
                        />

                        <div className={styles.contentInfoUser}>
                            <h4 className={styles.useName}>
                                John Smith
                            </h4>

                            <p className={styles.userPosition} >
                                CEO of Company X
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.cardTestimonial}>
                    <h4>
                        It has been a great help by Agency
                    </h4>

                    <p>
                        I was so impressed with the results of our digital
                        marketing compaign. We saw a significant incrase in website
                        traffic and leads
                    </p>
                    <div className={styles.profileUser}>
                        <Image 
                        src={'/profile2.webp'}
                        width={50}
                        height={50}
                        alt='Profile Image'
                        className={styles.imgUser}
                        />

                        <div className={styles.contentInfoUser}>
                            <h4 className={styles.useName}>
                                Jane Doe
                            </h4>

                            <p className={styles.userPosition} >
                                CEO of Company Y
                            </p>
                        </div>

                        
                    </div>
                </div>     
            </div>
        </div>
    )
}