import Footer from "./Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { SiCmake } from "react-icons/si";
import { FaRegCheckCircle } from "react-icons/fa";
function CarDetails() {
  return (
    <section>
      <Navbar />
      <div className="w-full max-w-[1200px] mx-auto h-[300px] mt-4 bg-red-500 ">img carusole</div>

      <div className="mt-8">
        <div className="flex items-center w-full md:max-w-[1200px] mx-auto justify-between mt-5 mb-5">
          <p className="text-[42px] font-bold text-[#003B6D] mb-5">Quattro 2020</p>
          <span className="text-[42px] font-bold text-[#003B6D]">$25,000</span>
        </div>
        <section className=" grid grid-cols-6 w-full max-w-[1200px] mx-auto gap-3">
          <div className="flex items-center gap-2 ">
            <SiCmake className="" />
            <div>
              <h3 className="text-[10px]">Make</h3>
              <h3 className="text-[10px] font-bold">Audi</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <SiCmake className="" />
            <div>
              <h3 className="text-[10px]">Model</h3>
              <h3 className="text-[10px] font-bold">Quattro</h3>
            </div>
          </div>
          <div className=" flex items-center gap-2 ">
            <SiCmake className="" />
            <div>
              <h3 className="text-[10px]">Year</h3>
              <h3 className="text-[10px] font-bold">2020</h3>
            </div>
          </div>
          <div className=" flex items-center gap-2 ">
            <SiCmake className="" />
            <div>
              <h3 className="text-[10px]">Mileage</h3>
              <h3 className="text-[10px] font-bold">2000 miles</h3>
            </div>
          </div>
          <div className=" flex items-center gap-2 ">
            <SiCmake className="" />
            <div>
              <h3 className="text-[10px]">Seats</h3>
              <h3 className="text-[10px] font-bold">4 seats</h3>
            </div>
          </div>
          <div className=" flex items-center gap-2 ">
            <SiCmake className="" />
            <div>
              <h3 className="text-[10px]">Consumptions</h3>
              <h3 className="text-[10px] font-bold">20-25 Mph</h3>
            </div>
          </div>
        </section>
      </div>
      <section className="flex items-center w-full justify-between max-w-[1200px] mx-auto mt-10" >
        <div className="md:w-[50%]  text-start">
          <h3 className="text-[18px] text-[#003B6D] font-bold mb-1">Car Descriptions</h3>
          <p className="text-[14px] text-[#36454F] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula justo ac mi fermentum, eget fermentum libero pharetra.
            Nullam euismod urna at justo scelerisque, ut cursus ipsum consequat.
            Integer at erat at turpis consequat vulputate. Sed vestibulum odio
            ut leo aliquam vehicula. Fusce laoreet arcu nec libero aliquet, vel
            auctor sapien venenatis. Sed non est id eros fringilla feugiat. Sed
            euismod, elit eu tincidunt sagittis, ipsum leo consequat quam, at
            placerat velit nisi non purus.
          </p>
        </div>
        <div className="md:w-[50%] ">
          <h3 className="text-[18px] text-[#003B6D] font-bold ml-[30px]">Features</h3>
          <div className="w-full md:w-[290px] ml-[275px] mt-3 flex  mx-auto flex-col gap-5">
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className=" w-[15px] h-[15px]" />
                <p className= " text-[14px] md:text-[15px] text-[#36454F] font-medium">
                         All-wheel drive (Quattro)
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px]"/>
                <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">Turbocharged engine</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px]"/>
                <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">Leather interior</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle  className="w-[15px] h-[15px]"/>
                <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">Bang & Olufsen sound system</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle  className="w-[15px] h-[15px]"/>
                <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">Navigation system</p>
              </div>
            </div>
          
        </div>
      </section>
        <h3>
            <p>Contact Information</p>
        </h3>
      <section></section>


      <Footer />
    </section>
  );
}

export default CarDetails;
