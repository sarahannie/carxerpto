import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../assets/carList.jpg";
import BrandCard from "./BrandCard";
import { Posts, CarPost } from "./DummyData.js";

function CarListing() {
  return (
    <section className="">
      <Navbar />
      <div className="w-full h-[800px] relative  bg-gradient-to-t from-[#002C52] to-[#034885] inset-0 opacity-85  bg-cover bg-no-repeat flex items-center justify-center">
        <img
          src={Hero}
          alt="bannerIcon"
          className="w-full h-full absolute lg:object-cover object-bottom mix-blend-overlay"
          fetchPriority="high"
        />
        <div className="w-full max-w-[663px] h-[130px] absolute mx-auto  top-[217px] text-white flex flex-col gap-1">
          <p className="lg:w-[217px]  mx-auto text-[16px] font-bold leading-[26.6px] ">
            Discover Your Dream Car
          </p>
          <h3 className="text-[32px] font-bold leading-[48px] ">
            Browse Thousands of Cars for Sale
          </h3>
          <p className="text-[20px] font-normal leading-[32px] lg:w-[377px] mx-auto">
            Find the Perfect Car at the Best Price
          </p>
        </div>
        <div className="flex w-[95%] flex-col sm:justify-between lg:flex-row lg:flex items-center bg-[#e6ebf0] lg:w-[1280px] h-[106px] rounded z-50  absolute top-[400px]">
          <section className="w-full lg:w-[70%] text-start">
            <div className=" lg:w-[850px]  mx-auto flex items-center justify-between lg:gap-4 text-start">
              <form  className="flex flex-col lg:w-[182px] text-[#36454F] font-normal">
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
                <label className="text-[12px] md:text-[16px]"> Price range</label>
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
        <div className="grid  grid-cols-2 lg:grid-cols-5">
          {Posts.map((post) => {
            return <BrandCard key={post.id} post={post} />;
          })}
        </div>
      </div>
      <div className="lg:max-w-[1122px] lg:h-[968px]  mx-auto mt-9 mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Listings</h3>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w">
          {CarPost.map((item) => (
            <div
              key={item.id}
              className="border border-slate-300 bg-white shadow"
            >
              <div className="w-full h-[177px]">
                <img
                  className="w-full h-full object-cover"
                  src={item.imgPic}
                  alt="imageIcon"
                />
              </div>
              <div className="p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between ">
                  <h1 className=" text-[16.8px] text-[#002C52] font-bold">
                    {item.title}
                  </h1>
                  <p className="text-[#002C52] text-[15px] font-bold">
                    {item.amount}
                  </p>
                </div>
                <div className="flex items-center text-[12px] font-medium justify-between">
                  <span>{item.sublinkA}</span>
                  <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                  <span>{item.sublinkB}</span>
                  <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                  <span>{item.sublinkC}</span>
                  <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                  <span>{item.sublinkD}</span>
                </div>
                <div className="text-[14px] font-medium leading-[22.4px]">
                  <h3 className="text-start  text-[16px]">Featuers</h3>
                  {item.subItems.map((subItems, Index) => {
                    return (
                      <ul className="flex items-center">
                        <li key={Index}>{subItems}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
export default CarListing;
