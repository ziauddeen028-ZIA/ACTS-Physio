import React from 'react';
import { motion } from 'motion/react';
import { Award, UserCheck, HeartPulse, Building2 } from 'lucide-react';
import doctor from './acts image.png';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Holistic Treatment",
      desc: "We focus on the root cause rather than just symptoms for long-term health.",
      icon: <HeartPulse className="text-pink-500" />
    },
    {
      title: "Experienced Doctor",
      desc: "Dr. D. Selvaraj brings over a decade of clinical experience in therapy.",
      icon: <Award className="text-yellow-500" />
    },
    {
      title: "Patient-Centric",
      desc: "Each treatment plan is uniquely designed for the patient's lifestyle and goals.",
      icon: <UserCheck className="text-blue-500" />
    },
    {
      title: "Modern Facility",
      desc: "Our clinic is equipped with the latest tools and equipment for recovery.",
      icon: <Building2 className="text-teal-500" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-mint-green text-dark-green font-bold text-xs tracking-widest uppercase rounded-full mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900 leading-tight">
              We provide excellence <br />
              <span className="text-primary-green italic font-medium">in healthcare.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
              Our approach combines clinical expertise with a deep commitment to patient well-being, ensuring you return to your daily life faster and stronger.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-green">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">{reason.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative z-10 w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
               <img 
                src={doctor}
                alt="Clinic interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-green/5 mix-blend-overlay" />
            </div>
            {/* Success badge */}
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
