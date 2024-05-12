import React from "react";
import Footer from "../components/Footer/Footer";
import SearchComponent from "../components/Search/Search";
import Carousels from "../components/carousel/carousel";
import Cardholder from "../components/cardholder/cardholder";
import Brands from "../components/Brands/Brands";
import style from './landingpage.module.css'
import CategoryGrid from "../components/CategoryGrid.js";
import { Button } from '@material-tailwind/react';
import image1 from '../assets/image/bmw1.webp'

function LandingPage() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden ">
        <section className="relative">
        <div className="flex px-4 lg:mt-16 ">
        <div className="flex flex-col justify-start items-start w-[40%] pr-8">
          <h1 className="text-[42px] text-primary-normal font-bold mb-5 pl-1">
            Welcome to CarXerpto
            <br />
            Your Car Marketplace
          </h1>
          <p className="text-gray-600 text-start w-[100%] text-[15px] pl-3">
            At CarXerpto, we believe that finding your dream car should be an exhilarating journey, not a tedious task. Whether you're a buyer, seller, or simply an enthusiast, our platform is designed to make car transactions seamless and exciting.
          </p>
          <div className="mt-6 space-x-4 flex gap-1 ml-3">
            <Button className="bg-primary-normal text-white px-[50px]">Buy Your Car</Button>
            <Button className="bg-transparent text-secondary-dark border-2 border-secondary-dark px-[40px]">Meet an Xerpto</Button>
          </div>
        </div>
        <div className="w-[60%]">
          <img src={image1} alt="Hero Section" className="w-[50rem] px-[70px]" />
        </div>
      </div>
          <SearchComponent />
         
        </section>
        <div className="mx-auto ml-12">
        <Carousels />
        </div>
        
        <div className="mt-24 mb-12">
            <h1 className="text-4xl text-primary-normal font-bold mb-5">Latest Arrivals</h1>
        </div>
        <Cardholder />
        <div className="lg:max-w-[1122px]   mx-auto mt-9 mb-11 p-2 lg:p-0">
            <h1 className="text-4xl text-primary-normal font-bold mb-5">Categories</h1>
            <CategoryGrid/>
        </div>

        <div className="mt-24 mb-12">
            <h1 className="text-4xl text-primary-normal font-bold mb-5">Trusted Brands</h1>
        </div>
        <Brands/>
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
