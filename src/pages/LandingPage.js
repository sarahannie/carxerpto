import React from 'react'
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

function LandingPage() {
  return (
    <div>
      <section className="bg-white w-full h-screen">
        <Navbar />
        
        <Footer />
      </section>
    </div>
  )
}

export default LandingPage
