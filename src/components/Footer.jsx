import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <MdHealthAndSafety className="text-3xl text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold">Alfa Imaging</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Jalandhar's premier diagnostic center providing accurate, affordable diagnostics since 1987.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Patient Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CT Scan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ultrasound</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mammography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ECG/EEG</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">X-Ray</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lab Tests</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">421 Adarsh Nagar, Adjoining PNB Bank, Kapurthala Chowk, Jalandhar</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+628027927" className="text-gray-400 hover:text-white transition-colors">+628027927</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:alfalab929@gmail.com" className="text-gray-400 hover:text-white transition-colors">alfalab929@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-400 mr-3" />
                <span className="text-gray-400">8:00 AM - 8:00 PM (Emergency 24/7)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-white p-3 rounded-lg">
            <span className="font-bold text-gray-800">NABH</span>
            <span className="text-gray-600 text-sm ml-2">Accredited</span>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <span className="font-bold text-gray-800">ISO 9001</span>
            <span className="text-gray-600 text-sm ml-2">Certified</span>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <span className="font-bold text-gray-800">BSI</span>
            <span className="text-gray-600 text-sm ml-2">Registered</span>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <span className="font-bold text-gray-800">UKAS</span>
            <span className="text-gray-600 text-sm ml-2">Recognized</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Alfa Imaging & Diagnostic Lab. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;