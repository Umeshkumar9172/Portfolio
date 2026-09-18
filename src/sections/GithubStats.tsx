import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { FiGithub, FiExternalLink, FiGitBranch, FiStar, FiActivity } from 'react-icons/fi';

export const GithubStats: React.FC = () => {
  const username = 'Umeshkumar9172'; // User's GitHub username

  const stats = [
    {
      label: 'GitHub Stats',
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=3b82f6&icon_color=06b6d4&text_color=94a3b8`,
    },
    {
      label: 'Top Languages',
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=3b82f6&icon_color=06b6d4&text_color=94a3b8`,
    },
    {
      label: 'Contribution Streak',
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&stroke=3b82f6&fire=06b6d4&ring=a855f7&sideNums=94a3b8&currStreakLabel=3b82f6`,
    },
  ];

  return (
    <section id="github" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <FiGithub className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Open Source</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-center"
          >
            GitHub <span className="neon-text">Activity</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Main Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 h-full flex flex-col group border-white/10 hover:border-blue-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FiActivity className="text-blue-500" /> General Stats
                </h3>
                <a 
                  href={`https://github.com/${username}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                >
                  <FiExternalLink />
                </a>
              </div>
              <div className="flex-grow flex items-center justify-center bg-black/20 rounded-xl p-4 overflow-hidden border border-white/5">
                <img
                  src={stats[0].url}
                  alt={stats[0].label}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 h-full flex flex-col group border-white/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FiGitBranch className="text-cyan-500" /> Language Distribution
                </h3>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-cyan-500/10 text-[10px] font-bold text-cyan-400 border border-cyan-500/20">MOST USED</span>
                </div>
              </div>
              <div className="flex-grow flex items-center justify-center bg-black/20 rounded-xl p-4 overflow-hidden border border-white/5">
                <img
                  src={stats[1].url}
                  alt={stats[1].label}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Streak Stats Card (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-6 group border-white/10 hover:border-purple-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FiStar className="text-purple-500" /> Contribution Streak
              </h3>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-400">Updating Live</span>
                </div>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-4 md:p-8 flex items-center justify-center overflow-hidden border border-white/5">
              <img
                src={stats[2].url}
                alt={stats[2].label}
                className="w-full max-w-4xl h-auto transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <span>Explore my full profile on GitHub</span>
            <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
