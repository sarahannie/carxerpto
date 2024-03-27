// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Importing Pages */
import OnboardingPage from "./pages/OnboardingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutYou from "./pages/AboutYou";
import ForgetPass from "./pages/ForgetPass";

/* Importing Components */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path ="/signup" element ={<SignUp/>} />
          <Route path="/about" element={<AboutYou/>}/>
          <Route path ="/forget" element={<ForgetPass/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
