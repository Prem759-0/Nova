import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-start justify-center pt-[15vh]">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="glass w-full max-w-xl rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search thoughts, memories, constellations..."
                className="bg-transparent outline-none flex-1 text-lg placeholder:text-white/40"
                autoFocus
              />
              <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 text-sm text-white/60">
              Press <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded">ESC</span> to close
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
