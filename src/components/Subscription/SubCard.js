import React from "react";

function SubCard() {
  return (
    <div>
      <section className="flex lg:flex-row flex-col items-center gap-20 mb-20">
        <div className="flex flex-col items-center gap-5 border border-x-2 border-y-2 border-primary-normal w-[330px] h-auto rounded-md pb-10">
          <h1 className="lg:text-2xl text-lg font-bold text-primary-normal mt-5">
            Buyer Subscription
          </h1>
          <p className="text-lg text-primary-normal">
            $49.99<span className="text-sm text-gray-400">/month</span>
          </p>
          <div className="flex flex-col items-start gap-3 m-5">
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">
                Access to car brokers
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">
                Online helpline for buyers
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">
                1 month Unlimiited Car broker assistance
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">
                Buyer flexibility broker
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-28 h-[47px] mb-8 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
          >
            Choose Plan
          </button>
        </div>

        <div className="flex flex-col items-center gap-5 border border-primary-light bg-primary-light w-[330px] h-auto rounded-md pb-10">
          <h1 className="lg:text-2xl text-lg font-bold text-primary-normal mt-5">
            Car Broker Subscription
          </h1>
          <p className="text-lg text-primary-normal">
            $99.99<span className="text-sm text-gray-400">/month</span>
          </p>
          <div className="flex flex-col items-start gap-3 m-5">
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">Access to listings</p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">
                Online helpline for buyers
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">
                Customer Care Access
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">Featured Listings</p>
            </div>
          </div>
          <button
            type="submit"
            className="w-28 h-[47px] mb-8 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
          >
            Choose Plan
          </button>
        </div>

        {/* <div className="flex flex-col items-center gap-5 border border-x-2 border-y-2 border-primary-normal w-[330px] h-auto rounded-md pb-10">
          <h1 className="text-2xl font-bold text-primary-normal mt-5">Premuim Plan</h1>
          <p className="text-lg text-primary-normal">
            $29.99<span className="text-sm text-gray-400">/month</span>
          </p>
          <div className="flex flex-col items-start gap-3 m-5">
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">Unlimited Listings</p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">Comprehensive Analytics</p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 rounded-2xl mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">Dedicated customer service</p>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent text-gray-900 mr-2"
                name="agree"
              />
              <p className="text-sm text-primary-normal">Featured Listings</p>
            </div>
          </div>
          <button
            type="submit"
            className="w-28 h-[47px] mb-8 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
          >
            Choose Plan
          </button>
        </div> */}
      </section>
    </div>
  );
}

export default SubCard;
