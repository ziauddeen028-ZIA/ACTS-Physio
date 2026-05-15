import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [showAll, setShowAll] = React.useState(false);

  const testimonials = [
    {
      name: "Neelkanth Khandal",
      role: "Patient",
      text: "Very good dr. Very polite humble and knowledgeable person working on your root causes to heal problem permanently. Very neat and clean clinic. Very good experience 🙏",
      rating: 5
    },
    {
      name: "Revathi Govindaraj",
      role: "Patient",
      text: "My husband had a knee replacement surgery recently. After the physiotherapy sessions by Selvaraj he is completely alright now. He was always on time and provided excellent service. Thank you very much sir.",
      rating: 5
    },
    {
      name: "Anand S",
      role: "Patient",
      text: "I went to him for my knee injury and tennis elbow pain. He diagnosed the problem correctly and provided treatment accordingly. He is excellent, and I highly recommend him.",
      rating: 5
    },
    {
      name: "Vinu Rajesh",
      role: "Patient",
      text: "ACTS centre is a magic I can say, my daughter was in a intense pain just two days before she could fly out, we were all under stress, how she can do, but 3 days continuous therapy by Dr. Selvaraj, she was back to normal and decided to fly back 22 hours to her destination. Always grateful to ACTS.",
      rating: 5
    },
    {
      name: "Niagha Rajesh",
      role: "Patient",
      text: "Very professional and thorough. Selvaraj gives you this full attention and is genuinely interested in your betterment. It is evident from his commitment to the therapy and also from the progress I've made just from 3 days of receiving treatment from him. Highly recommend ACTS physiotherapy.",
      rating: 5
    },
    {
      name: "Prerna Pradhan",
      role: "Patient",
      text: "The physiotherapist treated my mom like family. The dedication, care, and positive attitude made a big difference in her healing. We truly appreciate all the support and would definitely recommend to anyone looking for good physiotherapy care. Thankyou so much sir!",
      rating: 5
    },
    {
      name: "Venkataraman Sankaranarayanan",
      role: "Patient",
      text: "Mr. Selvaraj is very experienced and knowledgeable physiotherapist. Patient gets the result day-by-day and gains confidence. Fully satisfied.",
      rating: 5
    },
    {
      name: "Ravi Kannan",
      role: "Patient",
      text: "I recently visited ACTS Physiotherapy clinic for a left-hand wrist pain, and the treatment was outstanding. He was professional, caring, and explained everything clearly. My pain reduced quickly, and I regained strength faster than expected. Also sent me exercises to follow at home and provided detailed step-by-step guidance. I highly recommend ACTS Physiotherapy Clinic to anyone looking for genuine, skilled, and compassionate physiotherapy care.",
      rating: 5
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-50 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
        <Quote size={200} className="text-[#0a7c6e]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from real patients who have regained their mobility
            and joy through our care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? testimonials : testimonials.slice(0, 3)).map(
            (t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-lg relative h-full flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow">
                  "{t.text}"
                </p>

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
            )
          )}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-[#0a7c6e] text-white rounded-full font-semibold hover:bg-[#08695d] transition-all duration-300"
          >
            {showAll ? "Show Less" : "View More Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;