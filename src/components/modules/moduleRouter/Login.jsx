import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from './componenets/Header'
import Content from './componenets/Content'
import Footer from './componenets/Footer'
import './login.scss'
export default function Login() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const [activ, setactive] = useState(false)
    return (

        <div className='popup'>
            <div className="popup__container">
                <span className='popup__close'><Link to='/'>X</Link></span>
                <Header title="Register" />
                <Content />
                <Footer />
            </div>
        </ div>

    )
}
