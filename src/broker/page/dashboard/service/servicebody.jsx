import React from "react";
import DashboardNavbar from "../../../widgets/layout/dashboard-navbar";
import Sidenav from "../../../widgets/layout/sidenav";



export function Servicebody() {
  
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">   
        Hello worlsd
        </div>
    </div>
      
    </div>
   
  );
}

export default Servicebody;