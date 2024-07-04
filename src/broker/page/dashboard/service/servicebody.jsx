import React from "react";
import Brokercard from "../../../widgets/cards/brokercard/brokercard";
import { useGetProfileQuery } from "../../../../app/api/brokerAuthApi";
import { CustomSpinner } from "../../../../loading";



export function Servicebody() {
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
      
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px] flex justify-start  mb-4">   
            <Brokercard image={profile.profilePhoto} firstname={profile.firstName} 
            lastname={profile.lastName}year={profile.experience} clientSatisfaction={profile.clientSatisfaction} location={profile.location} language={profile.language} about={profile.about} specialities={profile.specialities} expertise={profile.expertise} />
        </div>
    </div>
      
    </div>
   
  );
}

export default Servicebody;