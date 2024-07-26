import React from 'react';
import style from '../cards/cards.module.css';
import { SiCmake } from "react-icons/si";
import { IoCarSportSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/api/buyerProductApi';
import { useSelector } from 'react-redux';

const Cards = () => {
  const navigate = useNavigate();
  const { category, make, color, year, sellingPrice } = useSelector(state => state.filters);
  const { data, error, isLoading } = useGetProductsQuery({
    category,
    make,
    color,
    year,
    sellingPrice,
  });
  const products = Array.isArray(data?.product) ? data.product : [];
  
  const getRandomProducts = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const displayedProducts = getRandomProducts(products, 6);
  

  
 
  const filteredProducts = products.filter((car) => {
    const matchesCategory = !category || car.category.toLowerCase() === category.toLowerCase();
    const matchesMake = !make || car.make.toLowerCase() === make.toLowerCase();
    const matchesColor = !color || car.color.toLowerCase() === color.toLowerCase();
    const matchesYear = !year || car.year.toString() === year; 
    const matchesPrice = !sellingPrice || checkPriceRange(car.sellingPrice, sellingPrice);

    return matchesCategory && matchesMake && matchesColor && matchesYear && matchesPrice;
  });

  function checkPriceRange(price, range) {
    const [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  }

 

  return (
    <>
      {isLoading ? (
        <div className={style.loadingCard}>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className={style.errorCard}>
          <p>Error loading products</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className={style.noProductCard}>
          <p className="text-2xl">No products like yet 😞</p>
        </div>
      ) : (
        displayedProducts && filteredProducts.map((cars) => (
          <div key={cars._id} className={style.container}>
            <div onClick={() => navigate(`/car-details/${cars.productTag}`, { state: { cars } })}>
              <img src={cars.images[0]} className={style.img} alt={cars.name} />
              <div className={style.containerBody}>
                <div className={style.header}>
                  <h2 className={style.brand}>{cars.name}</h2>
                  <h2 className={style.price}>${cars.sellingPrice}</h2>
                </div>
                <div className={style.iconCon}>
                  <div className={style.iconMain}>
                    <SiCmake className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Make</h3>
                      <h3 className={style.iconProduct}>{cars.make}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <IoCarSportSharp className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Model</h3>
                      <h3 className={style.iconProduct}>{cars.model}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <IoLocationSharp className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Mileage</h3>
                      <h3 className={style.iconProduct}>{cars.milleage}</h3>
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
                      <h3 className={style.icondescription}>condition</h3>
                      <h3 className={style.iconProduct}>{cars.condition}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <MdAirlineSeatLegroomExtra className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>color</h3>
                      <h3 className={style.iconProduct}>{cars.color}</h3>
                    </div>
                  </div>
                </div>
                <div className={style.detail}>
                  <h2 className={style.detailView}>View Details</h2>
                  <FaRegBookmark className={style.icon} />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Cards;
