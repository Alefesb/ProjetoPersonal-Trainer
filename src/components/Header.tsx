
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold">FitTrainer</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Início</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">Sobre</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">Serviços</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Depoimentos</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contato</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Início</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">Sobre</a>
              <a href="#services" className="hover:text-yellow-400 transition-colors">Serviços</a>
              <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Depoimentos</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
