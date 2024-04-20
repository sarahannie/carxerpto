import React from 'react'
import Sidenav from '../widgets/layout/sidenav'
import DashboardNavbar from '../widgets/layout/dashboard-navbar'


const Homeadmin = () => {
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
      <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
      
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        
       
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Homeadmin