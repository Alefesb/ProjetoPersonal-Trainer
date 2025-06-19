
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-black flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              TRANSFORME
              <span className="block text-black">SEU CORPO</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Alcance seus objetivos com um personal trainer experiente. 
              Treinos personalizados, resultados garantidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                COMEÇAR AGORA
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                VER VÍDEO
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-black/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm mb-6">Clientes Transformados</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-400 text-black p-4 rounded-lg">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs">Taxa de Sucesso</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-xs">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
