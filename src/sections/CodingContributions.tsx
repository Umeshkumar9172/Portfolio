import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { ExternalLink, Trophy, Flame, Code2 } from 'lucide-react';

interface PlatformProps {
  name: string;
  solved: number;
  link: string;
  logo: string;
  color: string;
  badge?: string;
  streak?: number;
}

const platforms: PlatformProps[] = [
  {
    name: 'LeetCode',
    solved: 250,
    link: 'https://leetcode.com/u/umesh91/',
    logo: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg',
    color: '#FFA116',
    badge: 'Top Performer',
    streak: 43,
  },
  {
    name: 'GeeksforGeeks',
    solved: 175,
    link: 'https://www.geeksforgeeks.org/profile/umesh91?tab=activity',
    logo: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg',
    color: '#298D46',
    badge: 'Active',
    streak: 70,
  },
  {
    name: 'CodeChef',
    solved: 250,
    link: 'https://www.codechef.com/users/umesh91',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codechef.svg',
    color: '#5B4638',
    badge: 'Competitive',
  },
  {
    name: 'Coding Ninjas',
    solved: 50,
    link: 'https://www.naukri.com/code360/profile/umeshkumarverna',
    logo: 'https://files.codingninjas.in/new-cn-logos-1-1711622387.svg',
    color: '#F66C35',
    badge: 'Rising Star',
  },
];

const ContributionCard: FC<PlatformProps> = ({ name, solved, link, logo, color, badge, streak }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <GlassCard className="relative overflow-hidden h-full group">
        {/* Background Glow */}
        <div 
          className="absolute -right-10 -top-10 w-32 h-32 blur-3xl opacity-20 transition-opacity group-hover:opacity-40"
          style={{ backgroundColor: color }}
        />
        
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ boxShadow: `0 0 20px ${color}33` }}
            >
              <img src={logo} alt={name} className="w-full h-full object-contain filter drop-shadow-md" />
            </div>
            {badge && (
              <span 
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-white/10 bg-white/5"
                style={{ color }}
              >
                {badge}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{name}</h3>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">Problems Solved: <span className="text-white">{solved}</span></span>
            </div>
            {streak && (
              <div className="flex items-center gap-2 text-gray-400">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Streak: <span className="text-white">{streak} days</span></span>
              </div>
            )}
          </div>

          <div className="mt-auto">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
            >
              View Profile <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const CodingContributions: FC = () => {
  const totalSolved = platforms.reduce((acc, curr) => acc + curr.solved, 0);

  return (
    <section id="coding-contributions" className="py-20 px-6 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Coding <span className="neon-text">Contributions</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              My journey across various competitive programming platforms. Solving problems, 
              building logic, and consistently improving my algorithmic skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-6 rounded-3xl glass border-white/10"
          >
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Total Solved</p>
              <h3 className="text-3xl font-bold neon-text leading-tight">{totalSolved}+</h3>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, _index) => (
            <ContributionCard key={platform.name} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};
