import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import MissionVision from '../components/MissionVision';
import Nabh from '../components/Nabh';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Nabh />
      <MissionVision />
      <Footer />
    </>
  );
};

export default Home;