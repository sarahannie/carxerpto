import React from 'react';
import style from './cards.module.css';
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
  const filteredProducts = products.filter((car) => {
    return (
      (!category || car.category === category) &&
      (!make || car.make === make) &&
      (!color || car.color === color) &&
      (!year || car.year === year) &&
      (!sellingPrice || car.sellingPrice === sellingPrice)
    );
  });

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
        filteredProducts.map((car) => (
          <div key={car._id} className={style.container}>
            <div onClick={() => navigate(`/car-details/${car.productTag}`, { state: { car } })}>
              <img src={car.images[0]} className={style.img} alt={car.name} />
              <div className={style.containerBody}>
                <div className={style.header}>
                  <h2 className={style.brand}>{car.name}</h2>
                  <h2 className={style.price}>${car.sellingPrice}</h2>
                </div>
                <div className={style.iconCon}>
                  <div className={style.iconMain}>
                    <SiCmake className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Make</h3>
                      <h3 className={style.iconProduct}>{car.make}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <IoCarSportSharp className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Model</h3>
                      <h3 className={style.iconProduct}>{car.model}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <IoLocationSharp className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Mileage</h3>
                      <h3 className={style.iconProduct}>{car.mileage}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <SlCalender className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Year</h3>
                      <h3 className={style.iconProduct}>{car.year}</h3>
                    </div>
                  </div>
                </div>
                <div className={style.iconCon2}>
                  <div className={style.iconMain}>
                    <BsFuelPumpDiesel className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Condition</h3>
                      <h3 className={style.iconProduct}>{car.condition}</h3>
                    </div>
                  </div>
                  <div className={style.iconMain}>
                    <MdAirlineSeatLegroomExtra className={style.icon} />
                    <div>
                      <h3 className={style.icondescription}>Color</h3>
                      <h3 className={style.iconProduct}>{car.color}</h3>
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
