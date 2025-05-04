import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebook } from "react-icons/fa";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const result = await response.json();
      if (result.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const contactItems = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="h-5 w-5" />,
      title: "Our Location",
      content: "421 Adarsh Nagar, Adjoining PNB Bank, Kapurthala Chowk, Jalandhar",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      icon: <FaPhone className="h-5 w-5" />,
      title: "Phone / WhatsApp",
      content: "+91 628027927\nMon-Fri: 9am-6pm",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 3,
      icon: <FaEnvelope className="h-5 w-5" />,
      title: "Email",
      content: "alfalab929@gmail.com",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      id: 4,
      icon: <FaClock className="h-5 w-5" />,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/alfaimaginganddiagnosticlab/",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      url: "https://www.facebook.com/alfaimagingdiagnosticlab",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <motion.h1
            className="text-5xl font-['Poppins'] font-bold text-[#1E3A8A] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact <span className="text-[#10B981]">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl font-['Inter'] text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Alfa Imaging Diagnostic Lab: Committed to Excellence in Imaging
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-[#10B981] mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Contact Information */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-100 rounded-full opacity-20" />

            <div className="relative z-10">
              <h2 className="text-2xl font-['Poppins'] font-semibold text-[#1E3A8A] mb-8 pb-2 border-b border-gray-200">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className={`flex items-start p-4 rounded-xl transition-all duration-300 ${
                      hoveredItem === item.id ? "bg-gray-50 shadow-md" : ""
                    }`}
                    variants={itemVariants}
                    whileHover="hover"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`flex-shrink-0 ${item.bgColor} p-3 rounded-full ${item.textColor}`}>
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-['Inter'] font-medium text-[#1E3A8A]">{item.title}</h3>
                      <p className="mt-1 text-gray-600 font-['Inter'] whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-['Inter'] font-medium text-[#1E3A8A] mb-4">Connect With Us</h3>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#1E3A8A] hover:bg-[#10B981] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="ml-4"
                  >
                    <img
                      src="/media/instagram-qr.jpg"
                      alt="Instagram QR Code"
                      className="w-24 h-24 rounded-lg shadow-md"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#10B981] rounded-full opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20" />

            <div className="relative z-10">
              <h2 className="text-2xl font-['Poppins'] font-semibold text-[#1E3A8A] mb-4">Send Us a Message</h2>
              <p className="text-gray-600 font-['Inter'] mb-8">
                Fill out the form below, and our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-['Inter'] font-medium text-[#1E3A8A] mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg shadow-sm focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all duration-200`}
                      placeholder="Your Name"
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      className="mt-2 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-['Inter'] font-medium text-[#1E3A8A] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg shadow-sm focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all duration-200`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      className="mt-2 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-['Inter'] font-medium text-[#1E3A8A] mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FaComment className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } rounded-lg shadow-sm focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all duration-200`}
                      placeholder="How can we assist you?"
                    ></textarea>
                  </div>
                  {errors.message && (
                    <motion.p
                      className="mt-2 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-white font-['Inter'] font-medium ${
                      isSubmitting
                        ? "bg-[#10B981] cursor-not-allowed opacity-70"
                        : "bg-gradient-to-r from-[#1E3A8A] to-[#10B981] hover:from-[#2B4CBA] hover:to-[#059669]"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981] transition-all duration-300`}
                    whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.3)" } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3" />
                        <span className="text-lg">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.661987120164!2d75.57316297550182!3d31.32614417430524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b6c4f6b3c6b%3A0x2a8f1e0c6b7c2f8a!2sAdarsh%20Nagar%2C%20Jalandhar%2C%20Punjab%20144008%2C%20India!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alfa Imaging Diagnostic Lab Location Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;