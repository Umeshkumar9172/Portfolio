import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'StyleAI',
    description: 'Smart AI styling tool that provides personalized outfit and color recommendations based on your facial features and skin tone.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60',
    tech: ['Flask', 'HTML5', 'LLaMA 3.3 70B', 'OpenCV','NumPy','JavaScript  '],
    github: 'https://github.com/Umeshkumar9172/StyleSense-Generative-AI-Powered-Fashion-Recommendation-System',
    live: 'https://style-sense-generative-ai-powered-fashion-recommenda-8azwf7xiy.vercel.app/',
  },
  {
    title: 'Smart AI Traffic Control',
    description: 'An intelligent AI-powered traffic management system that optimizes signal timings and reduces congestion using real-time vehicle detection.',
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&auto=format&fit=crop&q=60',
    tech: ['Next.js', 'YOLO', 'OpenCV', 'Python', 'TensorFlow'],
    github: 'https://github.com/Umeshkumar9172/Smart_AI_Traffic_Management',
    live: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with Stripe integration, product filtering, and a comprehensive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Firebase', 'Stripe', 'Framer Motion'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop features, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop&q=60',
    tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassCard className="group p-0 overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 transition-colors">
              <FiGithub className="w-6 h-6 text-white" />
            </a>
            <a href={project.live} className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 transition-colors">
              <FiExternalLink className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag: string) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                <FiGithub /> GitHub
              </a>
              <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="neon-text">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
