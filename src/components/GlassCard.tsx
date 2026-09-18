import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, tilt = true }) => {
  return (
    <motion.div
      whileHover={tilt ? { scale: 1.02, rotateY: 5, rotateX: 5 } : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-cyan-500/30',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
