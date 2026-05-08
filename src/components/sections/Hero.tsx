import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Magnetic from '../ui/Magnetic';

const Orb = ({ mouse }: { mouse: { x: number; y: number } }) => {
  return (
    <mesh rotation={[mouse.y * 0.3, mouse.x * 0.3, 0]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial
        color="#8B5CF6"
        emissive="#22D3EE"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.9}
        distort={0.3}
        speed={1.5}
      />
    </mesh>
  );
};

const Hero = ({ setHovered }: { setHovered: (val: boolean) => void }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMouse({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Orb mouse={mouse} />
        </Canvas>
      </div>

      {/* content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-aurora via-purple-400 to-cyan bg-clip-text text-transparent">
            Command Everything
          </span>
          <br />
          <span className="text-white/90">with AI precision.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
        >
          The universal command hub that bends your tools, files, and AI into one fluid experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="px-8 py-4 bg-gradient-to-r from-aurora to-cyan rounded-full font-semibold text-black shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-shadow"
            >
              Try NOVA Free
            </button>
          </Magnetic>
          <Magnetic>
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white/80 hover:bg-white/5 transition"
            >
              Watch Demo
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

