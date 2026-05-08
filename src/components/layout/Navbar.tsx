import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-glass/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">
          NOVA
        </a>
        <div className="hidden md:flex space-x-8 text-white/70 font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#stats" className="hover:text-white transition-colors">Stats</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        </div>
        <button
          className="md:hidden text-white/70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-space/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-4 text-white/70 font-medium">
              <a href="#features" onClick={() => setOpen(false)}>Features</a>
              <a href="#demo" onClick={() => setOpen(false)}>Demo</a>
              <a href="#stats" onClick={() => setOpen(false)}>Stats</a>
              <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
