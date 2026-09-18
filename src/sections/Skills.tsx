import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'Vercel'],
  },
  {
    title: 'AI & Data Science',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
  },
  {
    title: 'Tools & Others',
    skills: ['Figma', 'Postman', 'VS Code', 'Storybook', 'Vite'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile', 'Mentoring'],
  },
];

const SkillTag: FC<{ skill: string }> = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
    className="px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30 text-cyan-400 glass transition-all duration-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
  >
    {skill}
  </motion.span>
);

export const Skills: FC = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical <span className="neon-text">Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full hover:border-cyan-500/50">
                <h3 className="text-xl font-bold mb-6 neon-text text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
