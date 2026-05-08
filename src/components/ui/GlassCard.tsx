import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const GlassCard = ({ children, className = '', onMouseEnter, onMouseLeave }: Props) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(139,92,246,0.15)' }}
    className={`bg-glass border border-white/10 rounded-2xl backdrop-blur-xl ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </motion.div>
);

export default GlassCard;
