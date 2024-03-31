import Navbar from "../components/Navbar/Navbar";
import carbroker from "../assets/system.jpg";
import car from "../assets/car.jpg";
import insurance from "../assets/insurance.jpg";
import data from "../assets/data.jpg";
function FeatureSec() {
  return (
    <section className="bg-[#e6ebf0] h-[2391px] ">
      <div className=" w-full bg-white ">
        <Navbar />
      </div>

      <section className="max-w-[1276px] mx-auto mt-10 h-[1118px] w-full ">
        <h1 className="text-[56px] text-blue-950">Features</h1>
        <section className="mt-20  flex flex-col gap-8 p-4 sm:p-4 ">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-5">
            <div className=" w-full md:w-full lg:w-[650px]  h-[283px] rounded-md relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-200">
              <img
                src={car}
                alt="carIcon"
                className="absolute h-full w-full object-cover mix-blend-overlay"
              />
              <div className="flex  flex-col  p-8 gap-3 flex-wrap">
                <h1 className="text-white text-3xl font-bold">Car Appraisal</h1>
                <p className="text-[18px] text-white ">Appraise My Car</p>
                <p className="text-left text-white text-[15px] md:text-[20px] md:w-[610px] flex-wrap">
                  Get an instant appraisal of your car's value by entering your
                  vehicle details, including make, model, year, mileage, and
                  condition. Receive a quick estimate of your car's worth to
                  make informed decisions about selling or trading.
                </p>
              </div>
            </div>
            <div className=" md:w-full lg:w-[412px]  h-[320px] rounded-md relative overflow-hidden bg-gradient-to-b from-primary-normal to-blue-600">
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
          <div className=" w-full md:w-full lg:w-[844px]  h-[320px] rounded-md relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-200">
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
          <div className=" h-[320px] rounded-md relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-200 ">
            <img
              src={carbroker}
              alt="carBroker"
              className="absolute h-full w-full object-cover mix-blend-overlay"
            />
            <div className="flex  flex-col text-left p-8 gap-3">
              <h1 className="text-white text-3xl">Car Broker</h1>
              <p className="text:[20px] text-white hidden lg:block">
                As a car broker, streamline your operations with our Car <br />
                Broker Dashboard. Manage client accounts, create and
                <br /> manage listings on their behalf, communicate effectively,
                <br />
                and gain insights into client preferences and sales
                <br />
                performance.
              </p>
              <p className="text:[15px] block lg:hidden text-white lg:text-[20px] ">
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
      <h1>hello</h1>
    </section>
  );
}
export default FeatureSec;
