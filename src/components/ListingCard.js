import React from 'react';
import { useGetProductsQuery } from '../app/api/buyerProductApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function List() {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
      {filteredProducts.length === 0 ? (
        <div className="text-center col-span-full">
          <p className="text-2xl">No products like yet 😞</p>
        </div>
      ) : (
        filteredProducts.map((car) => (
          <div
            key={car.id}
            className="border border-slate-300 bg-white shadow-md"
            onClick={() => navigate(`/car-details/${car.productTag}`, { state: { car } })}
          >
            <div className="w-full h-[177px]">
              <img
                className="w-full h-full object-contain"
                src={car.images[0]}
                alt="imageIcon"
              />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between ">
                <h1 className=" text-[16.8px] text-[#002C52] font-bold">
                  {car.name}
                </h1>
                <p className="text-[#002C52] text-[15px] font-bold">
                  ${car.sellingPrice}
                </p>
              </div>
              <div className="flex items-center text-[10px] md:text-[12px] font-medium justify-between">
                <span className="">Make: {car.make}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>Model: {car.model}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>Year: {car.year}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>Mileage: {car.mileage}</span>
              </div>
              <div className="text-[14px] font-medium leading-[22.4px] ">
                <h3 className="text-start text-[16px]">Features</h3>
                <ul className="flex flex-col items-center text-start">
                  <li>Condition: {car.condition}</li>
                  <li>Color: {car.color}</li>
                  <li>Details: {car.shortDescription}</li>
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default List;
