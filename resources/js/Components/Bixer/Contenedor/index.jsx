import React from 'react'
import './Style/css.css'

function Contenedor({ children, className }) {
  return (
    <>
    <div className='text-center max-w-sm xl:w-2/4 lg:w-full lg:max-w-screen-xl'>
      <div className='custom-container grid gap-5 rounded-xl py-10 px-3 lg:p-10 sm:mx-2'>
        {children}
      </div>
    </div>
    </>
  )
}

export default Contenedor