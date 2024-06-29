import React from 'react'
import style from './cards.module.css'
import { SiCmake } from "react-icons/si";
import { IoCarSportSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import {useNavigate } from 'react-router-dom';

import { useGetProductsQuery } from '../../app/api/buyerProductApi';
const Cards = () => {
    const navigate = useNavigate();
    const {data, error, isLoading} = useGetProductsQuery();
    const products = data?.product || [];

    console.log("Buyer products", products)

    
  return (
    <>
        {
            products.map((cars, index) => {
                return (
                    <div key={cars} className={style.container}>
                    <div 
                         
                          onClick={() => navigate(`/car-details/${cars.productTag}`, { state: { cars } })}
                     >
                    
                    <img src={cars.images[0]} className={style.img} alt={cars.name} />
                <div className={style.containerBody}>
                <div className={style.header}>
                    <h2 className={style.brand}>{cars.brand}</h2>
                    <h2 className={style.price}>{cars.price}</h2>
                </div>
                <div className={style.iconCon}>
                    <div className={style.iconMain}>
                        <SiCmake className={style.icon}/>
                        <div>
                            <h3 className={style.icondescription}>Make</h3>
                            <h3 className={style.iconProduct}>{cars.make}</h3>
                        </div>
                    </div>
                    <div className={style.iconMain}>
                        <IoCarSportSharp className={style.icon}/>
                        <div>
                            <h3 className={style.icondescription}>Model</h3>
                            <h3 className={style.iconProduct}>{cars.model}</h3>
                        </div>
                    </div>
                    <div className={style.iconMain}>
                        <IoLocationSharp className={style.icon}/>
                        <div>
                            <h3 className={style.icondescription}>Mileage</h3>
                            <h3 className={style.iconProduct}>  {cars.milleage}</h3>
                        </div>
                    </div>
                    <div className={style.iconMain}>
                        <SlCalender className={style.icon} />
                        <div>
                            <h3 className={style.icondescription}>Year</h3>
                            <h3 className={style.iconProduct}>{cars.year}</h3>
                        </div>
                    </div>
                </div>
                <div className={style.iconCon2}>
                    <div className={style.iconMain}>
                    <BsFuelPumpDiesel className={style.icon} />
                    <div>
                        <h3 className={style.icondescription}>Name</h3>
                        <h3 className={style.iconProduct}>{cars.name}</h3>
                    </div>
                    </div>
                    <div className={style.iconMain}>
                    <MdAirlineSeatLegroomExtra className={style.icon} />
                    <div>
                        <h3 className={style.icondescription}>Price</h3>
                        <h3 className={style.iconProduct}>{cars.costPrice}</h3>
                    </div>
                    </div>
                </div>
                <div className={style.detail}>
                    <h2  className={style.detailView}>View Details</h2>
                    <FaRegBookmark className={style.icon}/>
                </div>
                </div> 
                
                    </div >
                    </div>
                )
            })
        }
    </>   
   
  )
}

export default Cards