
import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/labydentchapala',
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/labydentchapala',
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/523761234567',
      label: 'WhatsApp',
      color: 'hover:text-green-600'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Odontología General',
    'Estética Dental',
    'Ortodoncia',
    'Implantes Dentales',
    'Blanqueamiento',
    'Endodoncia'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png" 
                alt="Labydent Logo" 
                className="h-12 w-auto"
              />
              <div className="font-montserrat font-bold text-2xl text-labydent-gold">
                Labydent
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Clínica dental de excelencia en Chapala, Jalisco. Especialistas en transformar sonrisas con tecnología de vanguardia y atención personalizada.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-labydent-gold">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-labydent-gold transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-labydent-gold">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-labydent-gold transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-labydent-gold">
              Contacto
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+523761234567"
                className="flex items-center text-gray-300 hover:text-labydent-gold transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-3" />
                +52 376 123 4567
              </a>
              
              <a 
                href="mailto:info@labydentchapala.com"
                className="flex items-center text-gray-300 hover:text-labydent-gold transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-3" />
                info@labydentchapala.com
              </a>

              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Chapala, Jalisco, México</span>
              </div>

              <div className="text-gray-300">
                <p className="font-medium text-labydent-gold mb-1">Horarios:</p>
                <p className="text-sm">Lun - Vie: 9:00 - 18:00</p>
                <p className="text-sm">Sáb: 9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="font-montserrat font-semibold text-xl mb-4 text-labydent-gold">
              {t('footer.follow')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Mantente al día con nuestros consejos de salud dental, promociones especiales y novedades de la clínica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-labydent-gold focus:border-transparent"
              />
              <Button className="labydent-gradient text-white hover:opacity-90 transition-opacity px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.text')}
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-labydent-gold text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-labydent-gold text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
