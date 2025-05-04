import React from 'react';
import { FaBrain, FaHeartbeat, FaUserShield, FaFlask, FaProcedures } from 'react-icons/fa';
import eegImage from '../../assets/service/EEG/image27.jpeg';  
import ecgImage from '../../assets/service/EEG/image28.jpeg';
import eegResult from '../../assets/service/EEG/image29.png';
import ecgResult from '../../assets/service/EEG/active-brain.webp';

const NeuroCardioServices = () => {
  const eegDetails = {
    description: "An EEG (electroencephalogram) detects abnormalities in your brain's electrical activity through small electrodes placed on your scalp. This non-invasive test records brain waves that help diagnose various neurological conditions.",
    uses: [
      "Epilepsy and seizure disorders",
      "Brain tumors or lesions",
      "Stroke evaluation",
      "Alzheimer's disease assessment",
      "Narcolepsy diagnosis",
      "Head injury evaluation",
      "Brain death determination",
      "Surgical monitoring"
    ],
    preparation: [
      "Wash hair with shampoo (no conditioner)",
      "Avoid hair products (gels, sprays)",
      "Limit caffeine 8-12 hours before",
      "Follow sleep restrictions if required",
      "Continue medications unless instructed otherwise",
      "Eat normally (no fasting)"
    ],
    procedure: [
      "16-25 electrodes attached to scalp",
      "30-90 minute recording session",
      "Resting state measurement",
      "Response to stimuli (lights, breathing)",
      "Possible sleep study component",
      "Ambulatory options for extended monitoring"
    ],
    risks: [
      "No electric shock risk",
      "Possible seizure in epilepsy patients (rare)",
      "Mild scalp irritation from electrodes"
    ]
  };

  const ecgDetails = {
    description: "An ECG (electrocardiogram) records the heart's electrical activity through electrodes placed on the chest and limbs. This fundamental cardiac test provides critical information about heart rhythm and function.",
    uses: [
      "Detect arrhythmias",
      "Identify heart attacks (past/present)",
      "Evaluate chest pain",
      "Assess medication effects",
      "Pre-surgical screening",
      "Monitor known heart conditions",
      "Sports physicals",
      "High-risk occupation screening"
    ],
    preparation: [
      "No special preparation needed",
      "Avoid heavy exercise before test",
      "Wear comfortable clothing",
      "Inform technician of medications",
      "Remove jewelry/metal objects"
    ],
    procedure: [
      "10 electrodes placed on chest/limbs",
      "5-10 minute procedure",
      "Multiple leads record heart activity",
      "Resting and possibly stress components",
      "Painless and non-invasive",
      "Results typically immediate"
    ],
    risks: [
      "No risks or side effects",
      "Mild skin irritation possible",
      "False positives/negatives possible"
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">EEG & ECG</span> Diagnostic Services
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive neurological and cardiac electrical activity monitoring using advanced digital technology
          </p>
        </div>

        {/* EEG Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaBrain className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Electroencephalogram (EEG)</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {eegDetails.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <FaProcedures className="mr-2" />
                  Common Uses
                </h3>
                <ul className="space-y-2">
                  {eegDetails.uses.map((use, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <FaUserShield className="mr-2" />
                  Preparation
                </h3>
                <ul className="space-y-2">
                  {eegDetails.preparation.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-800 mb-4">During the Procedure</h3>
              <ul className="space-y-3">
                {eegDetails.procedure.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Safety Information</h3>
              <ul className="space-y-2">
                {eegDetails.risks.map((risk, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <img src={eegImage} alt="EEG Procedure" className="w-full h-auto" />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3">Understanding Your Results</h3>
              <div className="flex items-start">
                <div className="w-1/3 pr-4">
                  <img src={eegResult} alt="EEG Results" className="rounded-lg" />
                </div>
                <div className="w-2/3">
                  <p className="text-gray-700 text-sm mb-2">
                    Our neurologists analyze approximately 100 pages of brain wave activity, looking for:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span>
                      <span>Basic waveform patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span>
                      <span>Abnormal spikes or slowing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span>
                      <span>Responses to stimuli</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">4</span>
                      <span>Sleep architecture (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ECG Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <img src={ecgImage} alt="ECG Procedure" className="w-full h-auto" />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3">ECG Interpretation</h3>
              <div className="flex items-start">
                <div className="w-1/3 pr-4">
                  <img src={ecgResult} alt="ECG Results" className="rounded-lg" />
                </div>
                <div className="w-2/3">
                  <p className="text-gray-700 text-sm mb-2">
                    Our cardiologists evaluate multiple aspects of your heart's electrical activity:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span>
                      <span>Heart rate and rhythm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span>
                      <span>Electrical conduction pathways</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span>
                      <span>Signs of ischemia or infarction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">4</span>
                      <span>Chamber enlargement patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaHeartbeat className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Electrocardiogram (ECG)</h2>
            </div>
            
            <div className="bg-white border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-red-800 mb-3">Historical Significance</h3>
              <p className="text-gray-700 mb-4">
                Invented by Dutch physician Willem Einthoven in 1902, ECG revolutionized cardiac care. 
                Einthoven received the 1924 Nobel Prize for this fundamental diagnostic tool now used 
                globally in nearly every healthcare setting.
              </p>
              <p className="text-gray-700">
                Modern ECG remains the gold standard for initial cardiac assessment, with applications 
                expanding into drug research and preventive screening.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-4 flex items-center">
                  <FaProcedures className="mr-2" />
                  Clinical Uses
                </h3>
                <ul className="space-y-2">
                  {ecgDetails.uses.map((use, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 text-red-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-4 flex items-center">
                  <FaUserShield className="mr-2" />
                  Procedure Details
                </h3>
                <ul className="space-y-2">
                  {ecgDetails.procedure.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 text-red-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-800 mb-3">Safety & Accuracy</h3>
              <ul className="space-y-2">
                {ecgDetails.risks.map((risk, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-red-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NeuroCardioServices;