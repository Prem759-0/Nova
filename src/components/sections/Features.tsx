import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { features } from '../../data/content';

const Features = ({ setHovered }: { setHovered: (val: boolean) => void }) => (
  <section id="features" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Built for <span className="bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">speed</span>.
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <GlassCard
            key={i}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="p-8"
          >
            <div className="text-3xl mb-4">{feat.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
            <p className="text-white/60">{feat.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
