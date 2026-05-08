import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { testimonials } from '../../data/content';

const Testimonials = () => (
  <section id="testimonials" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Loved by{' '}
        <span className="bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">builders</span>.
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <GlassCard key={i} className="p-8">
            <p className="text-white/80 italic mb-6">“{t.quote}”</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aurora to-cyan" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
