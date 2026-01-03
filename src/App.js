import React from "react";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Til from "./components/Til";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Til" element={<Til />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
