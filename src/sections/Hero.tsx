import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import profileImg from '../assets/hero.png';

export const Hero: FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['AI Engineer', 'Robotics Engineer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Umesh Kumar
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
            <span className="neon-text" ref={el}></span>
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Passionate AI engineer specializing in building exceptional digital experiences. 
            Skilled in AI/ML, IoT, and cloud technologies, building smart and scalable solutions for real-world problems.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="btn-gradient inline-block">Get In Touch</a>
            <a href="#projects" className="btn-outline inline-block">View Projects</a>
          </div>

          <div className="flex gap-6">
            <motion.a 
              href="https://github.com/Umeshkumar9172" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/umesh9172/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a 
              href="https://x.com/Umesh917238" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
            >
              <FiTwitter />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/rajguru_edits/reels/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
            >
              <FiInstagram />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Background Blobs */}
          <div className="absolute -z-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse top-0 left-0"></div>
          <div className="absolute -z-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse bottom-0 right-0"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/50 p-4"
            ></motion.div>
            
            {/* Image Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-bg">
                <img 
                  src={profileImg} 
                  alt="Umesh Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
