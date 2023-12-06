import React from 'react'
import './Style/css.css'

function Contenedor2({ children, img }) {
  return (
    <>
      <div className='custom-container grid gap-5 rounded-xl py-10 px-3 lg:p-10 sm:mx-2'>
        {children}
      </div>
    </>
  )
}

export default Contenedor2