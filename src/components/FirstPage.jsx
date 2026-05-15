import { motion } from "framer-motion";
import logo from "./logo-acts.png";

const FirstPage = ({ setEnterWebsite }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fbf8] flex items-center justify-center px-5 sm:px-8 lg:px-10 py-16">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-white/40 blur-3xl" />

      <div className="absolute -bottom-32 -right-16 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full bg-emerald-300/30 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Card Left */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden xl:block absolute left-20 top-40"
      >
        <div className="backdrop-blur-xl rounded-3xl p-5 bg-white/60 border border-white/50 shadow-xl">
          <div className="text-4xl mb-2">🩺</div>

          <p className="text-sm font-semibold text-slate-700">
            Expert Care
          </p>
        </div>
      </motion.div>

      {/* Floating Card Right */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hidden xl:block absolute right-20 bottom-40"
      >
        <div className="backdrop-blur-xl rounded-3xl p-5 bg-white/60 border border-white/50 shadow-xl">
          <div className="text-4xl mb-2">💪</div>

          <p className="text-sm font-semibold text-slate-700">
            Pain Recovery
          </p>
        </div>
      </motion.div>

      {/* Floating Card Top Right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden xl:block absolute right-32 top-28"
      >
        <div className="backdrop-blur-xl rounded-3xl p-5 bg-white/60 border border-white/50 shadow-xl">
          <div className="text-4xl mb-2">🏃</div>

          <p className="text-sm font-semibold text-slate-700">
            Better Mobility
          </p>
        </div>
      </motion.div>

      {/* Floating Card Bottom Left */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden xl:block absolute left-28 bottom-32"
      >
        <div className="backdrop-blur-xl rounded-3xl p-5 bg-white/60 border border-white/50 shadow-xl">
          <div className="text-4xl mb-2">🦴</div>

          <p className="text-sm font-semibold text-slate-700">
            Joint Therapy
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl">

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          src={logo}
          alt="ACTS Logo"
          className="w-28 sm:w-36 mx-auto mb-6"
        />

        {/* Clinic Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl font-serif text-slate-800 mb-5"
        >
          ACTS Physiotherapy
        </motion.h2>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-sm mb-10"
        >
          <p className="text-emerald-700 tracking-[0.25em] text-xs sm:text-sm font-bold uppercase">
            We Treat, God Heals
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[3.8rem] sm:text-[5rem] lg:text-[7rem] leading-[0.92] font-semibold text-slate-900"
        >
          Heal
          <br />
          Recover
          <br />
          <span className="text-emerald-500 italic font-medium">
            Move Freely
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mt-8 text-lg sm:text-xl text-slate-600 leading-9"
        >
          Advanced physiotherapy care focused on pain relief,
          mobility restoration and long-term recovery.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5 mt-12"
        >

          <button
            onClick={() => setEnterWebsite(true)}
            className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-9 py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >
            Explore Website →
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FirstPage; 