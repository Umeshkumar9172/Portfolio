import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiTwitter, FiInstagram } from 'react-icons/fi';

export const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="neon-text">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's connect!</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              I'll get back to you as soon as I can!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:umeshverma1507@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] border-white/20">
                  <FiMail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="text-base font-medium group-hover:text-cyan-400 transition-colors truncate max-w-[150px] md:max-w-full">umeshverma1507@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/umesh9172/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] border-white/20">
                  <FiLinkedin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-base font-medium group-hover:text-cyan-400 transition-colors">umesh-dev</p>
                </div>
              </a>

              <a href="https://github.com/Umeshkumar9172" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] border-white/20">
                  <FiGithub className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-base font-medium group-hover:text-cyan-400 transition-colors">umesh-dev</p>
                </div>
              </a>

              <a href="https://x.com/Umesh917238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] border-white/20">
                  <FiTwitter className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Twitter / X</p>
                  <p className="text-base font-medium group-hover:text-cyan-400 transition-colors">@umesh_dev</p>
                </div>
              </a>

              <a href="https://www.instagram.com/rajguru_edits/reels/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] border-white/20">
                  <FiInstagram className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="text-base font-medium group-hover:text-cyan-400 transition-colors">@umesh_dev</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <GlassCard className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Hi Umesh, I'd like to talk about..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-gradient flex items-center justify-center gap-2"
                >
                  Send Message <FiSend />
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
