import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/backgroundimage.jpg";

function SignIn() {
  return (
    <div className=" h-screen relative overflow-hidden">
      <div className="flex flex-col items-center justify-center relative">
        <img
          src={BackgroundImage}
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75" />
        <h1 className="absolute -left-14 top-4 lg:top-4 lg:left-4 object-contain font-bold text-2xl text-accent-white mx-16
      ">
          Auto<span className="text-secondary-normalhover">Buy</span>
        </h1>
        <div className=" mx-8 lg:mx-0 flex justify-center items-center h-screen">
          <div className="-mt-20 lg:mx-0 w-80 h-4/6 lg:w-96 lg:h-4/6 z-10 bg-accent-white">
            <h2 className="mb-6 text-primary-normal text-lg font-bold mt-5">
              Log Into Your Account
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
                className="w-60 lg:w-80 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300"
              >
                Log In
              </button>
            </form>

            <div class="flex items-center mx-10 mt-8">
              <hr class="flex-grow border-t-2 border-gray-400 mr-2" />
              <span class="text-gray-500">OR</span>
              <hr class="flex-grow border-t-2 border-gray-400 ml-2" />
            </div>

            <div className="flex flex-col items-center gap-2 mt-10">
              <Link
                to=""
                className="w-60 py-2 px-4 border border-x-2 border-y-2 rounded-md font-bold text-center text-base text-gray-900 white bg-transparent hover:bg-secondary-normalhover hover:text-accent-white"
              >
                Login with Google
              </Link>

              <Link
                to=""
                className="w-60 py-2 px-4 border border-x-2 border-y-2 rounded-md font-bold text-center text-base text-gray-900 bg-transperent hover:bg-secondary-normalhover hover:text-accent-white"
              >
                Login with Apple
              </Link>
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-col items-center mx-10 -mt-28 mb-8">
          <h2 className="mb-4 text-accent-white text-lg font-semibold ">
            Don't have an account?
          </h2>
          <Link
            to="/signup"
            className="py-2 px-4 rounded-md text-base text-gray-900 bg-accent-white hover:bg-secondary-normalhover hover:text-accent-white transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
