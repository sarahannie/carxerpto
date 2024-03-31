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
        </Routes>
      </Router>
    </div>
  );
}


export default App;
