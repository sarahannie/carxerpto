import React from "react";
import BackgroundImage from "../assets/backgroundimage.jpg";

function SignUp(){
    return (
        <div className=" h-screen relative">
        <div className="flex flex-col items-center justify-center relative">
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
          <div className="flex justify-center items-center h-screen">
            <div className="-mt-20 w-96 h-4/6 z-10 bg-accent-white">
              <h2 className="mb-4 text-primary-normal text-lg font-semibold mt-5">
               Sign Up to get Started
              </h2>
              <form className="relative">
                <div className="mx-10 flex items-center mb-2 relative">
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
                    placeholder="example@gmail.com"
                    className="border border-gray-400 text-xs px-3 py-3 rounded w-80"
                  />
                </div>
                <label class="flex items-center mx-10 mb-8">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-transparent text-gray-900 mr-2"
                    name="agree"
                  />
                  <span className="text-sm text-gray-900 font-extralight">
                    Remind me always
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-80 bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300"
                >
                  Log In
                </button>
              </form>
              <div class="flex items-center mx-10 mt-6">
                <hr class="flex-grow border-t-2 border-gray-400 mr-2" />
                <span class="text-gray-500">OR</span>
                <hr class="flex-grow border-t-2 border-gray-400 ml-2" />
              </div>
  
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Login with Google"
                className=" mt-8 border border-gray-400 text-xs px-3 py-3 rounded w-80"
              />
  
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Login with Apple"
                className="mt-2 border border-gray-400 text-xs px-3 py-3 rounded w-80"
              />
            </div>
          </div>
          <div className="z-10 flex flex-col items-center mx-10 -mt-28 mb-5">
            <h2 className="mb-4 text-accent-white text-lg font-semibold ">
              Don't have an account?
            </h2>
            <button
              type="submit"
              className="w-40 bg-accent-white text-gray-900 py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    )
}
export default SignUp