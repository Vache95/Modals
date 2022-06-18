import React from 'react'

export default function Footer({ password }) {
  return (
    <footer>
      {
        [] && password && <span className='pop'>Popup</span>
      }
    </footer>
  )
}

