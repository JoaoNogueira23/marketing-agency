import Link from "next/link"
import React from "react"
import './header.sass'

export default function HeaderAdmin(){
    return(
        <header className="headerAdmin">
            <h2>
                <Link href={'/'} className='logo'>
                    Agency
                </Link>
            </h2>

            <nav className='nav'>
                <ul>
                    <li>
                        <Link href={'/admin/dashboard'}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={'/admin/create-post'}>
                            Register Post
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}