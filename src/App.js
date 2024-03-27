// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Importing Pages */
import OnboardingPage from "./pages/OnboardingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
