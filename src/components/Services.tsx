
import { Dumbbell, Heart, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Treino Personalizado",
      description: "Programas de treino desenvolvidos especificamente para seus objetivos e limitações.",
      price: "R$ 80/sessão"
    },
    {
      icon: Heart,
      title: "Consultoria Nutricional",
      description: "Orientação alimentar personalizada para potencializar seus resultados.",
      price: "R$ 150/mês"
    },
    {
      icon: Zap,
      title: "Treino Funcional",
      description: "Exercícios que melhoram sua funcionalidade no dia a dia e performance esportiva.",
      price: "R$ 70/sessão"
    },
    {
      icon: Users,
      title: "Treino em Grupo",
      description: "Sessões em pequenos grupos para maior motivação e custo reduzido.",
      price: "R$ 50/sessão"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Meus <span className="text-white">Serviços</span>
          </h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Ofereco uma variedade de serviços para atender suas necessidades específicas 
            e ajudá-lo a alcançar seus objetivos de fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black text-white rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <service.icon className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <div className="text-yellow-400 font-bold text-lg">{service.price}</div>
              <button className="w-full mt-4 bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
