import Link from 'next/link'

export default function Header() {
    return(
        <header className="header">
            <h2>
                <Link href={'/'} className='logo'>
                    Agency
                </Link>
            </h2>

            <nav className='nav'>
                <ul>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li>
                        <Link href={'/blog'}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}