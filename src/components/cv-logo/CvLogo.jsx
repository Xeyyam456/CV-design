import '/cvLogo.css';
import C from '../pictures/c.png'
import V from '../pictures/v.png'

import React from 'react'

const CvLogo = () => {
  return (
    <div className='sekiller'>
      <img src={C} alt="sekil1" />
      <img src={V} alt="sekil2" />
    </div>
  )
}

export default CvLogo