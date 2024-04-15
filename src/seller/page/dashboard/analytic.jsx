import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import { SaleCard } from "../../widgets/cards/sales/sale-card";
import { SaleCard1 } from "../../widgets/cards/sales/sale-card1";
import { OrderCard } from "../../widgets/cards/orderCard/order-card";


export function Analytic() {
  
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
        <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3 mr-10px">
            <SaleCard />
            <SaleCard1 />
            <OrderCard />
        </div>   
        
        
        </div>
    </div>
      
    </div>
   
  );
}

export default Analytic;
