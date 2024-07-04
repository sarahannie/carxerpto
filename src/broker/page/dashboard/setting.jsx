import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import Profilebody from "../../layouts/profileCon/Profilebody";


export function SettingBroker() {
  
  return (
    <div className="">
     
      <div className="flex flex-row  overflow-hidden">
        
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">   
        <Profilebody />
        </div>
    </div>
      
    </div>
   
  );
}

export default SettingBroker;
