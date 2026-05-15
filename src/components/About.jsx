import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import doctor from './acts-doc.png';

const About = () => {
  const points = [
    "Fellowship in Neuro Rehabilitation",
    "Certified Dry Needling Specialist",
    "Expert in Musculoskeletal Cupping",
    "IASTM Certified Therapist",
    "Advanced Pain Management",
    "Home Physiotherapy Specialist"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square  rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img
                src={doctor}
                alt="Dr. D. Selvaraj"
                className="w-fit h-fit object-contain bg-white"

              />

            </div>
            {/* Glass decoration */}
            <div className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-48 sm:h-48 bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl shadow-xl z-10 flex items-center justify-center p-4 sm:p-6 text-center">
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-[#0a7c6e]">
                  20+
                </p>

                <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                  Years of Experience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0a7c6e] to-green-600 bg-clip-text text-transparent mb-6">
              About the Clinic & Doctor
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              ACTS Physiotherapy, led by <span className="text-[#0a7c6e] font-semibold">Dr. D. Selvaraj PT</span>, is dedicated to providing high-quality rehabilitation services in Chennai. We believe in the healing power of specialized physical therapy combined with a compassionate approach. Our clinic stands on the principle of <span className="italic">"We treat, God heals!"</span>, ensuring every patient receives the best care possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-green-500 bg-green-50 p-1 rounded-full">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="mt-10 p-6 bg-white border border-gray-100 rounded-3xl shadow-lg inline-block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#0a7c6e]/10 p-3 rounded-2xl text-[#0a7c6e]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Customized Home Programs</h4>
                  <p className="text-sm text-gray-500">We bring the clinic to your doorstep for maximum comfort.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
