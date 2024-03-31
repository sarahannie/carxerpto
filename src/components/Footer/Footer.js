import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="w-full bg-primary-normal h-auto pb-6">
        <section className="mx-10 text-accent-white">
          <section className="flex flex-row items-center justify-between mb-14">
            <div className="flex flex-row items-center gap-16">
              <div className="flex flex-col items-start mt-10">
                <h1 className="font-bold text-lg">Navigation</h1>
                <Link to="">Home</Link>
                <Link to="">Car Listing</Link>
                <Link to="">Search</Link>
                <Link to="">Testimonial</Link>
                <Link to="">Footer</Link>
              </div>

              <div className="flex flex-col items-start mt-10">
                <h1 className="font-bold text-lg">About us</h1>
                <Link to="">About Us</Link>
                <Link to="">Our Services</Link>
                <Link to="">Car Appraisal</Link>
                <Link to="">Car Evaluation</Link>
                <Link to="">Car Insurance</Link>
              </div>

              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">Features</h1>
                <Link to="">Sell Car</Link>
                <Link to="">Buy Car</Link>
                <Link to="">Platform Admin</Link>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-end text-lg font-bold mb-2">
                Subscribe to our Newsletter
              </h1>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-80"
              />
              <button
                type="submit"
                className="border border-accent-white bg-primary-normal py-2 pb-3 px-4 rounded-md"
              >
                Subscribe
              </button>
              <p className="text-end">
                Lorem ipsum dolor sit amet consectetur. Amet<br /> adipiscing
                enim enim ac<br />aenean facilisis eget sit nibh.
              </p>
            </div>
          </section>
          <section className="flex flex-row items-center justify-between">
            <h1 className="-ml-8 lg:-ml-0 font-bold text-2xl text-accent-white">
              Auto<span className="text-secondary-normalhover">Buy</span>
            </h1>
            <div className="flex flex-row gap-4">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Footer;
