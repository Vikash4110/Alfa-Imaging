import React from 'react';
import { FaClinicMedical, FaUserShield, FaProcedures, FaSearchPlus, FaCalendarAlt } from 'react-icons/fa';
import mammo1 from '../../assets/service/memograpy/image15.png'; // Replace with your images
import mammo2 from '../../assets/service/memograpy/image16.png';
import mammo3 from '../../assets/service/memograpy/image17.jpeg';
import mammo4 from '../../assets/service/memograpy/image18.jpeg';

const MammographyServices = () => {
  const features = [
    {
      icon: <FaSearchPlus className="text-pink-600 text-2xl" />,
      title: "Early Detection",
      description: "Identifies breast cancer at most treatable stages"
    },
    {
      icon: <FaUserShield className="text-pink-600 text-2xl" />,
      title: "Low Radiation",
      description: "Minimum dose with maximum diagnostic quality"
    },
    {
      icon: <FaProcedures className="text-pink-600 text-2xl" />,
      title: "Comfort Focused",
      description: "Padded surfaces and ergonomic positioning"
    },
    {
      icon: <FaClinicMedical className="text-pink-600 text-2xl" />,
      title: "3D Tomosynthesis",
      description: "Multi-layer imaging for improved accuracy"
    }
  ];

  const machineFeatures = [
    "Digital display of compression parameters",
    "Self-diagnostic interlocks for safety",
    "Anatomical Programming Radiography (APR)",
    "Automatic Exposure Control (AEC)",
    "Auto release of breast after exposure",
    "50μ resolution - world's best clarity",
    "Computer Aided Diagnosis (CAD) with AI"
  ];

  const biopsyTypes = [
    {
      name: "Ultrasound-Guided Core Biopsy",
      description: "Uses sound waves to locate abnormalities"
    },
    {
      name: "Stereotactic Biopsy",
      description: "Mammogram-guided precise tissue sampling"
    },
    {
      name: "FNAC (Fine Needle Aspiration)",
      description: "Minimally invasive for superficial masses"
    },
    {
      name: "CT-Guided Biopsy",
      description: "For deep-seated chest/abdominal lesions"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-pink-600">Breast Cancer Screening</span> & Diagnostics
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Alfa Imaging & Diagnostic Labs offers world-class Full Field Digital Mammography and 3D Tomosynthesis 
              using the Allengers MAM VENUS system, providing the most advanced breast imaging technology in the region.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                <FaClinicMedical className="text-pink-600 mr-2" />
                <span className="font-medium">3D Tomosynthesis</span>
              </div>
              <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                <FaUserShield className="text-pink-600 mr-2" />
                <span className="font-medium">CAD Technology</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <img 
              src={mammo1} 
              alt="Mammography at Alfa Imaging" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technology Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-pink-600">Allengers MAM VENUS</span> System
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our state-of-the-art mammography system combines GE's exclusive amorphous flat panel detector with 
              Direct Optical Switching technology for 50μ resolution - the highest currently available worldwide.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Special Features:</h3>
            <ul className="space-y-3 mb-6">
              {machineFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="font-bold text-pink-800 mb-3">Patient Comfort:</h3>
              <p className="text-gray-700">
                The AMULET system features arm-rests, chest padding and arm-pit padding for maximum comfort during 
                the procedure. Automatic compression control optimizes both image quality and patient comfort.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src={mammo2} alt="Mammography machine" className="rounded-lg shadow-md" />
            <img src={mammo3} alt="Mammography procedure" className="rounded-lg shadow-md" />
            <div className="bg-pink-50 p-4 rounded-lg flex flex-col items-center justify-center">
              <FaClinicMedical className="text-pink-600 text-4xl mb-3" />
              <p className="text-center text-pink-800 font-medium">Computer Aided Diagnosis (CAD)</p>
              <p className="text-center text-sm text-gray-600">AI-assisted detection for higher accuracy</p>
            </div>
            <img src={mammo4} alt="3D Tomosynthesis" className="rounded-lg shadow-md" />
          </div>
        </div>

        {/* Screening Recommendation */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-blue-600">Screening</span> Guidelines
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6 text-center leading-relaxed">
              At Alfa Imaging & Diagnostic Labs, we recommend annual mammography screenings for:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-600 font-bold text-xl">40+</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">All Women</h3>
                <p className="text-gray-600 text-sm">Beginning at age 40</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Yearly</h3>
                <p className="text-gray-600 text-sm">Or as recommended by your physician</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserShield className="text-pink-600 text-2xl" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">High Risk</h3>
                <p className="text-gray-600 text-sm">More frequent screening if indicated</p>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium text-center">
                Important: Mammography should be performed even when no lump is palpable, as early-stage cancers 
                may not be detectable by physical examination alone.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Tomosynthesis Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <img src={mammo4} alt="3D Tomosynthesis" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-pink-600">3D Tomosynthesis</span> Advantage
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This advanced technology acquires multiple thin slices of the breast tissue by moving the X-ray tube 
              in an arc, creating 3D images that significantly improve cancer detection rates compared to conventional 
              2D mammography.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Benefits:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Improved accuracy in dense breast tissue</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Reduced need for additional imaging</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Earlier detection of small lesions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Lower recall rates compared to 2D mammography</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Biopsy Services Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <span className="text-blue-600">Image-Guided</span> Biopsy Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {biopsyTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">{type.name}</h3>
                <p className="text-gray-700 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Minimally invasive outpatient procedure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Precise targeting with image guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reduced need for surgical biopsy</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Clip Placement</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  During breast biopsy procedures, a tiny marker clip may be placed at the biopsy site. This allows 
                  precise localization if surgical follow-up is needed, ensuring complete removal of the area in question.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The clip is made of surgical stainless steel or titanium and causes no discomfort or interference 
                  with future mammograms.
                </p>
              </div>
              <div className="md:w-1/3 bg-blue-50 rounded-lg flex items-center justify-center p-4">
                <FaProcedures className="text-blue-600 text-5xl" />
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default MammographyServices;