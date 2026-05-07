import React from 'react';
import { motion } from 'motion/react';
import { Activity, Dumbbell, Zap, Heart, Brain, UserCheck } from 'lucide-react';


const Services = () => {
  const services = [
    {
      title: "Pain Management",
      desc: "Specialized non-invasive techniques to eliminate chronic and acute pain effectively.",
      icon: <Zap size={32} />
    },
    {
      title: "Post-Surgery Rehab",
      desc: "Comprehensive rehabilitation after TKR, THR, and other orthopedic surgeries.",
      icon: <UserCheck size={32} />
    },
    {
      title: "Neuro Rehabilitation",
      desc: "Fellowship-certified care for Stroke, Parkinson's, and Spinal Cord injuries.",
      icon: <Brain size={32} />
    },
    {
      title: "Sports Injury Rehab",
      desc: "Focused recovery programs for athletes to return to peak performance safely.",
      icon: <Dumbbell size={32} />
    },
    {
      title: "Manual Therapy",
      desc: "Hands-on techniques including IASTM, Myofascial Release, and Cupping.",
      icon: <Activity size={32} />
    },
    {
      title: "Home Physiotherapy",
      desc: "Bringing clinical expertise to your doorstep across Chennai for convenience.",
      icon: <Heart size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-50/50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight uppercase">Specializations</h2>
          <div className="w-20 h-1.5 bg-primary-green mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Personalized treatment plans designed for your specific recovery path, leveraging modern medical techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-lg hover:shadow-xl hover:shadow-primary-green/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-mint-green rounded-2xl flex items-center justify-center text-primary-green mb-6 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">
                {service.desc}
              </p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
