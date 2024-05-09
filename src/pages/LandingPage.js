import React from "react";
import Footer from "../components/Footer/Footer";
import SearchComponent from "../components/Search/Search";
import Carousels from "../components/carousel/carousel";
import Cardholder from "../components/cardholder/cardholder";
import Brands from "../components/Brands/Brands";
import style from './landingpage.module.css'
import CategoryGrid from "../components/CategoryGrid.js";

function LandingPage() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden ">
        <section className="relative">
        <div className={`h-screen flex items-center  ${style.header} `}>
  <div className="px-4 mx-auto lg:mt-16 lg:mb-16 max-w-7xl mt-4 mb-[180px]">
    <div className="text-center">
      <h1 className="lg:text-4xl font-extrabold tracking-tight text-gray-200 text-3xl md:text-6xl font-title">
        <span className="block"> Welcome to Carxperto</span>
        
      </h1>
      <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Innovative technology that brings you closer to your dream car 
      </p>
      <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
        
      </div>
    </div>
  </div>
</div>
          <SearchComponent />
          <div className="mt-36">
            <h1 className="text-4xl text-primary-normal font-bold mb-5">Featured Listings</h1>
          </div>
        </section>
        <Carousels />
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
