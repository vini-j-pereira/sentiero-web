import { Mail, Phone, Leaf } from 'lucide-react';

const InstagramIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="contato" className="bg-stone-950 text-stone-500 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="bg-nature-200 p-2 rounded-xl text-nature-900 transition-all group-hover:rotate-12 group-hover:scale-110">
                <Leaf size={24} />
              </div>
              <span className="text-2xl font-bold text-white uppercase tracking-[0.2em]">
                Sentiero
              </span>
            </a>
            <p className="max-w-md text-xl leading-relaxed mb-10 text-stone-400">
              Oferecemos refúgios exclusivos para quem busca desconectar 
              da rotina urbana e se reconectar com a essência vibrante da natureza.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-stone-500 hover:text-nature-200 transition-all hover:-translate-y-1"><InstagramIcon className="w-7 h-7" /></a>
              <a href="#" className="text-stone-500 hover:text-nature-200 transition-all hover:-translate-y-1"><FacebookIcon className="w-7 h-7" /></a>
              <a href="#" className="text-stone-500 hover:text-nature-200 transition-all hover:-translate-y-1"><Mail size={28} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Navegação</h4>
            <ul className="space-y-5">
              <li><a href="#experiencia" className="hover:text-nature-200 transition-colors">Experiência</a></li>
              <li><a href="#acomodacoes" className="hover:text-nature-200 transition-colors">Acomodações</a></li>
              <li><a href="#localizacao" className="hover:text-nature-200 transition-colors">Localização</a></li>
              <li><a href="#contato" className="hover:text-nature-200 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center group-hover:bg-nature-200/10 transition-colors">
                  <Phone size={18} className="text-nature-200" />
                </div>
                <span className="group-hover:text-white transition-colors">+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center group-hover:bg-nature-200/10 transition-colors">
                  <Mail size={18} className="text-nature-200" />
                </div>
                <span className="group-hover:text-white transition-colors">ola@sentiero.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-stone-600">
          <p>© 2026 Sentiero - Todos os direitos reservados.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
