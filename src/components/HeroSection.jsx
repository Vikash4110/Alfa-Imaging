import { FaPhoneAlt, FaCalendarAlt, FaShieldAlt, FaClinicMedical } from "react-icons/fa";
import MainImage from '../assets/image2.jpeg'
import BackImg from '../assets/hands-unrecognizable-female-doctor-typing-keyboard-office.jpg'
import { Link} from 'react-router-dom'
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Background Pattern (Optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 ">
            <img src={BackImg} alt="" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-lg">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm mb-4">
                <FaShieldAlt className="text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">NABH Accredited Diagnostic Center</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Precision Diagnostics with <span className="text-blue-800">Compassionate Care</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-600 mb-8">
                Jalandhar's first ISO 9001-certified imaging lab with 50-slice CT, 4D ultrasound, 
                and advanced mammography for accurate, fast results.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition shadow-lg"
                >
                  <FaCalendarAlt className="mr-2" />
Contact Us                </Link>
               
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <FaClinicMedical className="text-blue-600 mr-2" />
                  <span className="text-sm text-gray-700">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">50+ Advanced Machines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Image */}
              <img 
                src={MainImage} 
                alt="Doctor using medical equipment"
                className="rounded-lg shadow-xl border-4 border-white transform rotate-1 hover:rotate-0 transition duration-300"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">35+</div>
                  <div className="text-xs text-gray-600">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;