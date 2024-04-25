import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Suv from "../assets/hero.png";
import SearchComponent from "../components/Search/Search";
import Cardholder from "../components/cardholder/cardholder";
import { Button } from "@material-tailwind/react";


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
            <h2 className="text-primary-normal text-start font-bold text-[20px] ">Broker Listings</h2>
            <div className="div">
            <div className="w-[500px] border rounded-lg shadow-md bg-primary-light p-4 ">
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
                <div className="text-start mt-5 ">
              <label
                htmlFor=""
                className="text-gray-400"
              >
                About
              </label>
              <p className="py-2">
                Offers comprehensive assistance in buying and selling vehicles.
                With a focus on personalized guidance, we excel in sourcing the
                perfect vehicle for each client, leveraging our negotiation
                expertise to secure the best deals. Through in-depth market
                analysis, we provide insights to empower informed decisions,
                ensuring maximum value for every transaction. Our dedication to
                exceptional customer service means tailored support at every
                step, cementing our reputation for integrity and results.{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 mt-4">
              <div className="text-start">
                <label
                  htmlFor=""
                  className="text-gray-400 py-2"
                >
                  Specialties
                </label>
                <ul>
                  <li>Luxury Cars, </li>
                  <li>Commercial Vehicles</li>
                  <li>Vintage Classics</li>
                </ul>
              </div>
              <div className="text-start">
                <label
                  htmlFor=""
                  className="text-gray-400 py-2"
                >
                  Expertise
                </label>
                <ul>
                  <li>Negotiation Skills, </li>
                  <li>Market Analysis, </li>
                  <li>Client Relationship Managemen</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start my-4">
            <Button className="text-primary-normal bg-white">Contact</Button>
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
