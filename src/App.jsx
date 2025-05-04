import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import OurTeam from "./pages/OurTeam";
import AboutUs from "./components/AboutUs";
import Loader from "./components/Loader";
import CTScan from "./components/services/CtScan";
import UltraSound from './components/services/UltraSound';
function App() {
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setIsLoading(true); 
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 2500); 

      return () => clearTimeout(timer); 
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`${isLoading ? "hidden" : "block"}`}>
        <Navbar />
        <Routes>
        {/* TeacherRoutes */}
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ultrasound" element={<UltraSound />} />
          <Route path="/ctscan" element={<CTScan />} />
          {/* 404 ErrorPage */}
          {/* <Route path="*" element={<NotFoundPage />} />  */}
        </Routes>
      </div>
</>
  );
}

export default App;