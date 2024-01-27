import { useState } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import AboutPage from "./AboutPage";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
