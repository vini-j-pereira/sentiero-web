import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Listen for mobile menu open/close events dispatched by Navbar
  useEffect(() => {
    const handler = (e: Event) => setMenuOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener('menu-toggle', handler);
    return () => window.removeEventListener('menu-toggle', handler);
  }, []);

  // Track absolute window scroll — the smoothest source of truth
  const { scrollY } = useScroll();

  // Stretch the effect over 1600px of scroll — much slower zoom
  const rawBgY    = useTransform(scrollY, [0, 1600], [0, 120]);
  const rawScale  = useTransform(scrollY, [0, 1600], [1.0, 1.4]);
  const rawContentY = useTransform(scrollY, [0, 1000], [0, -80]);
  const rawOpacity  = useTransform(scrollY, [0, 900],  [1, 0]);

  // Softer spring — slower, more cinematic
  const springConfig = { stiffness: 35, damping: 18, restDelta: 0.001 };
  const bgY           = useSpring(rawBgY,      springConfig);
  const bgScale       = useSpring(rawScale,    springConfig);
  const contentY      = useSpring(rawContentY, springConfig);
  const contentOpacity = useSpring(rawOpacity, springConfig);

  return (
    // Tall section: gives 2 full viewports of scroll room before next section appears
    <section className="relative h-[200vh]">

      {/* Sticky wrapper — stays fixed while user scrolls through the extra height */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* Background image with zoom + parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/images/background1.jpeg"
            alt="Sentiero hero background"
            style={{
              y: bgY,
              scale: bgScale,
              willChange: 'transform',
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Hero Content — Multi-layer animation for scroll parallax + menu toggle fade */}
        <motion.div
          animate={{ 
            opacity: menuOpen ? 0 : 1,
            pointerEvents: menuOpen ? 'none' : 'auto',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10 w-full"
        >
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center pb-24 md:pb-32 pt-20"
          >
            <div className="max-w-4xl text-white">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/images/blocado.png"
                alt="Sentiero - Escapa da cidade, encontre sua paz"
                className="w-full max-w-2xl mx-auto mb-12 brightness-0 invert"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center -mt-8 md:-mt-12 lg:-mt-16"
              >
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
                  <MapPin size={18} className="text-nature-200" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Gasparinho - SC</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [-48, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-nature-200"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
