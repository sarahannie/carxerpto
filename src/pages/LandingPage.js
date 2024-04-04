import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Toyota from "../assets/hero (1).png";
import SearchComponent from "../components/Search/Search";
import Carousels from "../components/carousel/carousel";
import Cardholder from "../components/cardholder/cardholder";
import CardCategoryHolder from "../components/cardCategoryHolder/cardCategoryHolder";
import Brands from "../components/Brands/Brands";

function LandingPage() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">
        <Navbar />
        <section>
          <div className="relative">
            <img
              src={Toyota}
              alt="car"
              className="inset-0 h-[550px] w-full object-cover object-bottom"
            />
            <div className="absolute top-40 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl mb-2">
                Welcome to Autobuys
              </h1>
              <p className="text-sm md:text-base lg:text-4xl font-bold mb-2">
                Buy, Sell, and Connect with Confidence
              </p>
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
        <div className="mt-24 mb-12">
            <h1 className="text-4xl text-primary-normal font-bold mb-5">Categories</h1>
        </div>
        <CardCategoryHolder/>
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
