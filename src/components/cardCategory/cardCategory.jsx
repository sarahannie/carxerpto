import React from 'react'
import style from './cardCategory.module.css'

const CardCategory = () => {
  return (

        <div className={style.cont}>
        <img src='/images/carA.jpg' className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header}>SUV</h2>
            <p className={style.par}>200 Vehicle</p>
        </div>
      </div>
  )
}

export default CardCategory