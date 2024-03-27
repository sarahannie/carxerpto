// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Importing Pages */
import OnboardingPage from "./pages/OnboardingPage";
import SignIn from "./pages/SignIn";

/* Importing Components */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/" element={<OnboardingPage />} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
