import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Eyes from "./pages/Eyes";
import EyesCheck from "./pages/EyesCheck";
import EyesCheckResult from "./pages/EyesCheckResult";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import penyakit from "./data/penyakit";

const App = () => {
  const [result, setResult] = useState([]);

  const getResult = (selectedSymptom) => {
    penyakit.forEach((p) =>
      p.gejala.every((g) => selectedSymptom.includes(g)) && p.gejala.length === selectedSymptom.length
        ? setResult(p)
        : null
    );

    return result;
  };

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyes" element={<Eyes />}>
            <Route path="check" element={<EyesCheck />} />
            <Route path="result" element={<EyesCheckResult getResult={getResult} />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
