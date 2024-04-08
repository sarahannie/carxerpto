import React from 'react'
import style from './cardCategory.module.css'
import { Link } from 'react-router-dom'

const CardCategory = () => {
  return (

        <div className={style.cont}>
        <Link to='/car-category'>
        <img src={'/images/carA.jpg'} className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header}>SUV</h2>
            <p className={style.par}>200 Vehicle</p>
        </div>
        </Link>
      </div>
  )
}

export default CardCategory