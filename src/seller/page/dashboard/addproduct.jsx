import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";


export function Addproduct() {
   
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
        
        <div className=" mb-6  flex justify-between mr-4">
            {/* <div>
                <h3 className="text-3xl text-primary-normal pb-3 text-start">Audi Quattro 2020</h3>
                <p className="flex gap-2 text-gray-400 pb-2"><h3 className="text-primary-normal">Date Added:</h3> 12 March 2024 - 12:55 pm</p>     
            </div> */}
            <div>
                <h3 className="text-xl text-primary-normal pb-3 text-start" >Add new list</h3>
            </div>
            <div className="flex gap-4 align-center">
                <div>
                    <button className="flex items-center gap-2 bg-green-900 text-white px-4 py-2 round-md">
                        {/* <IoMdAdd className="h-5 w-5" /> */}
                        Save as Draft
                    </button>
                </div>
               <div>
                <button className="flex items-center gap-2 bg-primary-normal text-white px-3 py-2 round-md ">
                        {/* <IoMdAdd className="h-5 w-5" /> */}
                        Save & Publish
                </button>
               </div>
                
            </div>
        </div>
        
        </div>
    </div>
      
    </div>
   
  );
}

export default Addproduct;
