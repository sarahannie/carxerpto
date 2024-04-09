import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../assets/carList.jpg";
import BrandLink from "../components/BrandGrid.js";
import List from "../components/ListingCard.js";
import CategoryGrid from "../components/CategoryGrid.js";

function CarListing() {
  return (
    <section className="">
      <Navbar />
      <div className="w-full h-[800px] relative  bg-gradient-to-t from-[#002C52] to-[#034885] inset-0 opacity-85  bg-cover bg-no-repeat flex items-center justify-center">
        <img
          src={Hero}
          alt="bannerIcon"
          className="w-full h-full absolute lg:object-cover object-bottom mix-blend-overlay"
          fetchpriority="high"
        />
        <div className="w-full max-w-[663px] md:h-[130px] absolute mx-auto top-[300px] md:top-[217px] text-white flex flex-col gap-1">
          <p className="lg:w-[217px]  mx-auto text-[16px] font-bold leading-[26.6px] ">
            Discover Your Dream Car
          </p>
          <h3 className="text-[32px] font-bold leading-[48px] ">
            Browse Thousands of Cars for Sale
          </h3>
          <p className="text-[16px] md:text-[20px] font-normal leading-[32px] lg:w-[377px] mx-auto">
            Find the Perfect Car at the Best Price
          </p>
        </div>
        <div className="flex w-[95%] flex-col sm:justify-between lg:flex-row lg:flex items-center bg-[#e6ebf0] lg:w-[1280px] h-[106px] rounded z-50  absolute top-[500px] md:top-[400px]">
          <section className="w-full lg:w-[60%] text-start">
            <div className=" lg:w-[850px]  mx-auto flex items-center justify-between lg:gap-4 text-start">
              <form className="flex flex-col lg:w-[182px] text-[#36454F] font-normal">
                <label className="text-[12px] md:text-[16px] "> Category</label>
                <select className="bg-transparent outline-none text-[12px] md:text-[16px]">
                  <option
                    value=""
                    className="text-[10px] text-[#36454F] font-medium"
                  >
                    SUV
                  </option>
                </select>
              </form>
              <hr className="w-[0.1px] h-[50px] border border-gray-400 hidden sm:block md:block" />
              <form className="flex flex-col lg:w-[182px]">
                <label className="text-[12px] md:text-[16px]">Make</label>
                <select className="bg-transparent outline-none text-[12px] md:text-[16px]">
                  <option
                    value=""
                    className="text-[12px] text-[#36454F] font-medium"
                  >
                    Audi
                  </option>
                </select>
              </form>
              <hr className="w-[0.1px] h-[50px] border border-gray-400 hidden sm:block md:block" />
              <form className="flex flex-col md:w-[182px]">
                <label className="text-[12px] md:text-[16px]"> Body Type</label>
                <select className="bg-transparent outline-none text-[12px] md:text-[16px]">
                  <option
                    value=""
                    className="text-[12px] text-[#36454F] font-medium"
                  >
                    Compact SUVs
                  </option>
                </select>
              </form>
              <hr className="w-[0.1px] h-[50px] border border-gray-400 hidden sm:block md:block" />
              <form className="flex flex-col lg:w-[182px]">
                <label className="text-[12px] md:text-[16px]">
                  {" "}
                  Price range
                </label>
                <select className="bg-transparent outline-none text-[12px] md:text-[16px]">
                  <option
                    value=""
                    className="text-[12px] text-[#36454F] font-medium"
                  >
                    $10000
                  </option>
                </select>
              </form>
              <hr className="w-[0.1px] h-[50px] border border-gray-400 hidden sm:block md:block" />
              <form className="flex flex-col lg:w-[182px]">
                <label className="text-[12px] md:text-[16px]"> Year</label>
                <select className="bg-transparent outline-none text-[12px] md:text-[16px]">
                  <option
                    value=""
                    className="text-[12px] text-[#36454F] font-medium"
                  >
                    2019
                  </option>
                </select>
              </form>
            </div>
          </section>
          <div className="w-full lg:w-[30%] mt-3 lg:mt-0 md:pb-4 sm:pb-4">
            <button className=" w-[50%] lg:w-[30%]  py-2 px-6 rounded-md text-base lg:ml-64 text-accent-white bg-primary-normal hover:bg-secondary-normalhover hover:text-accent-white cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:h-[322.58px] mt-6  max-w-[1280px] mx-auto">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Trusted Brand</h3>
        <BrandLink />
      </div>
      <div className="lg:max-w-[1122px] lg:h-[968px]  mx-auto mt-9 mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Listings</h3>
        <List />
      </div>
      <div className="lg:max-w-[1122px] mb-16  mx-auto mt-9 mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Category</h3>
        <CategoryGrid/>
      </div>

      <Footer />
    </section>
  );
}
export default CarListing;
