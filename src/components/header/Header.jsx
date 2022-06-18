import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export default function Header() {
    const [res, setres] = useState(true)

    useEffect(() => {
        window.addEventListener('resize', function () {
            if (window.innerWidth <= 600) {
                setres(false)
            }
        })
    }, [])

    return (
        <header className='header'>
            <div className="header__container">
                <nav className="menu">
                    <ul className="list">
                        <li className="list__item"><Link to={res ? '/login' : '/password'}>Router register</Link></li>
                        <li className="list__item">Materila UI register</li>
                        <li className="list__item">Modal register</li>
                        <li className="list__item">Portal register</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
