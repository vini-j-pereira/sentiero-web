import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll + notify Hero to hide its content when menu opens
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('menu-toggle', { detail: { open: isMobileMenuOpen } }));
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const { scrollY } = useScroll();
  const rawOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const rawY       = useTransform(scrollY, [0, 700], [0, -24]);
  const springConfig = { stiffness: 35, damping: 18, restDelta: 0.001 };
  const navOpacity = useSpring(rawOpacity, springConfig);
  const navY       = useSpring(rawY, springConfig);

  const navLinks = [
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Acomodações', href: '#acomodacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Nav bar — z-[70] ensures it always sits ABOVE the overlay (z-[60]) */}
      <motion.nav
        style={{
          opacity: isMobileMenuOpen ? 1 : navOpacity,
          y: isMobileMenuOpen ? 0 : navY,
        }}
        className="fixed top-0 left-0 right-0 z-[70] px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo — always visible */}
          <a href="/" className="flex items-center gap-4 group" onClick={closeMenu}>
            <div className="p-1 rounded-lg transition-all group-hover:rotate-12 bg-white/10 backdrop-blur-sm">
              <img
                src="/images/logo.png"
                alt="Sentiero Logo"
                className="w-15 h-15 object-contain brightness-0 invert"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 bg-white text-nature-900 shadow-xl">
              Reservar Agora
            </button>
          </div>

          {/* Mobile toggle — always on top thanks to z-[70] nav */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile overlay — z-[60] so the nav bar above always shows through */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Very light overlay — hero photo shows through clearly */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Menu items — padded top so they sit below the navbar */}
            <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8 pt-20">

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-12 h-[1px] bg-white/30 mb-8"
              />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.07, ease: 'easeOut' }}
                  className="text-3xl font-thin tracking-widest text-white/80 hover:text-white py-3 uppercase transition-colors"
                  onClick={closeMenu}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-12 h-[1px] bg-white/30 mt-8 mb-10"
              />

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 text-nature-900 px-10 py-4 rounded-full text-base font-bold shadow-2xl shadow-black/20"
              >
                Reservar Agora
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
