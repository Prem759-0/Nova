import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  { label: 'Commands executed', value: 2.3, suffix: 'M+' },
  { label: 'Active users', value: 85, suffix: 'k' },
  { label: 'Uptime', value: 99.99, suffix: '%' },
];

const Stats = () => (
  <section id="stats" className="py-24 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <div className="text-5xl font-extrabold bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">
            <AnimatedCounter from={0} to={stat.value} duration={2} />
            {stat.suffix}
          </div>
          <p className="mt-3 text-white/50 text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stats;
