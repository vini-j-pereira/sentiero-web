import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/background1.jpeg" 
          alt="Cabin in the forest" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center pb-12 md:pb-10 -mt-20">
        <div className="max-w-4xl text-white">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/blocado.png"
            alt="Sentiero - Escapa da cidade, encontre sua paz"
            className="w-full max-w-2xl mx-auto mb-16 brightness-0 invert"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 -mt-72">
              <MapPin size={18} className="text-nature-200" />
              <span className="text-sm font-bold uppercase tracking-widest">Gasparinho - SC</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-48, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-nature-200" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
