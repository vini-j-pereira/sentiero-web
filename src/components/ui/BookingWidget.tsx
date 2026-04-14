import { useState } from 'react';
import { Calendar, Users, ChevronRight } from 'lucide-react';

interface BookingWidgetProps {
  cabinName?: string;
  price?: string;
  isDark?: boolean;
}

const BookingWidget = ({ cabinName, price, isDark = true }: BookingWidgetProps) => {
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
    const text = `Olá! Gostaria de reservar a cabana "${cabinName}" para as seguintes datas...`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={isDark ? "glass-dark p-8 rounded-[2rem] w-full border border-white/10 shadow-2xl" : "glass p-8 rounded-[2rem] w-full border border-black/5 shadow-2xl"}>
      <div className="space-y-6">
        {price && (
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className={isDark ? "text-[10px] text-white/40 font-bold uppercase tracking-widest" : "text-[10px] text-stone-400 font-bold uppercase tracking-widest"}>Preço por noite</p>
              <p className={isDark ? "text-3xl font-bold text-nature-200" : "text-3xl font-bold text-nature-700"}>{price}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className={isDark ? "text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1" : "text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1"}>Check-in</label>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer group">
              <Calendar size={18} className="text-nature-200" />
              <span className="text-sm font-medium text-white/80">-- / --</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className={isDark ? "text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1" : "text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1"}>Check-out</label>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer group">
              <Calendar size={18} className="text-nature-200" />
              <span className="text-sm font-medium text-white/80">-- / --</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className={isDark ? "text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1" : "text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1"}>Hóspedes</label>
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 text-white">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-nature-200" />
              <span className="text-sm font-medium text-white/80">{guests} Hóspede{guests > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-nature-200 hover:text-nature-900 transition-all font-bold"
              >
                -
              </button>
              <button 
                onClick={() => setGuests(prev => prev + 1)}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-nature-200 hover:text-nature-900 transition-all font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={handleBooking}
          className="w-full bg-nature-200 hover:bg-nature-100 text-nature-900 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-nature-200/20 group uppercase tracking-widest text-xs"
        >
          Verificar Disponibilidade
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
