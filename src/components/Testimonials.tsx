
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
      text: "Em 6 meses perdi 15kg e ganhei muito mais disposição. O João é um profissional excepcional!",
      rating: 5
    },
    {
      name: "Carlos Santos",
      role: "Engenheiro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Nunca imaginei que poderia gostar tanto de treinar. Os resultados superaram minhas expectativas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Médica",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      text: "Profissional dedicado e metodologia eficiente. Recomendo para todos que buscam resultados reais.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            O Que Dizem Meus <span className="text-yellow-400">Clientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Veja os depoimentos de pessoas que transformaram suas vidas comigo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 relative hover:transform hover:scale-105 transition-all duration-300">
              <Quote className="h-8 w-8 text-yellow-400 mb-4" />
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
