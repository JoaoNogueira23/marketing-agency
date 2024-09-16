import styles from './styles.module.sass'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.reservedDirectives}>
                © | João Martins, Inc. All rights reserved.
            </div>

            <div className={styles.infosUseWebsite}>
                <li>
                    <ul>
                        <a>
                            Terms
                        </a>
                    </ul>
                    <ul>
                        <a>
                            Privacy
                        </a>
                        
                    </ul>
                    <ul>
                        <a>
                            Support
                        </a>
                        
                    </ul>
                </li>
            </div>
            
        </footer>
    )
}