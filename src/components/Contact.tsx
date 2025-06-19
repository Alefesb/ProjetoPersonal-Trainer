
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Entre em <span className="text-white">Contato</span>
          </h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Pronto para começar sua transformação? Entre em contato comigo 
            e vamos criar um plano personalizado para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-300">(11) 99999-9999</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">joao@fittrainer.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Localização</div>
                  <div className="text-gray-300">São Paulo, SP</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-400 text-black rounded-lg">
              <h4 className="font-bold mb-2">Horário de Atendimento</h4>
              <div className="text-sm">
                <div>Segunda a Sexta: 6h às 22h</div>
                <div>Sábado: 8h às 18h</div>
                <div>Domingo: 8h às 12h</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-black">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Conte-me sobre seus objetivos..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-yellow-400 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
