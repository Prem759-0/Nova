import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Command } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const commands = [
  { id: 1, name: 'Open Figma', shortcut: '⌘F', icon: '🎨' },
  { id: 2, name: 'Create Note', shortcut: '⌘N', icon: '📝' },
  { id: 3, name: 'Run Script', shortcut: '⌘R', icon: '⚡' },
  { id: 4, name: 'Search Files', shortcut: '⌘S', icon: '📂' },
  { id: 5, name: 'Ask AI', shortcut: '⌘A', icon: '🧠' },
];

const CommandDemo = ({ setHovered }: { setHovered: (val: boolean) => void }) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <section id="demo" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          One command away from{' '}
          <span className="bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">everything</span>.
        </motion.h2>

        {/* demo trigger */}
        <Magnetic>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 px-6 py-4 bg-glass border border-white/10 rounded-xl text-white/70 hover:border-aurora/50 cursor-pointer backdrop-blur-xl"
          >
            <Search size={20} />
            <span>Press</span>
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-sm">⌘</kbd>
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-sm">K</kbd>
          </div>
        </Magnetic>

        {/* command palette overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg bg-glass border border-white/10 rounded-2xl p-4 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3 mb-4 px-2">
                  <Search size={18} className="text-white/40" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search commands..."
                    className="bg-transparent w-full outline-none text-white text-lg placeholder-white/30"
                  />
                </div>
                <div className="space-y-1">
                  {commands.map((cmd, i) => (
                    <motion.div
                      key={cmd.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{cmd.icon}</span>
                        <span className="text-white/80">{cmd.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/30 text-sm">
                        <span>{cmd.shortcut}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CommandDemo;

