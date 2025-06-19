
import { Award, Users, Target, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre <span className="text-yellow-400">Mim</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Sou João Silva, personal trainer certificado com mais de 5 anos de experiência 
              ajudando pessoas a transformarem suas vidas através do fitness. Minha missão é 
              criar programas de treino personalizados que se adaptam ao seu estilo de vida.
            </p>
            <p className="text-gray-300 mb-8">
              Especializado em perda de peso, ganho de massa muscular e condicionamento físico. 
              Cada cliente é único, e por isso desenvolvo estratégias individuais para 
              garantir os melhores resultados.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold">Certificado CREF</div>
                  <div className="text-sm text-gray-400">Profissional Registrado</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold">500+ Clientes</div>
                  <div className="text-sm text-gray-400">Vidas Transformadas</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-1">
              <div className="bg-black rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold mb-2">Foco</div>
                    <div className="text-sm text-gray-400">Objetivos Claros</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold mb-2">Disciplina</div>
                    <div className="text-sm text-gray-400">Resultados Consistentes</div>
                  </div>
                  <div className="col-span-2 text-center bg-yellow-400 text-black p-4 rounded-lg">
                    <div className="text-lg font-bold">"Seu sucesso é minha motivação"</div>
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

export default About;
