import React from 'react'
import './Style/css.css'

function Card({ img, text, description, url, children, btnText }) {
  return (
    <>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={img} className='w-39 h-36' alt=""/>
                    <h3 className='font-bold'>{text}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{description}</p>
                    <a href={url} type="button" className="rounded-md">
                        {btnText}
                        {children}
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card