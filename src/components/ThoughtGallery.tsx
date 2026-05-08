import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

const thoughts = [
  { id: 1, text: "The future is emotional", color: "#c084fc" },
  { id: 2, text: "Creativity is connection", color: "#67e8f9" },
  { id: 3, text: "Stillness creates clarity", color: "#f472b6" },
  { id: 4, text: "Build in public, think in private", color: "#a78bfa" },
];

export default function ThoughtGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".thought-orb", {
        scale: 0.2,
        opacity: 0,
        y: 100,
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.4)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="thoughts" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="heading-font text-6xl font-bold text-center mb-20">
          Thoughts in Orbit
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {thoughts.map((thought, index) => (
            <motion.div
              key={thought.id}
              className="thought-orb glass p-8 rounded-3xl cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => alert("In real version this would open in 3D space ✨")}
            >
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all"
                style={{ background: `radial-gradient(circle at 30% 30%, ${thought.color}, transparent)` }}
              />

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Sparkles className="w-6 h-6" style={{ color: thought.color }} />
                </div>
                <div>
                  <p className="text-xl leading-relaxed text-white/90">
                    “{thought.text}”
                  </p>
                  <p className="text-xs text-white/40 mt-6 tracking-widest">
                    THOUGHT • {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
