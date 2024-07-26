import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/api/buyerProductApi';
import { useSelector } from 'react-redux';


const Carousels = ({ deviceType }) => {
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
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};





  return (
<div className='lg:mt-[200px] mt-[350px]'>
<div className="flex justify-between ">
    <h1 className="text-4xl text-primary-normal font-bold mb-5">Featured Listings</h1>
    <p className="text-[#002C52] text-[15px] font-bold">   </p>
</div>
<Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true}
    infinite={true}
    autoPlay={deviceType !== 'mobile'}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    containerClass="carousel-container"
    removeArrowOnDeviceType={['tablet', 'mobile']}
    deviceType={deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    className="grid  gap-3 mt-2" 
    arrows={false}
    carouselRef={(el) => (this.Carousel = el)}
>
{displayedProducts && filteredProducts.map((cars) => (
          <div
            key={cars.id}
            className="border border-slate-300 bg-white shadow-md w-[350px] "
            onClick={() => navigate(`/car-details/${cars.productTag}`, { state: { cars } })}
          >
            <div className="w-full h-[177px]">
              <img
                className="w-full h-full object-contain"
                src={cars.images[0]}
                alt="imageIcon"
              />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="flex carss-center justify-between ">
                <h1 className=" text-[16.8px] text-[#002C52] font-bold">
                  {cars.name}
                </h1>
                <p className="text-[#002C52] text-[15px] font-bold">
                  ${cars.sellingPrice}
                </p>
              </div>
              <div className="flex carss-center text-[10px] md:text-[12px] font-medium justify-between">
                <span className="">make: {cars.make}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>model: {cars.model}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>Year: {cars.year}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>mileage: {cars.milleage}</span>
              </div>
              <div className="text-[14px] font-medium leading-[22.4px] ">
                <h3 className="text-start  text-[16px]">Features</h3>
                    <ul className="flex flex-col carss-center  text-start " >
                      <li className="" >condition: {cars.condition}</li>
                      <li className="" >color: {cars.color}</li>
                      <li className="" >Details: {cars.shortDescription}</li>
                    </ul>
                
              </div>
            </div>
          </div>
        ))}
</Carousel>
</div>
   
    
    
  )
}

export default Carousels