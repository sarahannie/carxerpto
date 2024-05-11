import React from 'react'
import style from './carouse.module.css'
import Banner from '../../assets/banner1.jpg'
import Banner2 from '../../assets/banner2.jpg'
import Banner3 from '../../assets/banner3.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarPost } from "../DummyData";

const Carousels = ({ deviceType }) => {
    
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
>
{CarPost.map((item) => (
          <div
            key={item.id}
            className="border border-slate-300 bg-white shadow-md"
          >
            <div className="w-full h-[177px]">
              <img
                className="w-full h-full object-cover"
                src={item.imgPic}
                alt="imageIcon"
              />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between ">
                <h1 className=" text-[16.8px] text-[#002C52] font-bold">
                  {item.title}
                </h1>
                <p className="text-[#002C52] text-[15px] font-bold">
                  {item.amount}
                </p>
              </div>
              <div className="flex items-center text-[10px] md:text-[12px] font-medium justify-between">
                <span className="">{item.sublinkA}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>{item.sublinkB}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>{item.sublinkC}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>{item.sublinkD}</span>
              </div>
              <div className="text-[14px] font-medium leading-[22.4px] ">
                <h3 className="text-start  text-[16px]">{item.Feature}</h3>
                {item.subItems.map((subItems, Index) => {
                  return (
                    <ul className="flex items-center  " key={Index.id}>
                      <li className="" >{subItems}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
</Carousel>
    
    
  )
}

export default Carousels