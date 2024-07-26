import React from "react";
import Footer from "../components/Footer/Footer";
import { Button } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";



function BrokerContact() {
  const location = useLocation();
  const { broker } = location.state || {};
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">

        <section>
        <div className="mt-7 w-full sm:w-[85%] mx-auto   border shadow-lg p-3 mb-3 rounded-lg">
  <div className="flex justify-between border-b border-gray-300">
    <div className="text-primary-normal">
      Profile Overview
    </div>
  </div>
  <div className="flex flex-col sm:flex-row mt-4">
    <div className="w-full sm:w-[20%]">
      <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={broker.profilePhoto?broker.profilePhoto:"https://via.placeholder.com/150"} alt="blog"/>
    </div>
    <div className="w-full sm:w-[80%] ml-3">
      <div className="grid grid-cols-2 mt-2">
        <div className="text-start">
          <label htmlFor="fullname" className="text-gray-400">Fullname</label>
          <p className="py-2">{broker.firstName} {broker.lastName}</p>
        </div>
        <div className="text-start">
          <label htmlFor="Username" className="text-gray-400">Username</label>
          <p className="py-2">{broker.username}</p>
        </div>
      </div>
      <div className="text-start my-4">
        <div className="text-gray-400 my-2">Contact Information</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="">
            <label htmlFor="email" className="text-gray-400">Email</label>
            <p className="py-2">{broker.email}</p>
          </div>
          <div className="">
            <label htmlFor="phone" className="text-gray-400">Phone</label>
            <p className="py-2">{broker.phone}</p>
          </div>
          <div className="">
            <label htmlFor="location" className="text-gray-400">Location</label>
            <p className="py-2">{broker.location}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-between border-b border-gray-300">
    <div className="text-primary-normal">
      Experience and Expertise
    </div>
  </div>
  <div className="text-start mt-5 ">
    <label htmlFor="" className="text-gray-400">Description</label>
    <p className="py-2">{broker.about} </p>
  </div>
  <div className="mt-4 text-start">
    <label htmlFor="" className="text-gray-400">Years in the Industry</label>
    <p>{broker.experience}years +</p>
  </div>
  <div className="grid grid-cols-2 mt-4">
    <div className="text-start">
      <label htmlFor=""  className="text-gray-400 py-2">Specialties</label>
      <ul>
      <li>{broker.specialities}</li>
        
      </ul>
    </div>
    <div className="text-start">
      <label htmlFor="" className="text-gray-400 py-2">Expertise</label>
      <ul>
      <li>{broker.expertise}</li>
      </ul>
    </div>
  </div>

  <div className="flex justify-between border-b border-gray-300 mt-5">
    <div className="text-primary-normal">
      Successful Transactions
    </div>
  </div>
  <div className="text-start my-4">
    <div className="grid grid-cols-3 gap-3">
      <div className="">
        <label htmlFor="email" className="text-gray-400">Total Transactions</label>
        <p className="py-2">{broker.totalTransaction}</p>
      </div>
      <div className="">
        <label htmlFor="phone" className="text-gray-400">Average Sales Price</label>
        <p className="py-2">${broker.avgSalePrice}</p>
      </div>
      <div className="">
        <label htmlFor="location" className="text-gray-400">Client Satisfaction Rate</label>
        <p className="py-2">{broker.clientSatisfaction}% </p>
      </div>
    </div>
  </div>
    <div className="flex justify-between">
        <div>
            <Button className="bg-primary-normal">Chat Now</Button>
        </div>
        <div>
        <Button className="bg-primary-light text-primary-dark">Leave a review</Button>
        </div>
    </div>
</div>
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default BrokerContact;
