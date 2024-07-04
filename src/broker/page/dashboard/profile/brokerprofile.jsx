import React from "react";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../../../app/api/brokerAuthApi";
import { CustomSpinner } from "../../../../loading";

export function Brokerprofile() {
  const { data, isSuccess, isLoading, isError } = useGetProfileQuery();
  const profile = isSuccess ? data.responseMessage : null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full mt-[10%]">
        <CustomSpinner />
      </div>
    );
  }

  if (isError || !profile) {
    return <div className="text-md text-center">Error loading profile. Logout and try again.</div>;
  }

  return (
    <div className="">
      
      <div className="flex flex-row overflow-hidden">
        
        <div className="mt-7 w-full sm:w-[85%] lg:ml-[20%] ml-[15px] border shadow-lg p-3 mb-3 rounded-lg">
          <div className="flex justify-between border-b border-gray-300">
            <div className="text-primary-normal">Profile Overview</div>
            <div className="flex gap-2 sm:gap-5 mr-3">
              <div className="flex gap-2 text-secondary-normal">Edit your profile now</div>
              <Link to="/dashboard/brokerprofileedit">
                <div className="flex gap-2 text-primary-normal">
                  Edit profile <TiEdit className="mt-1" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-4">
            <div className="w-full sm:w-[20%]">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://via.placeholder.com/150" alt="blog" />
            </div>
            <div className="w-full sm:w-[80%] ml-3">
              <div className="grid grid-cols-2 mt-2">
                <div className="text-start">
                  <label htmlFor="fullname" className="text-gray-400">First Name</label>
                  <p className="py-2">{profile.firstName}</p>
                </div>
                <div className="text-start">
                  <label htmlFor="Username" className="text-gray-400">Username</label>
                  <p className="py-2">{profile.username}</p>
                </div>
              </div>
              <div className="text-start my-4">
                <div className="text-gray-400 my-2">Contact Information</div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="">
                    <label htmlFor="email" className="text-gray-400">Email</label>
                    <p className="py-2">{profile.email}</p>
                  </div>
                  <div className="">
                    <label htmlFor="phone" className="text-gray-400">Phone</label>
                    <p className="py-2">{profile.phone}</p>
                  </div>
                  <div className="">
                    <label htmlFor="location" className="text-gray-400">Location</label>
                    <p className="py-2">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-300">
            <div className="text-primary-normal">Experience and Expertise</div>
          </div>
          <div className="text-start mt-5 ">
            <label htmlFor="" className="text-gray-400">Description</label>
            <p className="py-2">{profile.about}</p>
          </div>
          <div className="mt-4 text-start">
            <label htmlFor="" className="text-gray-400">Years in the Industry</label>
            <p>{profile.experience} years +</p>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className="text-start">
              <label htmlFor="" className="text-gray-400 py-2">Specialties</label>
              <ul>
                <li>{profile.specialities}</li>
              </ul>
            </div>
            <div className="text-start">
              <label htmlFor="" className="text-gray-400 py-2">Expertise</label>
              <ul>
                <li>{profile.expertise}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-300 mt-5">
            <div className="text-primary-normal">Successful Transactions</div>
          </div>
          <div className="text-start my-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="">
                <label htmlFor="email" className="text-gray-400">Total Transactions</label>
                <p className="py-2">${profile.totalTransaction}</p>
              </div>
              <div className="">
                <label htmlFor="phone" className="text-gray-400">Average Sales Price</label>
                <p className="py-2">${profile.avgSalePrice}</p>
              </div>
              <div className="">
                <label htmlFor="location" className="text-gray-400">Client Satisfaction Rate</label>
                <p className="py-2">{profile.clientSatisfaction}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-300 mt-5">
            <div className="text-primary-normal">Subscription Status</div>
          </div>
          <div className="text-start my-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="">
                <label htmlFor="email" className="text-gray-400">Status</label>
                <p className="py-2 text-secondary-normal font-bold">Active</p>
              </div>
              <div className="">
                <label htmlFor="phone" className="text-gray-400">Current Plan</label>
                <p className="py-2">$99.99/month</p>
              </div>
              <div className="">
                <label htmlFor="location" className="text-gray-400">Renewal Date</label>
                <p className="py-2">12 May 2024 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerprofile;
