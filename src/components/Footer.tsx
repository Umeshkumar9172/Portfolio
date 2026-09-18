import React from 'react';
import { motion } from 'framer-motion';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Umesh. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="https://github.com/umesh-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/umesh-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/umesh_dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <FiTwitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/umesh_dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <FiInstagram className="w-5 h-5" />
          </a>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
