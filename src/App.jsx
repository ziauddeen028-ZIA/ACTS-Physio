import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FirstPage from "./components/FirstPage";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [enterWebsite, setEnterWebsite] = useState(false);

  if (!enterWebsite) {
    return (
      <FirstPage setEnterWebsite={setEnterWebsite} />
    );
  }
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Navbar setEnterWebsite={setEnterWebsite} />
      
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
      <Footer />

      {/* Floating WhatsApp Button for quick access */}
      <a
        href="https://wa.me/919444950298"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp Us"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 md:w-8 md:h-8"
          fill="currentColor"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.86 9.86 0 0 0 4.8 1.22h.01c5.48 0 9.94-4.46 9.94-9.94 0-2.65-1.03-5.14-2.94-7.01ZM12.05 20.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.81.83-3.03-.2-.31a8.15 8.15 0 0 1-1.25-4.4c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.16 8.16Zm4.48-6.1c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.16.25-.65.82-.79.98-.15.17-.29.19-.54.06-.25-.12-1.03-.38-1.96-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.58c.12.17 1.75 2.67 4.24 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.17.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </a>
    </div>
  );
}
