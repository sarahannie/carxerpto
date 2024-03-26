import React from "react";
import { Link } from "react-router-dom";
import Features from "./Features";
import usercircle from "../../assets/UserCircle.png"

function Navbar() {
  return (
    <div>
      <section className="bg-#FFFEF9 shadow-md w-full h-16 flex flex-row items-center justify-between px-12">
        <h1 className="font-bold text-lg text-primary-dark">Auto Buy</h1>
        <section className="flex flex-row items-center gap-14">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/car-listing" className="">
            Car Listing
          </Link>
          <Link to="/about-us" className="">
            About Us
          </Link>
          <Features />
        </section>

        <section className="flex flex-row items-center gap-4">
        <Link
          to="/signin"
          className="py-2 px-6 rounded-md text-base text-accent-white bg-primary-normal hover:bg-primary-normalhover"
        >
          Sign In
        </Link>
        <img
          src={usercircle}
          alt="UserCircle"
          className="lg:w-10 lg:h-10 w-8 h-8"
        />
        </section>
        
      </section>
    </div>
  );
}

export default Navbar;
