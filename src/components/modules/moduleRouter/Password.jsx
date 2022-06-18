import React from 'react'
import './login.scss'
import Header from './componenets/Header'
import Content from './componenets/Content'
import Footer from './componenets/Footer'
import { Link, useNavigate, useLocation } from 'react-router-dom'
export default function Password() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const goBack = () => navigate(-1)
  return (
    <div className='popup'>
      <div className="popup__container">
        <span className='popup__back' onClick={goBack}>Back</span>
        <span className='popup__close'><Link to='/'>X</Link></span>
        <Header title="Password" />
        <Content password={true} />
        <Footer password={true} />
      </div>
    </div>
  )
}
