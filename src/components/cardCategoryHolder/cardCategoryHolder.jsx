import React from 'react'
import CardCategory from '../cardCategory/cardCategory'
import style from './cardCategoryHolder.module.css'

const CardCategoryHolder = () => {
  return (
    <div className={style.container}>
        <div className={style.gridcontainer}>
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
    </div>
    </div>
  )
}

export default CardCategoryHolder