import Hero from '../components/sections/Hero';
import CabinShowcase from '../components/sections/CabinShowcase';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <CabinShowcase />
      
      {/* Experience Section */}
      <section id="experiencia" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/assets/hero-bg.png" 
                alt="Experience Nature" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nature-200 rounded-[2rem] -z-10" />
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-nature-600" />
              <span className="text-sm font-bold text-nature-600 uppercase tracking-widest">Experiência</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 leading-[1.1]">
              Mais que uma reserva, uma <span className="text-nature-500 font-light italic">reconexão.</span>
            </h2>
            <p className="text-xl text-stone-500 leading-relaxed font-light">
              No Sentiero, acreditamos que o luxo está no silêncio, na luz do amanhecer entre as árvores e no som das águas. Cada detalhe foi pensado para proporcionar conforto enquanto você contempla a vida selvagem.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-nature-700 mb-1">100%</p>
                <p className="text-sm font-bold text-stone-400 uppercase tracking-wider">Energia Limpa</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-nature-700 mb-1">400+ Hav</p>
                <p className="text-sm font-bold text-stone-400 uppercase tracking-wider">Área Preservada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
