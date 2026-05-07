import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: <Shield size={24} />, text: "Certified Expert" },
    { icon: <Clock size={24} />, text: "Flexible Timing" },
    { icon: <Award size={24} />, text: "Personalized Care" },
    { icon: <Users size={24} />, text: "1000+ Recovered" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg"
          >
            <div className="text-[#0a7c6e] bg-[#0a7c6e]/10 p-2 rounded-xl">
              {item.icon}
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
