import { FaCheckCircle, FaClock, FaUserMd, FaMicroscope, FaHandsHelping, FaGraduationCap, FaFileAlt, FaClinicMedical, FaBolt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
      title: "Fast & Accurate Results",
      description: "Advanced AI-assisted reporting with same-day results for critical tests."
    },
    {
      icon: <FaUserMd className="text-blue-600 text-3xl" />,
      title: "Experienced Doctor Team",
      description: "NABH-accredited radiologists with 15+ years of diagnostic expertise."
    },
    {
      icon: <FaMicroscope className="text-blue-600 text-3xl" />,
      title: "High-Tech Machines",
      description: "Jalandhar's first 50-slice CT scanner and 4D ultrasound technology."
    },
    {
      icon: <FaHandsHelping className="text-blue-600 text-3xl" />,
      title: "Personalized Service",
      description: "Dedicated care coordinators for each patient."
    },
    {
      icon: <FaGraduationCap className="text-blue-600 text-3xl" />,
      title: "Patient Education",
      description: "Detailed post-scan consultations in simple language."
    },
    {
      icon: <FaFileAlt className="text-blue-600 text-3xl" />,
      title: "Reliable Reporting",
      description: "Triple-checked reports with 99.8% accuracy rate."
    },
    {
      icon: <FaClinicMedical className="text-blue-600 text-3xl" />,
      title: "Safe & Hygienic Centre",
      description: "WHO-standard sterilization protocols between patients."
    },
    {
      icon: <FaBolt className="text-blue-600 text-3xl" />,
      title: "Advanced Imaging Techniques",
      description: "3D reconstructions, virtual colonoscopy, and Doppler studies."
    },
    {
      icon: <FaClock className="text-blue-600 text-3xl" />,
      title: "Reduced Waiting Time",
      description: "Staggered appointments with 95% on-time performance."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 px-4 py-1 rounded-full mb-4">
            <FaClinicMedical className="text-blue-600 mr-2" />
            <span className="font-medium text-blue-800">OUR ADVANTAGES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Patients Trust <span className="text-blue-600">Alfa Imaging</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining cutting-edge technology with compassionate care for precise diagnostics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-blue-100"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default WhyChooseUs;