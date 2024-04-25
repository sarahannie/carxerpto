import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Suv from "../assets/hero.png";
import SearchComponent from "../components/Search/Search";
import Cardholder from "../components/cardholder/cardholder";


function CarBroker() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">
        <Navbar />
        <section>
          <div className="relative">
            <img
              src={Suv}
              alt="car"
              className="inset-0 h-[550px] w-full object-cover"
            />
            <div className="top-40 absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              {/* <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl mb-2">Connect</h1> */}
              <p className="text-sm md:text-base lg:text-4xl font-bold mb-2  w-[600px]">Connect with a Broker for Personalized Assistance</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold w-[550px]">Explore our network of experienced brokers who can help you 
find the perfect vehicle.</p>
            </div>
          </div>
          <div className="mt-20 mb-24 mx-[20px]">
            <h2 className="text-primary-normal text-start font-bold text-[20px]">Broker Listings</h2>
            <div >
                <div className="flex">
                    <div className="w-[20%]">
                        <img src="" alt="" />
                        <p>Josh Freeman</p>
                    </div>
                    <div className="w-[80%] grid gap-3 grid-cols-2 md:grid-cols-4 text-primary-normal">
                    <div className="text-start ">
                        <h3 className="text-gray-400">Experience</h3>
                        <p className="text-primary-normal text-sm">4years+</p>
                        </div>
                        <div className="text-start ">
                        <h3 className="text-gray-400 text-bold">Reviews</h3>
                        <p className="text-primary-normal text-sm">4.0+</p>
                        </div>
                        <div className="text-start ">
                            <h3 className="text-gray-400 text-bold">Location</h3>
                            <p className="text-primary-normal text-sm">San Jose, CA, USA</p>
                        </div>
                        <div className="text-start ">
                            <h3 className="text-gray-400 text-bold">Language</h3>
                            <p className="text-primary-normal text-sm">English, Spanish,
&French</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default CarBroker;
