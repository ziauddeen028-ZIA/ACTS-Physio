// FAQ.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does each physiotherapy session take?",
    answer:
      "Most sessions last between 30 to 60 minutes depending on the condition and treatment plan.",
  },
  {
    question: "Can physiotherapy help avoid surgery?",
    answer:
      "In many cases, physiotherapy can reduce pain and improve function enough to delay or avoid surgery.",
  },
  {
    question: "Do I need a doctor’s referral for physiotherapy?",
    answer:
      "No. You can directly visit a physiotherapist in most cases without a doctor’s referral.",
  },
  {
    question:
      "What is the difference between physiotherapy and chiropractic treatment?",
    answer:
      "Physiotherapy focuses on rehabilitation, movement, exercises, and pain management, while chiropractic care mainly focuses on spinal adjustments.",
  },
  {
    question: "Is physiotherapy painful?",
    answer:
      "Most treatments are gentle and safe. Some exercises or manual therapy may cause mild discomfort initially, but physiotherapy is designed to reduce pain and improve movement over time.",
  },
  {
    question:
      "Can physiotherapy help with posture and desk-job pain?",
    answer:
      "Absolutely. Physiotherapy is very effective for IT employee neck pain, lower back pain, poor posture, and repetitive strain injuries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-semibold mb-3">
            FAQs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left p-6"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-emerald-600" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}