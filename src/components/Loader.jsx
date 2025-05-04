import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaMicroscope } from "react-icons/fa";

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const iconVariants = {
    animate: (i) => ({
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut",
      },
    }),
  };

  const textVariants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const icons = [
    { icon: <FaStethoscope className="text-[#10B981] text-xl" />, delay: 0 },
    { icon: <FaHeartbeat className="text-[#1E3A8A] text-xl" />, delay: 0.3 },
    { icon: <FaMicroscope className="text-[#10B981] text-xl" />, delay: 0.6 },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-gray-50 bg-opacity-90 flex flex-col items-center justify-center z-50 backdrop-blur-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative w-40 h-40 mb-8">
        {/* Central logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-['Poppins'] font-bold">AI</span>
          </div>
        </motion.div>

        {/* Orbiting icons */}
        <motion.div
          className="absolute inset-0"
          variants={orbitVariants}
          animate="animate"
        >
          {icons.map((item, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
              style={{
                top: "50%",
                left: i * 33.33 + "%",
                transform: "translate(-50%, -50%)",
                originX: `${(50 - i * 33.33) / 33.33}px`,
              }}
              custom={i}
              variants={iconVariants}
              animate="animate"
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Text animation */}
      <motion.div
        className="text-center"
        variants={textVariants}
        animate="animate"
      >
        <h2 className="text-3xl font-['Poppins'] font-bold bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">
          Alfa Imaging
        </h2>
        <motion.p
          className="text-gray-600 font-['Inter'] mt-2 text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          Committed to Excellence in Imaging
        </motion.p>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="mt-8 h-1 w-48 bg-gray-200 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{
          width: "12rem",
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#1E3A8A] to-[#10B981]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;