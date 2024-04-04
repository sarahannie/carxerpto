import React from "react";
import { Link } from "react-router-dom";
import SubCard from "../components/Subscription/SubCard";
// import Table from '../components/Subscription/Table';
import Footer from "../components/Footer/Footer";
import SecNavbar from "../components/Navbar/SecNavbar";

function MonthlySub() {
  return (
    <div>
      <section className="w-full h-full">
        <SecNavbar />
        <section className="flex flex-col items-center">
          <h1 className="lg:text-2xl text-lg font-bold text-primary-normal mb-5 mt-20">
            Choose Your Plan
          </h1>
          <div className="border border-x-2 border-y-2 border-primary-normal mb-3">
            <Link to="month-plan">
              <button type="submit" className="bg-primary-light px-8 py-2">
                Monthly
              </button>
            </Link>
            <Link to="year-plan">
              <button type="submit" className="px-8 py-2">
                Yearly (Save 2.5%)
              </button>
            </Link>
          </div>
          <p className="text-xl text-gray-400 mb-10">Best Plans</p>
          <SubCard />
          {/* <Table /> */}
        </section>
        <Footer />
      </section>
    </div>
  );
}

export default MonthlySub;
