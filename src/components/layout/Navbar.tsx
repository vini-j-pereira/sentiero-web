import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Acomodações', href: '#acomodacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 border-b border-transparent',
        isScrolled ? 'glass py-3 border-stone-200' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-4 group">
          <div className={cn(
            "p-1 rounded-lg transition-all group-hover:rotate-12",
            isScrolled ? "" : "bg-white/10 backdrop-blur-sm"
          )}>
            <img 
              src="/images/logo.png" 
              alt="Sentiero Logo" 
              className={cn(
                "w-15 h-15 object-contain transition-all duration-500",
                !isScrolled && "brightness-0 invert"
              )}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link text-sm font-medium transition-colors",
                isScrolled ? "text-stone-700" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <button className={cn(
            "px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95",
            isScrolled 
              ? "bg-nature-700 text-white shadow-lg shadow-nature-700/20" 
              : "bg-white text-nature-900 shadow-xl"
          )}>
            Reservar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-nature-900" />
          ) : (
            <Menu size={24} className={isScrolled ? "text-nature-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-white z-[60] flex flex-col items-center justify-center gap-8 md:hidden">
          <button 
            className="absolute top-6 right-6 p-2 text-nature-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-nature-900 hover:text-nature-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-nature-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl shadow-nature-700/30">
            Reservar Agora
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
