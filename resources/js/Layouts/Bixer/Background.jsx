import React, { useEffect } from 'react'
import './css/styles.css'

function Background({ children }) {
  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.appendChild(colorBox);
    }
  }, []);

  return (
    <>
      <div className='bgAnimation' id='bgAnimation'>
        <div className='backgroundAnim'></div>
      </div>

      <main>{children}</main>
    </>
  )
}

export default Background