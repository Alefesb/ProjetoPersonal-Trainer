
import { Dumbbell, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">FitTrainer</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Transformando vidas através do fitness personalizado. 
              Seu sucesso é nossa missão.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-6 w-6 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Treino Personalizado</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Consultoria Nutricional</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Treino Funcional</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Treino em Grupo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">Sobre Mim</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Meus Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">São Paulo, SP</span>
              </div>
              <div className="text-sm">
                <div>Segunda a Sexta: 6h às 22h</div>
                <div>Sábado: 8h às 18h</div>
                <div>Domingo: 8h às 12h</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FitTrainer. Todos os direitos reservados. Desenvolvido com 💪 para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
