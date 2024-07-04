import React from "react";
import Footer from "../components/Footer/Footer";
import Suv from "../assets/hero.png";
import Brokercard from "../components/brokercard/brokercard";
import  {useGetBrokerQuery} from '../app/api/buyerProductApi'
import { CustomSpinner } from "../loading";



function CarBroker() {
  const { data, isSuccess, isLoading, isError } = useGetBrokerQuery();
  const profile = isSuccess ? (Array.isArray(data?.brokers) ? data.brokers : []) : [];
  console.log("what", profile)

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
    <div>
      <section className="w-full h-full overflow-x-hidden">
        <section>
        <div className="relative">
  <img
    src={Suv}
    alt="car"
    className="object-cover w-full h-[550px] md:h-[400px] lg:h-[550px]"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 lg:px-16 xl:px-24">
    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">Connect with a Broker for Personalized Assistance</h1>
    <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-8 max-w-xl">Explore our network of experienced brokers who can help you find the perfect vehicle.</p>
   
  </div>
</div>
          <div className="mt-20 mb-14 mx-[20px]">
            <h2 className="text-primary-normal text-start font-bold text-[20px] ">Broker Listings</h2>
            
                <Brokercard />
            

            
          </div>
          
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default CarBroker;
