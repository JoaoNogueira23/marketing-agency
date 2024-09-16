import Image from "next/image";
import styles from './style.module.sass'


export default function BlogSection() {
    return(
        <div className={styles.containerBlogSection}>
            <div className={styles.titleBlogSection}>
                <h5 className={styles.titleV1} >Blog</h5>
                <h3 className={styles.titleV2}>Read our latest blog</h3>
                <p>that produces results, because that's what matters</p>
            </div>

            <div className={styles.cards}>
                <div className={styles.cardBlog}>
                    <Image 
                    src={'/blog1.webp'}
                    alt='Image Blog'
                    width={400}
                    height={250}
                    className={styles.imgPost}
                    />

                    <h6 className={styles.titleV3}>Title</h6>

                    <h5 className={styles.titleV2}>Description</h5>

                    <p>
                        Resume Blog
                    </p>
                </div>
                <div className={styles.cardBlog}>
                    <Image 
                    src={'/blog1.webp'}
                    alt='Image Blog'
                    width={400}
                    height={250}
                    className={styles.imgPost}
                    />

                    <h6 className={styles.titleV3}>Title</h6>

                    <h5 className={styles.titleV2}>Description</h5>

                    <p>
                        Resume Blog
                    </p>
                </div>
                <div className={styles.cardBlog}>
                    <Image 
                    src={'/blog1.webp'}
                    alt='Image Blog'
                    width={400}
                    height={250}
                    className={styles.imgPost}
                    />

                    <h6 className={styles.titleV3}>Title</h6>

                    <h5 className={styles.titleV2}>Description</h5>

                    <p>
                        Resume Blog
                    </p>
                </div>
            </div>

            
        </div>
    )
}