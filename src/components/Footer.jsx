import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0a7c6e] to-green-600 bg-clip-text text-transparent">
              ACTS <span className="font-light text-gray-900">Physiotherapy</span>
            </span>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Premium physical therapy services focused on restoration and quality of life. Experience clinical excellence at your doorstep.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0a7c6e] hover:border-[#0a7c6e] transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0a7c6e] hover:border-[#0a7c6e] transition-colors shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0a7c6e] hover:border-[#0a7c6e] transition-colors shadow-sm">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Orthopedic Rehab</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Neuro Rehabilitation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Geriatric Care</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Home Visits</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a7c6e] transition-colors">Sports Medicine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Appointment</h4>
            <p className="text-gray-500 mb-6">Call or WhatsApp to book your session today.</p>
            <a 
              href="tel:9444950298"
              className="block text-xl font-black text-[#0a7c6e] mb-2"
            >
              +91 9444950298
            </a>
            <p className="text-sm text-gray-400 italic">"We treat, God heals!"</p>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:row items-center justify-between gap-6 text-sm text-gray-400 text-center">
          <p>© 2024 ACTS Physiotherapy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> for your health
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
