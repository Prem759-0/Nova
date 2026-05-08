import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import CommandDemo from './components/sections/CommandDemo';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-space relative">
      {/* custom cursor */}
      <div
        className={`custom-cursor ${hovered ? 'hover' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
      <Navbar />
      <main>
        <Hero setHovered={setHovered} />
        <Features setHovered={setHovered} />
        <CommandDemo setHovered={setHovered} />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
