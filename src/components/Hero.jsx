import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import doc from './doc.png';
import acts from './acts.png';
import { Phone, Calendar, ArrowRight, Shield, Activity, Users, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-x-hidden"
    >
      {/* Background Decorative Elements */}

      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-20">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt="Physiotherapy"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            {/* Soft Medical Overlay */}
            <div className="absolute inset-0 bg-white/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
          </div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-6 lg:py-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint-green/50 border border-primary-green/10 rounded-full text-dark-green font-semibold text-xs tracking-wider mb-8">
              <Activity size={14} /> CERTIFIED REHABILITATION CENTRE
            </div>

            <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Modern Physiotherapy <br />
              <span className="text-primary-green italic font-medium">for Pain-Free Living</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
              Experience advanced, personalized care focused on movement, recovery, and long-term performance. Expert therapy led by <span className="text-gray-900 font-semibold">Dr. D. Selvaraj PT</span>.
            </p>

            <ul className="space-y-4 mb-12">
              {['Home Visits in Chennai', 'Specialized Neuro Rehab', 'Manual Therapy Techniques'].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 font-medium">
                  <CheckCircle2 size={18} className="text-primary-green" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919444950298"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-green text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-green/20 hover:bg-dark-green transition-all"
              >
                Book Appointment <ArrowRight size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:9444950298"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-gray-800 border border-gray-200 rounded-2xl font-bold text-lg shadow-sm hover:border-primary-green/30 transition-all"
              >
                <Phone size={20} /> Call Now
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Patient" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg leading-none">1000+</p>
                <p className="text-gray-500 text-sm font-medium">Happy Patients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img
                src={acts}
                alt="Dr. D. Selvaraj"
                className="w-full object-cover aspect-[4/5] lg:aspect-[4/5]"
              />

              {/* Floating Card */}
            </div>

            {/* Decorative blobs */}
            <div className="hidden lg:block absolute -top-10 -right-10 w-40 h-40 bg-primary-green/10 rounded-full blur-2xl -z-10" />

            <div className="hidden lg:block absolute -bottom-10 -left-10 w-60 h-60 bg-mint-green/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
