import React from 'react';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaHeartbeat, FaShieldAlt, FaMicroscope } from 'react-icons/fa';
import labImage from '../assets/Screenshot 2025-05-04 at 11.59.19 AM.png'; // Use your lab image

const MissionVision = () => {
  const coreValues = [
    {
      icon: <FaMicroscope className="text-blue-600 text-2xl" />,
      title: "Cutting-Edge Technology",
      description: "50-slice CT, 4D ultrasound, and NABH-certified equipment"
    },
    {
      icon: <FaHeartbeat className="text-blue-600 text-2xl" />,
      title: "Preventive Healthcare",
      description: "Early detection systems for chronic disease management"
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Quality Assurance",
      description: "ISO 9001 and NABH accredited protocols"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            OUR CORE PHILOSOPHY
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Precision Diagnostics, <span className="text-blue-600">Compassionate Care</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Mission & Vision Statement */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaClinicMedical className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
              Alfa Imaging and diagnostic Lab mission is to use world class technology to give in depth & latest studies for better diagnostic approach. Our continuous effort is to create healthy community by bringing health awareness and moving from reactive to preventive health care and early detection for all age groups and gender. In past years, we have ensured world class diagnostics to Jalandhar and our vision is to raise our own bar by continuous efforts to bring service excellence, patient care and latest technology at affordable prices for all.

              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaHeartbeat className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
              Alfa Imaging and diagnostic lab, embodies the central goal of employing world class innovation to provide accurate and most recent investigations of the diagnostics world. Our supreme efforts are aimed at building a healthy community by spreading health awareness and progressing from reactive to preventive health care enabled by early detection of chronic illnesses for all age groups and genders. Our vision is to raise our own bar by putting in persistent efforts to establish service excellence, premium patient care, and most recent innovation at affordable costs to all.
              </p>
            </motion.div>
          </div>

          {/* Core Values with Lab Image */}
          <div className="lg:w-1/2 flex flex-col">
            

            <motion.div 
              className="relative rounded-xl overflow-hidden flex-1 min-h-[300px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={labImage} 
                alt="Alfa Imaging Diagnostic Lab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900">NABH Accredited Facility</h4>
                  <p className="text-sm text-gray-600">Jalandhar's premier diagnostic center since 1987</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;