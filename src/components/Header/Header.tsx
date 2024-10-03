import Link from 'next/link'
import './header.sass'

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
                        <a href='#'>Services & Pricing</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </nav>

            <button className='btn'>
                Sechedule a call
            </button>
        </header>
    )
}