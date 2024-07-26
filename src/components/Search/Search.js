import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory, setMake, setColor, setYear, setSellingPrice } from '../../app/slice/filterSlice';

const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log("hello")
  };

  return (
    <div className="absolute z-10 lg:top-[400px] top-[330px] grid lg:flex lg:flex-row lg:grid-cols-6 md:flex md:flex-row md:grid-cols-3 flex flex-row grid-cols-2 gap-4 w-full lg:w-[1200px] lg:justify-between lg:mx-10 border border-primary-light px-6 py-8 bg-primary-light shadow-2xl rounded-md overflow-x-hidden">
      {/* Category */}
      <div className="flex flex-col border border-l-4 border-r-gray-900">
        <label htmlFor="category" className="mb-1 -ml-8 font-light text-base">Category</label>
        <select
          className="px-8 py-1 bg-primary-lighthover lg:mr-8 text-base"
          id="category"
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
        <option value="">Select Category</option>
          <option value="Sedans">Sedans</option>
          <option value="SUVs">SUVs</option>
          <option value="Coupes">Coupes</option>
          <option value="Hatchbacks">Hatchbacks</option>
          <option value="Pickup Trucks">Pickup Trucks</option>
          <option value="Minivans">Minivans</option>
        </select>
      </div>

      {/* Make */}
      <div className="flex flex-col lg:-ml-4 border border-l-4 border-r-gray-900">
        <label htmlFor="make" className="mb-1 font-light text-base">Make</label>
        <select
          id="make"
          className="px-4 py-1 bg-primary-lighthover lg:mr-8 text-base"
          onChange={(e) => dispatch(setMake(e.target.value))}
        >
           <option value="">Select Make</option>
          <option value="Toyota ">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Mercedes">Mercedes</option>
          <option value="BMW">BMW</option>
          <option value="Ford">Ford</option>
          <option value="Chevrolet">Chevrolet</option>
        </select>
      </div>

      {/* Color */}
      <div className="flex flex-col lg:-ml-4 border border-l-4 border-r-gray-900">
        <label htmlFor="color" className="mb-1 -ml-8 font-light text-base">Color</label>
        <select
          id="color"
          className="px-8 py-1 bg-primary-lighthover lg:mr-8 text-base"
          onChange={(e) => dispatch(setColor(e.target.value))}
        >
          <option value="">Select Color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Silver">Silver</option>
          <option value="Green">Green</option>
        </select>
      </div>

      {/* Year */}
      <div className="flex flex-col lg:-ml-4 border border-l-4 border-r-gray-900">
        <label htmlFor="year" className="mb-1 -ml-8 font-light text-base">Year</label>
        <select
          id="year"
          className="px-8 bg-primary-lighthover lg:mr-8 text-base"
          onChange={(e) => dispatch(setYear(e.target.value))}
        >
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="flex flex-col">
        <label htmlFor="sellingPrice" className="mb-1 -ml-8 font-light text-base">Price Range</label>
        <select
          id="sellingPrice"
          className="px-8 py-1 bg-primary-lighthover text-base"
          onChange={(e) => dispatch(setSellingPrice(e.target.value))}
        >
          <option value="">Select Price Range</option>
          <option value="1000-20000">$1,000 - $20,000</option>
          <option value="20000-30000">$20,000 - $30,000</option>
          <option value="30000-40000">$30,000 - $40,000</option>
          <option value="40000-50000">$40,000 - $50,000</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button
          onClick={handleSearch}
          className="bg-primary-normal hover:bg-secondary-normal text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      {/* <div className="w-full">
        <h2 className="text-xl font-bold mb-4">Search Results</h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {!isLoading && !isError && filteredCars.length === 0 && <p>No results found.</p>}
        {filteredCars.map((car, index) => (
          <div key={index} className="car-item">
            <p>Make: {car.make}</p>
            <p>Category: {car.category}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
            <p>Price: {car.sellingPrice}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SearchComponent;
