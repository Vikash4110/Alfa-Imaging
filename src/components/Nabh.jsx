import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeScreen = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-['Poppins'] font-bold text-[#1E3A8A] mb-4"
          variants={itemVariants}
        >
          NABH Accredited Diagnostic Excellence
        </motion.h2>
        <motion.p
          className="text-lg font-['Inter'] text-gray-600 mb-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Alfa Imaging Diagnostic Lab in Jalandhar is proud to be fully accredited by the{" "}
          <span className="font-medium">National Accreditation Board for Hospitals & Healthcare Providers (NABH)</span>,
          ensuring top-quality care and patient safety.
        </motion.p>
        <motion.p
          className="text-base font-['Inter'] text-gray-600 mb-8 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Under the expert supervision of <span className="font-medium">Dr. Arvind Gupta</span> and renowned radiologist{" "}
          <span className="font-medium">Dr. Mayank Gupta</span>, we deliver precise imaging services with a commitment to
          excellence.
        </motion.p>
        <motion.div
          className="flex items-center justify-center text-[#10B981] mb-8"
          variants={itemVariants}
        >
          <FaShieldAlt className="h-6 w-6 mr-2" />
          <span className="font-['Inter']">Committed to Excellence in Imaging</span>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white font-['Inter'] font-medium rounded-lg shadow-md hover:from-[#2B4CBA] hover:to-[#059669] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981] transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeScreen;