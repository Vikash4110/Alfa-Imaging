import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaBars, 
  FaTimes, 
  FaPhoneAlt, 
  FaInstagram, 
  FaFacebook, 
  FaChevronDown, 
  FaHome, 
  FaStethoscope, 
  FaInfoCircle, 
  FaUsers, 
  FaEnvelope, 
  FaCalendarCheck, 
  FaBaby, 
  FaXRay, 
  FaFemale, 
  FaHeartbeat 
} from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesDropdown(!servicesDropdown);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1E3A8A] text-white shadow-lg sticky top-0 z-50"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-3xl font-['Poppins'] font-bold flex items-center">
              <span className="text-[#10B981]">Alfa</span> Imaging
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaHome className="mr-2" />
              </motion.div>
              <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                Home
              </motion.span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
              >
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <FaStethoscope className="mr-2" />
                </motion.div>
                <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  Services
                </motion.span>
                <FaChevronDown className={`ml-2 transform ${servicesDropdown ? "rotate-180" : ""} transition-transform duration-300`} />
              </button>
              {servicesDropdown && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute left-0 mt-4 w-64 bg-white text-gray-700 shadow-xl rounded-lg py-2 z-50"
                >
                  <Link
                    to="/services/ultrasound"
                    className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
                    onClick={toggleServices}
                  >
                    <FaBaby className="mr-2" />
                    3D/4D Ultrasound
                  </Link>
                  <Link
                    to="/services/ct-scan"
                    className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
                    onClick={toggleServices}
                  >
                    <FaXRay className="mr-2" />
                    CT Scan & Angiography
                  </Link>
                  <Link
                    to="/services/mammography"
                    className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
                    onClick={toggleServices}
                  >
                    <FaFemale className="mr-2" />
                    Digital Mammography
                  </Link>
                  <Link
                    to="/services/ecg-eeg"
                    className="flex items-center px-4 py-2 hover:bg-[#10B981] hover:text-white transition-colors duration-200"
                    onClick={toggleServices}
                  >
                    <FaHeartbeat className="mr-2" />
                    ECG/EEG
                  </Link>
                </motion.div>
              )}
            </div>

            <Link
              to="/about"
              className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaInfoCircle className="mr-2" />
              </motion.div>
              <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                About Us
              </motion.span>
            </Link>
            <Link
              to="/our-team"
              className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaUsers className="mr-2" />
              </motion.div>
              <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                Our Team
              </motion.span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center text-lg font-['Inter'] font-medium hover:text-[#10B981] transition-colors duration-300"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaEnvelope className="mr-2" />
              </motion.div>
              <motion.span whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                Contact
              </motion.span>
            </Link>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-appointment"
                className="flex items-center bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-full font-['Inter'] font-medium transition-colors duration-300"
              >
                <FaCalendarCheck className="mr-2" />
                Book Appointment
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Hamburger */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden bg-[#1E3A8A] py-4 px-4 rounded-b-lg shadow-lg"
          >
            <Link
              to="/"
              className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              <FaHome className="mr-2" />
              Home
            </Link>

            <button
              onClick={toggleServices}
              className="w-full flex justify-between items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
            >
              <div className="flex items-center">
                <FaStethoscope className="mr-2" />
                Services
              </div>
              <FaChevronDown className={`transform ${servicesDropdown ? "rotate-180" : ""} transition-transform duration-300`} />
            </button>

            {servicesDropdown && (
              <div className="pl-6">
                <Link
                  to="/services/ultrasound"
                  className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
                  onClick={() => { toggleServices(); toggleMenu(); }}
                >
                  <FaBaby className="mr-2" />
                  3D/4D Ultrasound
                </Link>
                <Link
                  to="/services/ct-scan"
                  className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
                  onClick={() => { toggleServices(); toggleMenu(); }}
                >
                  <FaXRay className="mr-2" />
                  CT Scan & Angiography
                </Link>
                <Link
                  to="/services/mammography"
                  className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
                  onClick={() => { toggleServices(); toggleMenu(); }}
                >
                  <FaFemale className="mr-2" />
                  Digital Mammography
                </Link>
                <Link
                  to="/services/ecg-eeg"
                  className="flex items-center py-2 text-md font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
                  onClick={() => { toggleServices(); toggleMenu(); }}
                >
                  <FaHeartbeat className="mr-2" />
                  ECG/EEG
                </Link>
              </div>
            )}

            <Link
              to="/about"
              className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              <FaInfoCircle className="mr-2" />
              About Us
            </Link>
            <Link
              to="/our-team"
              className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              <FaUsers className="mr-2" />
              Our Team
            </Link>
            <Link
              to="/contact"
              className="flex items-center py-3 text-lg font-['Inter'] hover:bg-[#10B981] hover:text-white px-4 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              <FaEnvelope className="mr-2" />
              Contact
            </Link>

            <div className="mt-6 flex items-center space-x-6 px-4">
              <a
                href="tel:+628027927"
                className="flex items-center text-[#10B981] hover:text-white transition-colors duration-200"
              >
                <FaPhoneAlt className="mr-2" />
                Emergency
              </a>
              <a
                href="https://instagram.com/alfaimaginganddiagnosticlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#10B981] transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com/alfaimagingdiagnosticlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#10B981] transition-colors duration-200"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;