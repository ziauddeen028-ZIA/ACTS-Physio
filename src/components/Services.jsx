import React from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Dumbbell,
  Zap,
  Heart,
  Brain,
  UserCheck,
  Bone,
  Footprints,
  ShieldPlus,
  Accessibility,
  Hand,
  Waves
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Knee Pain",
      desc: "Targeted physiotherapy for knee pain, arthritis, ligament strain, and movement recovery.",
      tag: "Lower Limb",
      icon: <Footprints size={32} />
    },
    {
      title: "Low Back Pain",
      desc: "Advanced therapy for lumbar pain, stiffness, posture correction, and spinal stability.",
      tag: "Spine",
      icon: <Bone size={32} />
    },
    {
      title: "Shoulder Pain",
      desc: "Personalized rehab for shoulder stiffness and mobility restoration.",
      tag: "Upper Limb",
      icon: <Accessibility size={32} />
    },
    {
      title: "Neck Pain",
      desc: "Manual therapy and exercises for cervical pain and posture improvement.",
      tag: "Spine",
      icon: <Activity size={32} />
    },
    {
      title: "Hip & Knee Rehab",
      desc: "Comprehensive rehabilitation after hip or knee injuries and surgeries.",
      tag: "Rehab",
      icon: <UserCheck size={32} />
    },
    {
      title: "Fracture Rehabilitation",
      desc: "Structured recovery programs to restore strength and mobility after fractures.",
      tag: "Ortho",
      icon: <ShieldPlus size={32} />
    },
    {
      title: "Disc Bulge",
      desc: "Evidence-based treatment for disc bulge, herniation, and nerve compression symptoms.",
      tag: "Spine",
      icon: <Bone size={32} />
    },
    {
      title: "Stroke Rehab",
      desc: "Neurological rehabilitation to improve balance, movement, and independence.",
      tag: "Neuro",
      icon: <Brain size={32} />
    },
    {
      title: "Parkinson’s Care",
      desc: "Focused physiotherapy to improve coordination and daily functional activities.",
      tag: "Neuro",
      icon: <Heart size={32} />
    },
    {
      title: "Spinal Cord Injury Rehab",
      desc: "Progressive therapy programs for mobility, strength, and functional recovery.",
      tag: "Neuro",
      icon: <ShieldPlus size={32} />
    },
    {
      title: "Bell’s Palsy",
      desc: "Facial muscle stimulation and therapy for improved nerve recovery.",
      tag: "Neuro",
      icon: <Heart size={32} />
    },
    {
      title: "Chest Physiotherapy",
      desc: "Breathing exercises and airway clearance techniques for respiratory care.",
      tag: "Respiratory",
      icon: <Waves size={32} />
    },
    {
      title: "Balance Training",
      desc: "Fall-prevention and balance improvement programs for elderly and neuro patients.",
      tag: "Balance",
      icon: <UserCheck size={32} />
    },
    {
      title: "Joint Stiffness Care",
      desc: "Mobility-focused treatment to reduce stiffness and restore flexibility.",
      tag: "Mobility",
      icon: <Activity size={32} />
    },
    {
      title: "Ligament & Muscle Injury",
      desc: "Sports rehab for ligament tears, muscle strains, and pain relief.",
      tag: "Sports Rehab",
      icon: <Dumbbell size={32} />
    },
    {
      title: "Varicose Veins Care",
      desc: "Supportive therapy and exercises to improve circulation and leg comfort.",
      tag: "Vascular",
      icon: <Heart size={32} />
    },
    {
      title: "Foot & Ankle Pain",
      desc: "Specialized rehab for heel pain, ankle instability, and plantar fasciitis.",
      tag: "Lower Limb",
      icon: <Footprints size={32} />
    },
  ]


  const specialServices = [
    {
      title: "Dry Needling & Cupping",
      desc: "Advanced pain relief techniques for muscle tightness, trigger points, and faster recovery.",
      tag: "Therapy",
      icon: <Zap size={32} />
    },
    {
      title: "Myofascial Release",
      desc: "Hands-on soft tissue therapy to improve mobility and reduce muscular pain.",
      tag: "Manual Therapy",
      icon: <Hand size={32} />
    },
    {
      title: "Trigger Point Release",
      desc: "Focused therapy to relieve chronic muscle knots, tension, and referred pain.",
      tag: "Pain Relief",
      icon: <Activity size={32} />
    },
    {
      title: "Joint Mobilisation",
      desc: "Gentle mobilisation techniques to restore joint flexibility and movement.",
      tag: "Mobility",
      icon: <Accessibility size={32} />
    },
    {
      title: "Electrotherapy Modalities",
      desc: "Modern electrotherapy treatments for pain management and tissue healing.",
      tag: "Modalities",
      icon: <Zap size={32} />
    },
    {
      title: "Sports Taping & Massage",
      desc: "Supportive taping and therapeutic massage for injury recovery and performance.",
      tag: "Sports Rehab",
      icon: <Dumbbell size={32} />
    },
    {
      title: "Manual Therapy",
      desc: "Specialized hands-on physiotherapy techniques for pain reduction and mobility restoration.",
      tag: "Therapy",
      icon: <Hand size={32} />
    }
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-gray-50/50"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight uppercase">
            Our Services
          </h2>

          <div className="w-20 h-1.5 bg-primary-green mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive physiotherapy treatments designed to restore movement,
            reduce pain, and improve your quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-lg hover:shadow-xl hover:shadow-primary-green/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-mint-green rounded-2xl flex items-center justify-center text-primary-green">
                  {service.icon}
                </div>

                <span className="px-4 py-2 text-sm rounded-full bg-gray-100 text-primary-green font-medium">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
<br />
<br />
<br />
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight uppercase">
          Our Special Services
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-lg hover:shadow-xl hover:shadow-primary-green/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-mint-green rounded-2xl flex items-center justify-center text-primary-green">
                  {service.icon}
                </div>

                <span className="px-4 py-2 text-sm rounded-full bg-gray-100 text-primary-green font-medium">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
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