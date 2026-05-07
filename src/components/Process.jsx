import React from 'react';
import { motion } from 'motion/react';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Detailed evaluation of your condition, medical history, and clinical diagnosis."
    },
    {
      num: "02",
      title: "Plan Design",
      desc: "Creating a personalized treatment roadmap with specific short & long term goals."
    },
    {
      num: "03",
      title: "Therapy Sessions",
      desc: "Active participation in manual therapy, specialized exercises, and modalities."
    },
    {
      num: "04",
      title: "Recovery & Follow-up",
      desc: "Progress monitoring and maintenance programs to prevent future injury."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Care Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our systematic approach ensures that you get the most effective and safe treatment possible.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-3xl font-black text-[#0a7c6e] group-hover:bg-[#0a7c6e] group-hover:text-white transition-all duration-300">
                  {step.num}
                  {/* Decorative circle */}
                  <div className="absolute inset-0 rounded-full border border-gray-100 scale-125 opacity-20 group-hover:scale-150 group-hover:opacity-10 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
