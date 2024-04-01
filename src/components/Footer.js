import { Link } from "react-router-dom";
import facebook from "../assets/FacebookLogo.png"
import instagram from "../assets/InstagramLogo.png"
import linkedin from "../assets/LinkedinLogo.png"
import twitter from "../assets/iconoir_twitter.png"

function Footer() {
  return (
    <footer className="bg-primary-normal mt-[400px] lg:mt-72 p-3 sm:p-8 md:p-16 flex-wrap flex flex-col">
      <div className=" lg:max-w-[1276px] mx-auto w-full flex items-center  flex-col lg:flex-row flex-wrap">
        <section className="flex justify-between w-full lg:w-3/5 h-[216px] lg:text-start lg:items-start lg:justify-around text-white flex-wrap">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-[16px] lg:text-[20px]">Navigation</h1>
            <ul className="lg:text-[16px]">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Car Listing</Link>
              </li>
              <li>
                <Link>Search</Link>
              </li>
              <li>
                <Link>Testimonial</Link>
              </li>
              <li>
                <Link>Footer</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-3 ">
              <h1 className="text-[16px] lg:text-[20px]">About us</h1>
              <ul className="flex flex-col gap-2 text-[16px]">
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Car Listing</Link>
                </li>
                <li>
                  <Link>Our services</Link>
                </li>
                <li>
                  <Link>Car appraisal</Link>
                </li>
                <li>
                  <Link>Car evaluation</Link>
                </li>
                <li>
                  <Link>Car Insurance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[16px] lg:text-[20px]">Features</h1>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li>
                <Link>Sell car</Link>
              </li>
              <li>
                <Link>Buy car</Link>
              </li>
              <li>
                <Link>Platform Admin</Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="w-full mt-5 lg:mt-0 lg:w-2/5 h-[216px]">
          <p className="text-[20px] lg:text-end text-white font-bold mb-4 ">
            Subscribe to our Newsletter
          </p>
          <div className="w-full flex items-center rounded-md overflow-hidden border border-white mb-4 ">
            <input className="w-[320px] p-2 outline-none bg-white " />
            <button className="text-white p-2 md:p-0 text-[16px] text-center  mx-auto ">
              Subscribe
            </button>
          </div>

          <p className="lg:text-end text-white text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Amet adipiscing enim enim ac
            aenean facilisis eget sit nibh. Egestas aliquam congue congue massa
            scelerisque.
          </p>
        </div>
      </div>
      <div className="max-w-[1276px] mx-auto  w-full flex items-center justify-between lg:mt-20 mb-5 lg-mb-0">
        <div className=" ml-10 md:ml-20">
          <h1 className="-ml-8 lg:-ml-0 font-bold text-2xl text-white">
            Auto<span className="text-white">Buy</span>
          </h1>
        </div>

        <div className="flex items-center w-[228px] justify-between ">
            <div className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px]">
                <img
                src={facebook}
                alt="facebookIcon"
                className="w-full h-auto object-cover"
                />

            </div>
            <div className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px]">
                <img
                src={instagram}
                alt="instagramIcon"
                className="w-full h-auto object-cover"
                />

            </div>
            <div className="lg:w-[48px] lg:h-[48px] w-[35px] h-[35px]">
                <img
                src={linkedin}
                alt="linkedinIcon"
                className="w-full h-auto object-cover"
                />

            </div>
            <div className="lg:w-[48px] lg:h-[48px] w-[38px] h-[38px]">
                <img
                src={twitter}
                alt="twitterIcon"
                className="w-full h-auto object-cover"
                />

            </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
