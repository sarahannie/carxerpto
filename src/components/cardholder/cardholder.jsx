import React from 'react'
import Cards from './card'
import style from './cardholder.module.css'

const Cardholder = () => {
  return (
    <div className={style.container}>
        <div className={style.gridcontainer}>
        <Cards/>
    </div>
    </div>
    
  )
}

export default Cardholder