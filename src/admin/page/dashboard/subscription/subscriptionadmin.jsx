import React from "react";
import DashboardNavbar from "../../../widgets/layout/dashboard-navbar";
import Sidenav from "../../../widgets/layout/sidenav";






export function Subscriptionadmin() {
  
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[19%] ml-[15px]">
        <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3 mr-20px">
            
        </div> 
        <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-2 mr-10px mt-[50px]">
          
        </div>  
        <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-2 mr-10px mt-[50px]">
        
        </div>  
       
        
        </div>
    </div>
      
    </div>
   
  );
}

export default Subscriptionadmin;
