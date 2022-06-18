import React from 'react'
import { Link } from 'react-router-dom'

export default function Content({ password }) {
  return (
    <div className='popup__content'>
      <form>
        {
          password ? <input type="text" placeholder='email' required />
            :
            <>
              <input type="text" placeholder='email' required />
              <input type="password" placeholder='pasword' required />
            </>
        }
        <button type='button'><Link to='/password' className='link'>Continue</Link></button>
      </form>
    </div>
  )
}
