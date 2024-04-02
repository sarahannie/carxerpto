import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Toyota from "../assets/hero (1).png";

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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl mb-2">
                Welcome to Autobuy
              </h1>
              <p className="text-sm md:text-base lg:text-4xl font-bold mb-2">
                Buy, Sell, and Connect with Confidence
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
