import { motion } from 'framer-motion';
import { Maximize, Users, Bed, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cabins } from '../../lib/cabins';

const CabinCard = ({ cabin, index }: { cabin: typeof cabins[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full"
  >
    <div className="relative h-[300px] overflow-hidden">
      <img 
        src={cabin.image} 
        alt={cabin.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-6 left-6 flex gap-2">
        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-stone-900">{cabin.rating}</span>
        </div>
      </div>
    </div>
    
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[10px] font-bold text-nature-600 uppercase tracking-widest mb-1">{cabin.location}</p>
          <h3 className="text-2xl font-bold text-stone-900 leading-none">{cabin.name}</h3>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-stone-400 font-bold uppercase mb-1">Por noite</p>
          <p className="text-xl font-bold text-nature-700">{cabin.price}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-nature-50 group-hover:border-nature-100 transition-colors">
          <Maximize size={16} className="text-stone-400 group-hover:text-nature-500" />
          <span className="text-[10px] font-bold text-stone-500 uppercase">{cabin.specs.area}</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-nature-50 group-hover:border-nature-100 transition-colors">
          <Bed size={16} className="text-stone-400 group-hover:text-nature-500" />
          <span className="text-[10px] font-bold text-stone-500 uppercase">{cabin.specs.beds} Qto</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-2xl border border-stone-100 group-hover:bg-nature-50 group-hover:border-nature-100 transition-colors">
          <Users size={16} className="text-stone-400 group-hover:text-nature-500" />
          <span className="text-[10px] font-bold text-stone-500 uppercase">{cabin.specs.guests} Pessoas</span>
        </div>
      </div>

      <Link 
        to={`/cabin/${cabin.id}`}
        className="mt-auto w-full py-4 rounded-2xl border-2 border-nature-700 text-nature-700 font-bold hover:bg-nature-700 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
      >
        Ver detalhes
        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const CabinShowcase = () => {
  return (
    <section id="acomodacoes" className="py-32 px-6 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-nature-600" />
              <span className="text-sm font-bold text-nature-600 uppercase tracking-[0.2em]">Nossas Cabanas</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-stone-900 leading-[1.1]"
            >
              Escolha seu cenário ideal para <span className="text-nature-500 font-light italic">recomeçar.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-stone-500 max-w-sm text-lg"
          >
            Três experiências distintas, todas unidas pelo mesmo compromisso com o silêncio e o conforto absoluto em meio à vida selvagem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cabins.map((cabin, index) => (
            <CabinCard key={cabin.id} cabin={cabin} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabinShowcase;
