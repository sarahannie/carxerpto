
import { BsFillPeopleFill } from "react-icons/bs";

  
export function HomeCard1({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
      <div className="flex justify-between py-3 align-center text-white ">
          <div>
              Contact Information
          </div>
          <div className="" >
         
          </div>
      </div>
      <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-3 mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">Email</h3>
              <p className="text-white text-[13px]">Janenetsmith@gmail.com</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">Phone</h3>
              <p className="text-white text-[13px]">+123 456789</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400 text-bold">Location</h3>
              <p className="text-white text-[13px]">San Jose, USA</p>
          </div>
          
      </div>
   </div>
  );
}