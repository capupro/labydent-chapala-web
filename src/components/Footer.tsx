
import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/labydent.consultorio.dental',
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/labydent_chapala/',
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/523319434231',
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
               {t('hero.enlaces')}
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
              {t('hero.medio')}
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+523319434231"
                className="flex items-center text-gray-300 hover:text-labydent-gold transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-3" />
                33 1943 4231
              </a>
              
              <a 
                href="mailto:Cdpaolar@outlook.es"
                className="flex items-center text-gray-300 hover:text-labydent-gold transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-3" />
                Cdpaolar@outlook.es
              </a>

              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Avenida Francisco I Madero 457-a<br />Chapala, Jalisco, México</span>
              </div>

              <div className="text-gray-300">
                <p className="font-medium text-labydent-gold mb-1">Horarios:</p>
                <p className="text-sm">Lun - Vie: 09:00 - 19:30</p>
                <p className="text-sm">Sáb: 09:00 - 14:00</p>
                <p className="text-sm">Dom: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Labydent Chapala. Todos los derechos reservados.
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
