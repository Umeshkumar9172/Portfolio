import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';

const experienceData = [
  {
    role: 'AWS Gen AI VIRTUAL INTERNSHIP',
    company: 'Eduskills',
    duration: 'APR 2026 - Present',
    description: 'Currently undergoing the Advanced Robotics Using AI and IoT Internship, developing intelligent robotic systems using AI and IoT with focus on sensor integration, remote control, and image processing.',
  },
  {
    role: 'AI-Powered Cloud Engineer Virtual Internship',
    company: 'Eduskills',
    duration: 'JAN 2026 - MAR 2026',
    description: 'Completed the AI-Powered Cloud Engineer Virtual Internship, gaining hands-on experience in building and deploying AI/ML solutions on Amazon Web Services using cloud storage and intelligent services.',
  },
  {
    role: 'Google AIML VIRTUAL INTERNSHIP',
    company: 'Eduskills',
    duration: 'OCT 2025 - DEC 2025',
    description: 'Gained practical experience in artificial intelligence and machine learning, covering concepts from fundamentals to advanced applications using Python and TensorFlow.',
  },
];

const educationData = [
  {
    role: 'B.Tech in Computer Science',
    company: 'Galgotias University',
    duration: '2024 - 2027',
    description: 'Specialized in Artificial Intelligence and Data Science.',
  },
];

const TimelineCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col items-center justify-center md:flex-row md:justify-between mb-12">
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 z-10 hidden md:block"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping"></div>
      </motion.div>

      {/* Left Side - Show on Even */}
      <div className="hidden md:block w-[45%]">
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="hover:scale-105 hover:border-cyan-500 transition-all duration-300 text-right">
              <h3 className="text-xl font-bold neon-text">{item.role}</h3>
              <p className="text-cyan-400 font-medium mb-2">{item.company}</p>
              <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </GlassCard>
          </motion.div>
        )}
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[45%]">
        {!isEven && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="hover:scale-105 hover:border-cyan-500 transition-all duration-300 text-left">
              <h3 className="text-xl font-bold neon-text">{item.role}</h3>
              <p className="text-cyan-400 font-medium mb-2">{item.company}</p>
              <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </GlassCard>
          </motion.div>
        )}
      </div>
      
      {/* Mobile view - Simple list */}
      <div className="w-full md:hidden mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="hover:scale-105 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-bold neon-text">{item.role}</h3>
              <p className="text-cyan-400 font-medium mb-2">{item.company}</p>
              <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="neon-text">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-line hidden md:block"></div>

          {/* Experience Items */}
          {[...experienceData, ...educationData].map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
