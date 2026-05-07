import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Home } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Have questions about your condition or want to book a home visit? Reach out to us. We're here to help you move better.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-[#0a7c6e]/10 rounded-2xl flex items-center justify-center text-[#0a7c6e] group-hover:bg-[#0a7c6e] group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600 font-medium">+91 9444950298</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Location</h4>
                  <p className="text-gray-600 font-medium">No. 32/A, Shop No. 1, Temple Town Road,</p>
                  <p className="text-gray-600 font-medium">Suburaya Nagar, Thiruneermalai, Chennai - 44</p>
                  <a
                    href="https://maps.app.goo.gl/R5yPEfzaFVPy7Wb66"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-accent font-body text-sm hover:underline hover:text-[#0a7c6e]"
                  >
                    Get Directions →
                  </a>
                  <p className="text-sm text-[#0a7c6e] font-semibold mt-1 flex items-center gap-1">
                    <Home size={14} /> Home Visits Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Working Hours</h4>
                  <p className="text-gray-600 font-medium">Mon - Sat: 9:30 AM - 1:00 PM | 4:00 PM - 8:00 PM</p>
                  <p className="text-gray-600 font-medium">Sunday: 4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919444950298"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-4 bg-green-500 text-white rounded-2xl font-bold shadow-lg shadow-green-200"
              >
                <MessageCircle size={24} /> WhatsApp Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={
                  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
                    ? "mailto:actsphysio@gmail.com"
                    : "https://mail.google.com/mail/?view=cm&fs=1&to=actsphysio@gmail.com"
                }
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 bg-gray-900 text-white rounded-2xl font-semibold text-sm sm:text-base shadow-lg shadow-gray-200"
              >
                <Mail size={20} />
                Email Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] sm:h-[450px] lg:h-[500px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Google Map Mock/Embed */}
            <iframe
              src="https://www.google.com/maps?q=ACTS+Physiotherapy+and+Rehabilitation+Centre&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay Glass Card */}
            <div className="absolute top-4 left-4 p-3 sm:p-4 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl max-w-[170px] sm:max-w-[200px]">
              <p className="text-xs font-bold text-[#0a7c6e] uppercase tracking-wider mb-1">Serving All Of</p>
              <h4 className="text-lg font-black text-gray-900">CHENNAI CITY</h4>
              <p className="text-[10px] text-gray-600 mt-2 font-medium">Doorstep home visit services for your convenience.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
