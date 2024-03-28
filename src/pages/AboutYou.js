
import BackgroundImage from "../assets/backgroundimage.jpg";
function About(){
    return(
        <div className=" h-screen relative">
        <div className="flex flex-col items-center justify-center relative ">
          <img
            src={BackgroundImage}
            alt="background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-75" />
          <h1 className="absolute left-4 top-4 object-contain font-bold text-2xl text-accent-white mx-16
        ">
            Auto Buy
          </h1>
          <div className="flex justify-center items-center h-screen ">
            <div className="-mt-20 w-96 h-4/6 z-10 bg-accent-white rounded-md">
              <h2 className="mb-4 text-primary-normal text-lg font-semibold mt-5">
               Tell us about yourself
              </h2>
              <form className="relative">
                <div className="mx-10 flex items-center mb-5 relative">
                  <label
                    htmlFor="email"
                    className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@gmail.com"
                    className="border border-gray-400 text-xs px-3 py-3 rounded w-80"
                  />
                </div>
                <div className="mx-10 flex items-center mb-5 relative">
                  <label
                    htmlFor="email"
                    className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
                  >
                    Fullname
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example Flora Moi"
                    className="border border-gray-400 text-xs px-3 py-3 rounded w-80"
                  />
                </div>
                <div className="mx-10 flex items-center mb-8 relative">
                  <label
                    htmlFor="email"
                    className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
                  >
                    What Describe you best?
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Buyer"
                    className="border border-gray-400 text-xs px-3 py-3 rounded w-80"
                  />
                </div>
              
                <button
                  type="submit"
                  className="w-80 bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300"
                >
                  Continue
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    )
}
export default About