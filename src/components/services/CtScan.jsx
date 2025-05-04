import React from 'react';
import { FaClinicMedical, FaHeartbeat, FaLungs, FaProcedures, FaShieldAlt } from 'react-icons/fa';
import ctScan1 from '../../assets/service/CTScan/image10.jpeg'; // Replace with your images
import ctScan2 from '../../assets/service/CTScan/image11.jpeg';
import ctScan3 from '../../assets/service/CTScan/image12.jpeg';
import ctScan4 from '../../assets/service/CTScan/image13.jpeg';
import injector1 from '../../assets/service/CTScan/image14.jpeg';
import injector2 from '../../assets/service/CTScan/image14.jpeg';

const CTScanAngiography = () => {
  const features = [
    {
      icon: <FaClinicMedical className="text-blue-600 text-2xl" />,
      title: "50-Slice CT Scanner",
      description: "Ultra-thin 0.625mm slices for unparalleled detail"
    },
    {
      icon: <FaHeartbeat className="text-blue-600 text-2xl" />,
      title: "Advanced Angiography",
      description: "Pulmonary, brain, and vascular studies"
    },
    {
      icon: <FaLungs className="text-blue-600 text-2xl" />,
      title: "Virtual Procedures",
      description: "Colonoscopy & bronchoscopy without scopes"
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Pressure Injector",
      description: "Precision contrast delivery for enhanced imaging"
    }
  ];

  const angiographyTypes = [
    {
      name: "Pulmonary Angiogram",
      description: "Detailed imaging of lung blood vessels"
    },
    {
      name: "Brain Angiogram",
      description: "Visualization of cerebral circulation"
    },
    {
      name: "Peripheral Angiography",
      description: "Assessment of arm/leg blood vessels"
    },
    {
      name: "Coronary CT Angiography",
      description: "Non-invasive heart artery evaluation"
    }
  ];

  const virtualProcedures = [
    {
      name: "Virtual Colonoscopy",
      purpose: "Screening for polyps and colorectal cancer",
      benefits: [
        "No scope insertion required",
        "Complete colon visualization",
        "Ideal for screening and follow-up"
      ],
      prep: "Bowel preparation needed"
    },
    {
      name: "Virtual Bronchoscopy",
      purpose: "Evaluation of trachea and bronchial tree",
      benefits: [
        "Non-invasive airway assessment",
        "Identifies strictures and abnormalities",
        "Guides biopsy planning"
      ],
      prep: "No special preparation"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">50-Slice CT Scan</span> & Angiography
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Alfa Imaging & Diagnostic Labs pioneered advanced 50-slice CT technology in the region, offering 
              high-precision 3D reconstruction and isometric imaging for comprehensive diagnosis. Our cutting-edge 
              scanners deliver exceptional clarity at routine CT scan prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <FaShieldAlt className="text-blue-600 mr-2" />
                <span className="font-medium">NABH Accredited</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <FaClinicMedical className="text-blue-600 mr-2" />
                <span className="font-medium">3D Reconstruction</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <img 
              src={ctScan1} 
              alt="50-Slice CT Scanner at Alfa Imaging" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CT Technology Details */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Advanced CT</span> Technology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our 50-slice CT scanner provides ultra-thin 0.625mm slices with volume acquisition and isometric 
              reconstruction in any plane. This revolutionary technology enables:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">True-match imaging for precise diagnostics</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Whole-body scanning capabilities</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Reduced radiation exposure</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Despite these advanced capabilities, patients pay standard CT scan rates, making high-quality diagnostics 
              accessible to all.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src={ctScan2} alt="CT Scanner" className="rounded-lg shadow-md" />
            <img src={ctScan3} alt="CT Scan image" className="rounded-lg shadow-md" />
            <img src={ctScan4} alt="CT Angiography" className="rounded-lg shadow-md" />
            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center">
              <p className="text-center text-blue-800 font-medium">50-Slice Precision Imaging</p>
            </div>
          </div>
        </div>

        {/* Angiography Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="text-blue-600">Angiography</span> Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {angiographyTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">{type.name}</h3>
                <p className="text-gray-700 mb-4">{type.description}</p>
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  Learn more →
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">About Contrast Injectors</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our pressure injectors deliver contrast media at precisely controlled rates and pressures, 
                  significantly enhancing tissue and lesion visibility during CT angiography.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Critical for cancer patient imaging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Also used for IV therapy and blood sampling</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img src={injector1} alt="Pressure injector" className="rounded-lg" />
                <img src={injector2} alt="Contrast media injector" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Procedures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="text-blue-600">Virtual</span> Procedures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {virtualProcedures.map((procedure, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{procedure.name}</h3>
                <p className="text-gray-700 mb-4 font-medium">{procedure.purpose}</p>
                
                <h4 className="font-bold text-gray-800 mb-2">Benefits:</h4>
                <ul className="space-y-2 mb-4">
                  {procedure.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-1">Preparation:</h4>
                  <p className="text-gray-700">{procedure.prep}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Experience Advanced CT Imaging</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Schedule your scan with Jalandhar's premier diagnostic center
          </p>
          <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
            Book Your CT Scan
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTScanAngiography;