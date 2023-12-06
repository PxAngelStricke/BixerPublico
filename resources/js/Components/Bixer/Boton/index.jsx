import React from 'react'
import './Style/css.css'

function Boton({ text, url, type, children, onClick }) {
  return (
    <>
      <button onClick={onClick} className='mt-5' type={type}>
        <a href={url} className='btn-neon mx-auto relative inline-block uppercase rounded-full px-4 py-1 tracking-widest no-underline text-2xl overflow-hidden font-bold'>
            <span className='rounded-full'></span>
            <span className='rounded-full'></span>
            <span className='rounded-full'></span>
            <span className='rounded-full'></span>
            {text}
            {children}
        </a>
      </button>
    </>
  )
}

export default Boton