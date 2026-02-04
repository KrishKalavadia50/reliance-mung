import React from "react";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Til from "./components/Til";
import Udad from "./components/Udad";
import Cowpea from "./components/Cowpea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Til" element={<Til />} />
        <Route path="/Udad" element={<Udad />} />
        <Route path="/Cowpea" element={<Cowpea />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
