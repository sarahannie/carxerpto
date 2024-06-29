import React from "react";

import Footer from "../components/Footer/Footer";
import Suv from "../assets/hero.png";
import SearchComponent from "../components/Search/Search";
import { useLocation } from 'react-router-dom';
import style from '../components/cards/cards.module.css'
import styles from '../components/cardholder/cardholder.module.css'
import { SiCmake } from "react-icons/si";
import { IoCarSportSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import {useNavigate } from 'react-router-dom';


function CarCategory() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { categorys } = location.state;

  let cars = categorys
  
  if (!cars || cars.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">No cars found in this category</h1>
      </div>
    );
  }
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">
        <section>
          <div className="w-full h-[500px]">
            <img
              src={Suv}
              alt="car"
              className="w-full h-full absolute lg:object-cover object-bottom mix-blend-overlay"
            />
            <div className="top-40 absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pb-24">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl mb-2">Categories</h1>
              <p className="text-sm md:text-base lg:text-4xl font-bold mb-2">Find the Perfect {cars.category} for your Lifestyle</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold">Explore {cars.category} for your next Adventure</p>
            </div>
          </div>
          <SearchComponent />
          <div className="mt-36 mb-24">
            <h1 className="text-4xl text-primary-normal pb-12 font-bold mb-5">Latest Arrivals {cars.category} Cars</h1>
           
            
           
                    
                        <div className={styles.container}>
                          <div className={styles.gridcontainer}>
                            <div className={style.container}>
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

                      </div>
                      </div>
                    
                    
              
          </div>
          
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default CarCategory;
