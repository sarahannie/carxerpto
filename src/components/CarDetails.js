import Footer from "./Footer/Footer";

import { SiCmake, SiQualtrics } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { useChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../app/api/buyerProductApi";
import { MdOutlineLogoDev } from "react-icons/md";
import { IoCarSportSharp, IoColorFilter, IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";

function CarDetails() {
  const { createChat, updateCurrentChat } = useChatContext();
  const location = useLocation();
  const navigate = useNavigate();
  const { cars } = location.state || {};
  const { data, isSuccess: isGetSuccess } = useGetProfileQuery();
  const profile =  data.responseMessage 
  
 
 
  if (!cars) {
    // If cars is not defined, redirect to a safe route or display a message
    return (
      <div>
        <p>No car details found. Redirecting to the homepage...</p>
        
      </div>
    );
  }

  const handleChatClick = async () => {
    // Assume cars.sellerId contains the seller's user ID
    const sellerId = cars.seller._id;
    const buyerId = profile._id; 

    // Create or get the existing chat with the seller
    await createChat(buyerId, sellerId);
    updateCurrentChat({ members: [buyerId, sellerId] });
    navigate('/chat');
  };

  
  return (
    <section>
      <div className="w-full md:max-w-[1200px] md:mx-auto  mt-8 mb-5">
      <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3 mr-3">
      {cars.images.map((image, index) => (
              <div className="" key={index}>
                <img src={image} className="object-contain  w-[400px] h-[220px] rounded-md shadow-lg" alt={cars.name} />
              </div>
      ))}
      </div>
      </div>

      <div className="mt-16 mx-3 md:mx-0">
        <div className="flex items-center w-full md:max-w-[1200px] md:mx-auto justify-between mt-5   mb-5">
          <p className=" text-[18px] md:text-[30px] font-bold text-[#003B6D] md:mb-5">
            {cars.name}
          </p>
          <p className="md:text-[30px] text-[18px] font-bold text-[#003B6D]">{cars.sellingPrice}</p>
        </div>
        <section className=" w-full mt-6 md:mt-0 md:max-w-[1200px] md:mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-7 mx-auto md:w-[90%] gap-2">
            <div className="flex items-center gap-2 ">
              <SiCmake  className="w-[30px] h-[30px]" />
              <div>
                <h3 className="text-[10px]">Make</h3>
                <h3 className="text-[10px] font-bold">{cars.make}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <IoCarSportSharp className="w-[30px] h-[30px]" />
              <div>
                <h3 className="text-[10px]">Model</h3>
                <h3 className="text-[10px] font-bold">{cars.model}</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <SlCalender className="w-[30px] h-[30px]" />
              <div>
                <h3 className="text-[10px]">Year</h3>
                <h3 className="text-[10px] font-bold">{cars.year}</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <IoLocationSharp className="w-[30px] h-[30px]"/>
              <div>
                <h3 className="text-[10px]">Mileage</h3>
                <h3 className="text-[10px] font-bold">{cars.milleage}</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <BsFuelPumpDiesel className="w-[30px] h-[30px]" />
              <div>
                <h3 className="text-[10px]">Condition</h3>
                <h3 className="text-[10px] font-bold">{cars.condition}</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <IoColorFilter className="w-[30px] h-[30px]"/>
              <div>
                <h3 className="text-[10px]">Color</h3>
                <h3 className="text-[10px] font-bold">{cars.color}</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <SiQualtrics className="w-[30px] h-[30px]" />
              <div>
                <h3 className="text-[10px]">Quantity</h3>
                <h3 className="text-[10px] font-bold">{cars.quantity}</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex  flex-col md:flex-row items-center w-full justify-between p-2 md:p-0 flex-wrap md:max-w-[1200px] md:mx-auto mt-10">
        <div className="md:w-[50%]  w-full text-center md:text-start ">
          <h3 className="text-[18px] text-[#003B6D] font-bold mb-1">
            Car Descriptions
          </h3>
          <p className="text-[12px] md:text-[14px] text-[#36454F] font-medium">
            {cars.longDescription}
          </p>
        </div>
        <div className="md:w-[50%] w-full mt-4 md:mt-0">
          <h3 className="text-[18px]  text-[#003B6D] font-bold md:ml-[30px]">
            Features
          </h3>
          <div className="w-full md:w-[290px] md:ml-[275px] mt-3 flex  md:mx-auto flex-col gap-5">
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className=" w-[15px] h-[15px]" />
              <p className=" text-[14px] md:text-[15px] text-[#36454F] font-medium">
                {cars.shortDescription}
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                {cars.model}
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                {cars.condition}
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                {cars.year}
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                {cars.make}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full justify-between md:max-w-[1200px] md:mx-auto p-2 md:p-0 mt-10 text-start">
        <p className="text-[18px] text-center md:text-start text-[#003B6D] font-bold mb-2">
          Contact Information
        </p>
        <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-3">
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Seller Name</h3>
            <p>Jane Smith</p>
          </div>
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Location</h3>
            <p>Los Angeles CA</p>
          </div>
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Phone</h3>
            <p>224-5890000</p>
          </div>
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Email</h3>
            <p>jane@example.com</p>
          </div>
        </div>
      </section>
      
      <section className="w-full md:flex md:items-center md:justify-between md:max-w-[1200px] md:mx-auto mt-20 mb-10 md:mb-20 md:text-start ">
        <button
          type="submit"
          className="w-60 lg:w-[10%] bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300"
          onClick={handleChatClick}
        >
          Contact Seller
        </button>

        <div className="p-3 rounded-full bg-slate-200 hidden md:block">
          ...
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default CarDetails;
