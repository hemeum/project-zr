import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SymptomInput from "./components/SymptomInput";
import Disease from "./components/Disease";
import Hospitallist from "./components/Hospitallist";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/symptom/*" element={<SymptomInput />}></Route>
          <Route path="/disease/*" element={<Disease />}></Route>
          <Route path="/hospital/*" element={<Hospitallist />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
