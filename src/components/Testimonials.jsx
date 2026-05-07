import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "IT Professional",
      text: "Dr. Selvaraj visited my home for post-TKR rehab. His patience and expertise helped me walk within weeks. Highly recommended for home visits!",
      rating: 5
    },
    {
      name: "Shanthi Devi",
      role: "Retired Teacher",
      text: "Excellent treatment for my chronic back pain. The exercises are simple yet very effective. The clinic is very clean and professional.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Athlete",
      text: "The best sports injury rehab in Chennai. Got back to the field much faster than expected. The manual therapy techniques are top-notch.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
        <Quote size={200} className="text-[#0a7c6e]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from real patients who have regained their mobility and joy through our care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-[2rem] shadow-lg relative h-full flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow">"{t.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0a7c6e] to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
