import React from 'react';
import { FaClinicMedical, FaAward, FaClock, FaFlask, FaUserMd } from 'react-icons/fa';
import labImage from '../assets/image2.jpeg'; // Replace with your lab image
import founderImage from '../assets/image1.png'; // Replace with founder image

const AboutUs = () => {
  const services = [
    "50 Slice CT Scan",
    "4D Ultrasound Scan",
    "Color Doppler (Limbs & Carotid)",
    "Digital Mammography",
    "FNAC & Biopsies",
    "Spirometry",
    "ECHO, EEG, ECG",
    "X-Ray Services",
    "Fully Automated Hematology Analyzer",
    "Microbiology Testing",
    "Coagulometer Testing"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Alfa Imaging</span> Diagnostic Lab
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Since 1987, we've been delivering precise diagnostic services with compassion and cutting-edge technology. 
              What began as a small ultrasound unit has grown into Jalandhar's premier diagnostic center, offering 
              comprehensive testing under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <FaAward className="text-blue-600 mr-2" />
                <span className="font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <FaClinicMedical className="text-blue-600 mr-2" />
                <span className="font-medium">NABH Accredited</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <img 
              src={labImage} 
              alt="Alfa Imaging Diagnostic Lab" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FaClinicMedical className="text-blue-600 mr-4" />
              Our Journey
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1987 with a single ultrasound machine, Alfa Imaging Diagnostic Lab was born from a vision to 
              provide reliable reporting and exceptional patient care. As Punjab's first ISO 9001-2000 certified diagnostic 
              center, we've consistently pioneered advanced imaging technologies while maintaining our commitment to 
              affordable, accurate diagnostics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, our BSI and UKAS registered facility houses state-of-the-art equipment including a 50-slice CT scanner, 
              4D ultrasound, and fully automated laboratory analyzers, serving as a trusted diagnostic partner for 
              Jalandhar's healthcare community.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
              <img 
                src={founderImage} 
                alt="Dr. Arvind Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message from Our Founder
            </h2>
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaUserMd className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Arvind Gupta</h3>
                <p className="text-blue-600">Managing Director</p>
                <p className="text-sm text-gray-600">M.B.B.S., H.P.H.S, EX P.C.M.S</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "Our mission has always been to combine world-class technology with compassionate care. From our humble 
              beginnings to becoming a NABH accredited center, every innovation we've introduced has been guided by one 
              principle - how can we serve our patients better."
            </p>
            <p className="text-gray-700 leading-relaxed">
              "As we look to the future, we remain committed to our founding values while embracing new technologies that 
              enhance diagnostic accuracy and patient comfort."
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive <span className="text-blue-600">Diagnostic Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <FaFlask className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Hours */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <FaClock className="text-blue-600 mr-3" />
            Operational Hours
          </h2>
          <p className="text-xl text-gray-700 mb-2">8:00 AM to 8:00 PM</p>
          <p className="text-blue-600 font-medium">Emergency services available 24/7</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;