import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CheckDiseases from "./pages/CheckDiseases";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-auto">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-diseases" element={<CheckDiseases />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
