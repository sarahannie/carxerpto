// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Importing Pages */
import OnboardingPage from "./pages/OnboardingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutYou from "./pages/AboutYou";
import ForgetPass from "./pages/ForgetPass";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import FeatureSec from "./pages/FeatureSec";
import CarCategory from "./pages/CarCategory";
import CarListing from "./pages/CarListing";
import CarApprasial from "./pages/CarAppar.js";
import CarInsur from "./pages/CarInsura.js";
import Prices from "./pages/price.js";
import Payment from "./pages/Payments.jsx";
import CarQuota from "./components/CarQuota.js";
import CarInsurQ from "./components/carInsuQuota.js";
import Success from "./components/SuccessPay.js";
import CarDetails from "./components/CarDetails.js";



/* Importing Components */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path ="/signup" element ={<SignUp/>} />
          <Route path="/about" element={<AboutYou/>}/>
          <Route path ="/forget" element={<ForgetPass/>}/>
          <Route path ="/about-us" element={<AboutUs/>}/>
          <Route  path= "/feature" element ={<FeatureSec/>}/>
          <Route  path= "/car-category" element ={<CarCategory/>}/>
          <Route  path= "/car-listing" element ={<CarListing/>}/>
          <Route path ="/car-apprasial" element={<CarApprasial/>}/>
          <Route path="/car-insurance" element ={<CarInsur/>}/>
          <Route path="/price" element ={<Prices/>}/>
          <Route path="/payment" element ={<Payment/>}/>
          <Route path="/car-quota" element={<CarQuota/>}/>
          <Route path="/car-quota-insurance" element={<CarInsurQ/>}/>
          <Route path ="/success-pay" element={<Success/>}/>
          <Route path="car-details" element={<CarDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
