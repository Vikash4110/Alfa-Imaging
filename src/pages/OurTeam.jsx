import React from 'react';
import { FaUserMd, FaXRay } from 'react-icons/fa';
import drArvind from '../assets/image1.png'; // Replace with actual images
import drMayank from '../assets/image1.png';
import teamMember from '../assets/image1.png';

const OurTeam = () => {
  const teamMembers = [
    {
      image: drArvind,
      name: "Dr. Arvind Gupta",
      position: "Managing Director",
      qualifications: "M.B.B.S., H.P.H.S, EX P.C.M.S"
    },
    {
      image: drMayank,
      name: "Dr. Mayank Gupta",
      position: "Consultant Radiologist",
      qualifications: "M.B.B.S, MD Radio-Diagnosis, SFM"
    },
    {
      image: teamMember,
      name: "Rahul Sharma",
      position: "Radiographer"
    },
    {
      image: teamMember,
      name: "Simran Kaur",
      position: "Front Desk Executive"
    },
    {
      image: teamMember,
      name: "Garima Singh",
      position: "IT & Front Desk"
    },
    {
      image: teamMember,
      name: "Malika Devi",
      position: "Housekeeping Supervisor"
    }
  ];

  const supportStaff = [
    { name: "Gurpreet Singh", position: "Public Relations Officer" },
    { name: "Simran Kaur", position: "Typist" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind Alfa Imaging & Diagnostic Lab
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.position}</p>
              {member.qualifications && (
                <p className="text-sm text-gray-600">{member.qualifications}</p>
              )}
            </div>
          ))}
        </div>

        {/* Support Staff Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Support Staff
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FaUserMd className="text-xl" />
                </div>
                <h4 className="font-medium text-gray-800">{staff.name}</h4>
                <p className="text-sm text-gray-600">{staff.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;