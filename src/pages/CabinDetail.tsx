import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MapPin, Maximize, Bed, Users } from 'lucide-react';
import { cabins } from '../lib/cabins';
import BookingWidget from '../components/ui/BookingWidget';
import Footer from '../components/layout/Footer';

const CabinDetail = () => {
  const { id } = useParams();
  const cabin = cabins.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cabin) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-ivory">
        <h1 className="text-4xl font-bold text-nature-900 mb-4">Cabana não encontrada</h1>
        <Link to="/" className="text-nature-700 font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Voltar para o início
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory pt-24">
      {/* Detail Hero */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img 
          src={cabin.image} 
          alt={cabin.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-16 left-0 w-full px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-6 text-white">
            <Link to="/" className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/30 transition-all mb-4 group shadow-lg">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
              <span className="text-sm font-bold uppercase tracking-widest">Explorar mais</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold">{cabin.name}</h1>
            <div className="flex items-center gap-3 text-nature-200">
              <MapPin size={24} />
              <span className="text-xl font-medium">{cabin.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-nature-600" />
              <span className="text-sm font-bold text-nature-600 uppercase tracking-widest">Sobre este refúgio</span>
            </div>
            <p className="text-2xl text-stone-600 leading-relaxed font-light">
              {cabin.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-stone-100 flex flex-col gap-3 items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-nature-50 rounded-2xl text-nature-600">
                <Maximize size={28} />
              </div>
              <span className="text-2xl font-bold text-stone-900">{cabin.specs.area}</span>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Área Total</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-100 flex flex-col gap-3 items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-nature-50 rounded-2xl text-nature-600">
                <Bed size={28} />
              </div>
              <span className="text-2xl font-bold text-stone-900">{cabin.specs.beds}</span>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Quartos</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-100 flex flex-col gap-3 items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-nature-50 rounded-2xl text-nature-600">
                <Users size={28} />
              </div>
              <span className="text-2xl font-bold text-stone-900">{cabin.specs.guests}</span>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Hóspedes</span>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-stone-900">Galeria de Detalhes</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100 group">
                <img 
                  src={cabin.images[1]} 
                  alt={`${cabin.name} Interior`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-stone-900">Comodidades exclusivas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cabin.amenities.map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-stone-50 shadow-sm transition-all hover:translate-x-1">
                  <div className="w-8 h-8 rounded-full bg-nature-100 flex items-center justify-center text-nature-700">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-stone-700 font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar with Booking Widget */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <BookingWidget cabinName={cabin.name} price={cabin.price} isDark={false} />
            <div className="mt-8 p-8 bg-nature-950 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nature-200/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-lg font-bold mb-3 relative z-10 font-serif italic text-nature-200">Dica de Especialista</h4>
              <p className="text-sm text-stone-300 leading-relaxed font-medium relative z-10">
                Para uma experiência completa de contemplação, recomendamos estadias mínimas de 3 noites. Reservas de meio de semana possuem 15% de desconto automático.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CabinDetail;
