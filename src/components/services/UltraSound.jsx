// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBaby, FaHeartbeat, FaStethoscope, FaVials, FaClinicMedical, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Ultrasound = () => {
//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   };

//   // Image carousel state
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [
//     "/media/ultrasound1.jpg",
//     "/media/ultrasound2.jpg",
//     "/media/ultrasound3.jpg",
//     "/media/ultrasound4.jpg",
//     "/media/ultrasound5.jpg",
//     "/media/ultrasound6.jpg",
//     "/media/ultrasound7.jpg",
//   ];

//   const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
//   const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative bg-gradient-to-r from-[#1E3A8A] to-[#2B4CBA] text-white py-24"
//         data-aos="fade-up"
//       >
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-6xl font-['Poppins'] font-bold mb-4">
//             3D/4D Ultrasound Excellence
//           </h1>
//           <p className="text-xl font-['Inter'] mb-8 max-w-2xl mx-auto">
//             Discover High-Definition Imaging at Alfa Imaging & Diagnostic Labs
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-2xl"
//           >
//             <img
//               src="/media/ultrasound1.jpg"
//               alt="3D/4D Ultrasound"
//               className="w-full h-80 object-cover"
//             />
//             <div className="absolute inset-0 bg-black opacity-20"></div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Overview Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="py-20 bg-white"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center mb-8">
//             <FaStethoscope className="text-[#10B981] text-4xl mr-4" />
//             <h2 className="text-4xl font-['Poppins'] font-semibold text-[#1E3A8A]">
//               Pioneering 3D/4D Ultrasound
//             </h2>
//           </div>
//           <motion.div variants={cardVariants} className="bg-gray-50 p-8 rounded-xl shadow-lg">
//             <p className="text-gray-700 font-['Inter'] leading-relaxed mb-6">
//               Alfa Imaging & Diagnostic Labs leads the way in 3D/4D ultrasound, delivering live HD-quality imaging in a patient-friendly environment. Our advanced capabilities include routine and complex procedures such as FNACs, ultrasound-guided FNACs, and biopsies, performed across our state-of-the-art centers.
//             </p>
//             <p className="text-gray-700 font-['Inter'] leading-relaxed">
//               Ultrasound is the safest imaging method, using harmless high-frequency sound waves to visualize internal structures. It supports disease identification across multiple domains, imaging areas such as the pelvis, abdomen, musculoskeletal system, breast, male reproductive system, kidney, thyroid, salivary glands, gallbladder, pancreas, liver, neck, and developing fetus. In expert hands, ultrasound resolves most diagnostic queries with precision.
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Applications Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="py-20"
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center mb-8">
//             <FaVials className="text-[#10B981] text-4xl mr-4" />
//             <h2 className="text-4xl font-['Poppins'] font-semibold text-[#1E3A8A]">
//               General, Musculoskeletal, and Vascular Ultrasound
//             </h2>
//           </div>
//           <motion.div variants={cardVariants} className="bg-white p-8 rounded-xl shadow-lg">
//             <p className="text-gray-700 font-['Inter'] leading-relaxed mb-6">
//               Ultrasound is a non-invasive, radiation-free imaging technique ideal for examining internal body parts. It is used to visualize:
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 { icon: <FaHeartbeat className="text-[#10B981] text-2xl" />, text: "Blood Vessels" },
//                 { icon: <FaClinicMedical className="text-[#10B981] text-2xl" />, text: "Pelvis" },
//                 { icon: <FaHeartbeat className="text-[#10B981] text-2xl" />, text: "Heart" },
//                 { icon: <FaVials className="text-[#10B981] text-2xl" />, text: "Musculoskeletal System" },
//                 { icon: <FaClinicMedical className="text-[#10B981] text-2xl" />, text: "Abdomen" },
//                 { icon: <FaVials className="text-[#10B981] text-2xl" />, text: "Other Soft Tissue Organs" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center p-4 bg-gray-50 rounded-lg"
//                 >
//                   {item.icon}
//                   <span className="ml-3 text-gray-700 font-['Inter']">{item.text}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Pregnancy Ultrasound Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="py-20 bg-white"
//         data-aos="fade-up"
//         data-aos-delay="600"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center mb-8">
//             <FaBaby className="text-[#10B981] text-4xl mr-4" />
//             <h2 className="text-4xl font-['Poppins'] font-semibold text-[#1E3A8A]">
//               Pregnancy Ultrasound
//             </h2>
//           </div>
//           <motion.div variants={cardVariants} className="bg-gray-50 p-8 rounded-xl shadow-lg">
//             <p className="text-gray-700 font-['Inter'] leading-relaxed mb-6">
//               Ultrasound is an essential tool during pregnancy, offering safe imaging for both mother and baby. Its applications include:
//             </p>
//             <ul className="list-disc list-inside text-gray-700 font-['Inter'] mb-6">
//               <li>Dating purposes and accurately determining your due date</li>
//               <li>Ascertaining the number of babies present</li>
//               <li>Checking for bleeding early in the pregnancy</li>
//               <li>Checking the position of the placenta</li>
//               <li>Assessing the growth and general well-being of the baby</li>
//               <li>Providing information about the baby’s anatomy and checking for possible abnormalities</li>
//             </ul>
//             <p className="text-gray-700 font-['Inter'] leading-relaxed mb-4">
//               <strong>Note:</strong> Not all birth abnormalities can be reliably diagnosed using ultrasound, and results should be interpreted within the test’s limitations.
//             </p>
//             <div className="bg-red-100 p-6 rounded-lg">
//               <p className="text-red-600 font-['Inter'] font-semibold">
//                 <strong>Legal Notice:</strong> According to the PC-PNDT Act, performing a pregnancy ultrasound without a valid prescription and the doctor’s PMC/DMC/MCI registration number, phone number, and other details is prohibited.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Colour Doppler Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="py-20"
//         data-aos="fade-up"
//         data-aos-delay="800"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center mb-8">
//             <FaHeartbeat className="text-[#10B981] text-4xl mr-4" />
//             <h2 className="text-4xl font-['Poppins'] font-semibold text-[#1E3A8A]">
//               Colour Doppler & Duplex Ultrasound
//             </h2>
//           </div>
//           <motion.div variants={cardVariants} className="bg-white p-8 rounded-xl shadow-lg">
//             <p className="text-gray-700 font-['Inter'] leading-relaxed mb-6">
//               Colour Doppler is an advanced imaging technique that visualizes blood flow by adding color to ultrasound images, enabling doctors to monitor blood movement. Duplex ultrasound combines traditional ultrasound with Doppler ultrasonography to assess blood flow in arteries and veins.
//             </p>
//             <h3 className="text-2xl font-['Poppins'] font-semibold text-[#1E3A8A] mb-4">
//               Types of Duplex Ultrasound
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 font-['Inter'] mb-6">
//               <li><strong>Arterial and Venous Duplex Ultrasound:</strong> Examines blood vessels and blood flow in the abdominal area.</li>
//               <li><strong>Carotid Duplex Ultrasound:</strong> Assesses the carotid artery in the neck.</li>
//               <li><strong>Duplex Ultrasound of Extremities:</strong> Evaluates blood flow in the arms or legs.</li>
//               <li><strong>Renal Duplex Ultrasound:</strong> Examines the kidneys.</li>
//             </ul>
//             <h3 className="text-2xl font-['Poppins'] font-semibold text-[#1E3A8A] mb-4">
//               Why It’s Done
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 font-['Inter'] mb-6">
//               <li>Detect blood clots and blocked or narrowed blood vessels in the neck, arms, and legs.</li>
//               <li>Evaluate abnormal veins causing varicose veins or other issues.</li>
//               <li>Measure blood flow to a transplanted kidney or liver.</li>
//               <li>Monitor blood flow following blood vessel surgery.</li>
//             </ul>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Image Carousel Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="py-20 bg-white"
//         data-aos="fade-up"
//         data-aos-delay="1000"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-['Poppins'] font-semibold text-[#1E3A8A] text-center mb-12">
//             Our Advanced Ultrasound Technology
//           </h2>
//           <div className="relative max-w-4xl mx-auto">
//             <motion.div
//               key={currentImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="rounded-xl overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={images[currentImage]}
//                 alt={`Ultrasound Image ${currentImage + 1}`}
//                 className="w-full h-96 object-cover"
//               />
//             </motion.div>
//             <button
//               onClick={prevImage}
//               className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#10B981] text-white p-3 rounded-full hover:bg-[#059669] transition-colors duration-300"
//             >
//               <FaChevronLeft />
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#10B981] text-white p-3 rounded-full hover:bg-[#059669] transition-colors duration-300"
//             >
//               <FaChevronRight />
//             </button>
//             <div className="flex justify-center mt-4 space-x-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImage(index)}
//                   className={`w-3 h-3 rounded-full ${currentImage === index ? "bg-[#10B981]" : "bg-gray-300"}`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         animate="visible"
//         className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#2B4CBA] text-white text-center"
//         data-aos="fade-up"
//         data-aos-delay="1200"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-['Poppins'] font-semibold mb-6">
//             Experience the Future of Ultrasound
//           </h2>
//           <p className="text-lg font-['Inter'] mb-8 max-w-2xl mx-auto">
//             Schedule your appointment with Alfa Imaging & Diagnostic Labs for world-class 3D/4D ultrasound services.
//           </p>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Link
//               to="/book-appointment"
//               className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-4 rounded-full font-['Inter'] font-medium text-lg transition-colors duration-300"
//             >
//               Book Appointment
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Ultrasound;

import React from 'react';
import { FaCheckCircle, FaBaby, FaHeartbeat, FaClinicMedical, FaUserShield } from 'react-icons/fa';
import ultrasound1 from "../../assets/image2.jpeg"; // Replace with your images
import ultrasound2 from '../../assets/service/ultrasound/image3.jpeg';
import ultrasound3 from '../../assets/service/ultrasound/image4.jpeg';
import ultrasound4 from '../../assets/service/ultrasound/image5.jpeg';
import ultrasound5 from '../../assets/service/ultrasound/image6.jpeg';
import ultrasound6 from '../../assets/service/ultrasound/image8.jpeg';

const Ultrasound3D4D = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-blue-600" />,
      title: "HD Live Quality",
      description: "Crystal clear imaging with advanced 3D/4D technology"
    },
    {
      icon: <FaUserShield className="text-blue-600" />,
      title: "Safe Procedure",
      description: "No radiation - uses harmless sound waves"
    },
    {
      icon: <FaBaby className="text-blue-600" />,
      title: "Pregnancy Imaging",
      description: "Detailed fetal anatomy visualization"
    },
    {
      icon: <FaHeartbeat className="text-blue-600" />,
      title: "Vascular Studies",
      description: "Color Doppler for blood flow analysis"
    }
  ];

  const pregnancyUses = [
    "Dating and accurate due date determination",
    "Checking number of babies present",
    "Assessing early pregnancy bleeding",
    "Placenta position evaluation",
    "Fetal growth monitoring",
    "Anatomy and possible abnormality screening"
  ];

  const bodyAreas = [
    "Pelvis and abdomen",
    "Musculoskeletal system",
    "Breast tissue",
    "Male reproductive system",
    "Kidneys and thyroid",
    "Gallbladder and pancreas",
    "Liver and neck"
  ];

  const dopplerTypes = [
    {
      name: "Abdominal Doppler",
      description: "Examines blood vessels and flow in abdominal area"
    },
    {
      name: "Carotid Doppler",
      description: "Evaluates carotid artery in the neck"
    },
    {
      name: "Extremities Doppler",
      description: "Assesses arms and legs circulation"
    },
    {
      name: "Renal Doppler",
      description: "Examines kidney blood flow"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">3D/4D Ultrasound</span> Services
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Alfa Imaging & Diagnostic Labs is the leader in 3D/4D ultrasound technology in Jalandhar, offering 
              HD live quality imaging in a patient-friendly environment. Our advanced systems provide unparalleled 
              clarity for both routine and complex diagnostic studies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <FaClinicMedical className="text-blue-600 mr-2" />
                <span className="font-medium">NABH Accredited</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <FaUserShield className="text-blue-600 mr-2" />
                <span className="font-medium">PC-PNDT Compliant</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <img 
              src={ultrasound1} 
              alt="3D/4D Ultrasound at Alfa Imaging" 
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

        {/* Ultrasound Details */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">3D/4D Ultrasound</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ultrasound is the safest way to visualize internal body structures, using high-frequency sound waves 
              that are completely harmless. Our cutting-edge 3D/4D technology provides exceptional imaging quality 
              for accurate diagnosis across multiple medical specialties.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We perform all routine and complex studies including FNACs, ultrasound-guided biopsies, and specialized 
              examinations in our comfortable, patient-friendly environment.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3">Important Note:</h3>
              <p className="text-gray-700">
                According to the PC-PNDT Act, performing pregnancy ultrasound without a valid prescription and 
                doctor's PMC/DMC/MCI registration details is prohibited. We strictly comply with all regulations.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src={ultrasound2} alt="Ultrasound procedure" className="rounded-lg shadow-md" />
            <img src={ultrasound3} alt="3D ultrasound image" className="rounded-lg shadow-md" />
            <img src={ultrasound4} alt="Ultrasound machine" className="rounded-lg shadow-md" />
            <img src={ultrasound5} alt="Doppler ultrasound" className="rounded-lg shadow-md" />
          </div>
        </div>

        {/* Body Areas Section */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Areas We Examine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {bodyAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pregnancy Ultrasound */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <img src={ultrasound6} alt="Pregnancy ultrasound" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Pregnancy</span> Ultrasound
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ultrasound is particularly valuable during pregnancy as it's completely safe for both mother and baby. 
              Our 3D/4D imaging provides detailed visualization of fetal development and well-being.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Common Uses:</h3>
            <ul className="space-y-3">
              {pregnancyUses.map((use, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{use}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                *Note: While ultrasound is excellent for detecting many fetal abnormalities, not all possible 
                birth abnormalities can be reliably diagnosed. All results should be interpreted within the 
                test's limitations by our qualified radiologists.
              </p>
            </div>
          </div>
        </div>

        {/* Color Doppler Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-blue-600">Color Doppler</span> Ultrasound
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            Our advanced Color Doppler technology visualizes blood flow using color processing, helping doctors 
            assess vascular conditions with exceptional clarity. This combines traditional ultrasound with Doppler 
            ultrasonography for comprehensive evaluation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {dopplerTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">{type.name}</h3>
                <p className="text-gray-700">{type.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why It's Done</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <li className="flex items-start bg-white p-4 rounded-lg">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Detect blood clots and blocked/narrowed vessels</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Evaluate varicose veins and vascular problems</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Monitor blood flow to transplanted organs</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Assess post-surgical vascular flow</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Ultrasound Today</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Experience Jalandhar's most advanced 3D/4D and Doppler ultrasound services
          </p>
          <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ultrasound3D4D;