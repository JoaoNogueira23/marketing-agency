import './header.sass'

export default function Header() {
    return(
        <header className="header">
            <h2 className='logo'>
                Alchemy
            </h2>

            <nav className='nav'>
                <ul>
                    <li>About Us</li>
                    <li>Services & Pricing</li>
                    <li>
                        Blog
                    </li>
                    <li>Contact Us</li>
                </ul>
            </nav>

            <button className='btn'>
                Sechedule a call
            </button>
        </header>
    )
}