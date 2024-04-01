import Navbar from "../components/Navbar/Navbar";
import carbroker from "../assets/system.jpg";
import car from "../assets/car.jpg";
import insurance from "../assets/insurance.jpg";
import data from "../assets/data.jpg";
import Footer from "../components/Footer";

function FeatureSec() {
  return (
    <section className="bg-[#e6ebf0] z-0 ">
      <div className=" w-full bg-white ">
        <Navbar />
      </div>
      
      <section className="max-w-[1276px] mx-auto mt-10 lg:mt-10 h-[1118px] w-full ">
        <h1 className="lg:text-[56px] text-[40px] text-blue-950">Features</h1>
        <section className=" mt-10 lg:mt-20  flex flex-col gap-8 p-4 sm:p-4 ">
        <div className=" w-full md:w-full lg:w-full  h-[320px] rounded-md relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-500 inset-0 opacity-95">
            <img
              src={data}
              alt="dataIcon"
              className="absolute h-full w-full object-cover mix-blend-overlay"
            />
            <div className="flex  flex-col text-left p-8 gap-3">
              <h1 className="text-white text-[27px] lg:text-3xl">Seller Dashboard</h1>
              <p className="lg:w-[393px] text-accent-white text-[16px] ">
                Manage your car listings with ease using our Seller Dashboard.
                Create, edit, and monitor your listings, communicate with
                interested buyers, and track your sales performance all in one
                place.
              </p>
              <p className="text-[18px] text-white">Get started</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-5 justify-between">
            <div className=" w-full md:w-full lg:w-[838px]  h-[283px] rounded-md relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-300 inset-0 opacity-100">
              <img
                src={car}
                alt="carIcon"
                className="absolute h-full w-full object-cover mix-blend-overlay"
              />
              <div className="flex  flex-col  p-8 gap-3 flex-wrap ">
                <h1 className="text-white text-3xl font-bold">Car Appraisal</h1>
                <p className="text-[18px] text-white ">Appraise My Car</p>
                <p className="text-left text-white text-[15px] md:text-[20px] md:w-[610px] flex-wrap opacity-100">
                  Get an instant appraisal of your car's value by entering your
                  vehicle details, including make, model, year, mileage, and
                  condition. Receive a quick estimate of your car's worth to
                  make informed decisions about selling or trading.
                </p>
              </div>
            </div>
            <div className=" md:w-full lg:w-[412px]  h-[320px] rounded-md relative overflow-hidden bg-gradient-to-t from-primary-normal to-blue-500 inset-0 opacity-95">
              <img
                src={insurance}
                alt="insuranceIcon"
                className="absolute h-full w-full object-cover mix-blend-overlay"
              />
              <div className="flex  flex-col text-left p-8 gap-3">
                <h1 className="text-white text-3xl">Car Insurance</h1>
                <p className="md:w-[368px] text-white text-[16px] ">
                  Find the best insurance coverage for your car with our Car
                  Insurance feature. Fill out a simple form, compare quotes from
                  top insurance providers, and select the policy that best fits
                  your needs and budget.
                </p>
                <p className="text-[18px] text-white">Get started</p>
              </div>
            </div>
          </div>
         
          <div className=" h-[320px] rounded-md relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-500 inset-0 opacity-100">
            <img
              src={carbroker}
              alt="carBroker"
              className="absolute h-full w-full object-cover mix-blend-overlay"
            />
            <div className="flex  flex-col text-left p-8 gap-3">
              <h1 className="text-white text-3xl">Car Broker</h1>
              <p className="text:[20px]  text-white hidden lg:block">
                As a car broker, streamline your operations with our Car <br />
                Broker Dashboard. Manage client accounts, create and
                <br /> manage listings on their behalf, communicate effectively,
                <br />
                and gain insights into client preferences and sales
                <br />
                performance.
              </p>
              <p className="text-[14.8px] block lg:hidden text-accent-white">
                As a car broker, streamline your operations with our Car 
                Broker Dashboard. Manage client accounts, create and
                manage listings on their behalf, communicate effectively,
                
                and gain insights into client preferences and sales
                performance.
              </p>
              <p className="text-[18px] text-white">Get started</p>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </section>
  );
}
export default FeatureSec;
