import React from "react";
import { HomeCard } from "../../../widgets/cards/sales/sale-card";
import { HomeCard1 } from "../../../widgets/cards/sales/sale-card1";
import ReactStars from "react-rating-stars-component";
import { useGetProfileQuery } from "../../../../app/api/brokerAuthApi";
import { CustomSpinner } from "../../../../loading";

export function Brokerhome() {
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
      
      <div className="flex flex-row  overflow-hidden">
        
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
          <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2 mr-5">
            <HomeCard firstName={profile.firstName} 
  lastName={profile.lastName} 
  sale={profile.avgSalePrice} 
  clientSatisfaction={profile.clientSatisfaction}  />
            <HomeCard1 email ={profile.email} location ={profile.location}/>
          </div>
          <div className="border shadow-lg p-3 mt-3 mb-3 rounded-lg mr-4">
            <div className="flex justify-between ">
              <div className="text-primary-normal font-bold">
                Service details
              </div>
            </div>
            <div className="text-start mt-5 ">
              <label
                htmlFor=""
                className="text-gray-400"
              >
                Description
              </label>
              <p className="py-2">
              {profile.about}
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
                  <li>{profile.specialities}</li>
                  
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
                  <li>{profile.expertise} </li>
                 
                </ul>
              </div>
            </div>
            <div></div>
          </div>
          <div className="border shadow-lg p-3 mt-3 lg:mt-6 mb-3 rounded-lg mr-4">
            <div className="text-primary-normal font-bold text-start">
              Customer Review
            </div>
            <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-white p-2 shadow-sm max-w-sm mx-auto mt-4">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                />
                ,
                <p className="my-2 mb-0 text-start font-normal leading-relaxed tracking-wide">
                  I've been using XYZ for over a year now and their customer
                  service is excellent! Whenever I have a question, the team is
                  always available and willing to help. Highly recommend!
                </p>
                <div className="mt-6 flex items-center gap-6 ">
                  <div>
                    <p className="leading-relaxed tracking-wide text-primary-normal font-bold">
                      Melissa Smith
                    </p>
                    <p className="text-xs leading-relaxed tracking-wide text-primary-normal">
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-white p-2 shadow-sm max-w-sm mx-auto mt-4">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                />
                ,
                <p className="my-2 mb-0 text-start font-normal leading-relaxed tracking-wide">
                  I've been using XYZ for over a year now and their customer
                  service is excellent! Whenever I have a question, the team is
                  always available and willing to help. Highly recommend!
                </p>
                <div className="mt-6 flex items-center gap-6 ">
                  <div>
                    <p className="leading-relaxed tracking-wide text-primary-normal font-bold">
                      Melissa Smith
                    </p>
                    <p className="text-xs leading-relaxed tracking-wide text-primary-normal">
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-white p-2 shadow-sm max-w-sm mx-auto mt-4">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                />
                ,
                <p className="my-2 mb-0 text-start font-normal leading-relaxed tracking-wide">
                  I've been using XYZ for over a year now and their customer
                  service is excellent! Whenever I have a question, the team is
                  always available and willing to help. Highly recommend!
                </p>
                <div className="mt-6 flex items-center gap-6 ">
                  <div>
                    <p className="leading-relaxed tracking-wide text-primary-normal font-bold">
                      Melissa Smith
                    </p>
                    <p className="text-xs leading-relaxed tracking-wide text-primary-normal">
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerhome;
