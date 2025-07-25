
import React from 'react';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '33 1943 4231',
      href: 'tel:+523319434231',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Cdpaolar@outlook.es',
      href: 'mailto:Cdpaolar@outlook.es',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lunes a Viernes: 09:00 - 19:30\nSábado: 09:00 - 14:00\nDomingo: Cerrado',
      href: null,
      color: 'text-purple-600'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Avenida Francisco I Madero 457-a\nChapala, Jalisco, México',
      href: 'https://maps.google.com/?q=Avenida+Francisco+I+Madero+457-a,+Chapala,+Jalisco,+Mexico',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat mb-4 px-2">
            <span className="labydent-text-gradient">Contacta con Labydent Chapala - Agendar Cita Dental</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t('hero.listo')}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-labydent-gold mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information - Responsive Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="dental-card hover:scale-105 transition-all duration-300 text-center min-h-[10rem] sm:min-h-[12rem]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col justify-center h-full">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${info.color} mx-auto mb-3 sm:mb-4`}>
                    <info.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-base sm:text-lg">
                    {info.title}
                  </h4>
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.includes('maps') ? '_blank' : undefined}
                      rel={info.href.includes('maps') ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 dark:text-gray-300 hover:text-labydent-gold transition-colors whitespace-pre-line block text-sm sm:text-base leading-relaxed"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                      {info.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Call Button - Responsive */}
          <div className="text-center mb-8 sm:mb-12">
            <Card className="dental-card max-w-2xl mx-auto bg-gradient-to-r from-labydent-gold/10 to-labydent-gold-light/10 border-labydent-gold/20">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl font-montserrat text-gray-800 dark:text-white">
                   {t('hero.cita')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6 sm:pb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {t('hero.llamanos')}
                </p>
                
                <Button 
                  size="lg"
                  className="labydent-gradient text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105 text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                  asChild
                >
                  <a href="tel:+523319434231" className="flex items-center justify-center">
                    <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="whitespace-nowrap">Llamar: 33 1943 4231</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white transition-colors h-14 sm:h-16 text-base sm:text-lg"
              asChild
            >
              <a href="https://wa.me/523319434231" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-labydent-gold text-labydent-gold hover:bg-labydent-gold hover:text-white transition-colors h-14 sm:h-16 text-base sm:text-lg"
              asChild
            >
              <a href="mailto:Cdpaolar@outlook.es" className="flex items-center justify-center">
                <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Enviar Email
              </a>
            </Button>
          </div>

          {/* Google Maps */}
          <Card className="dental-card mb-12">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-white">{t('hero.nuestra')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8487654321!2d-103.1947534!3d20.3066667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4f8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sAv.%20Francisco%20I.%20Madero%20457-a%2C%20Chapala%2C%20Jal.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Labydent Chapala"
                />
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <div className="text-center bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-800 dark:text-white">
               {t('hero.emergencia')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('hero.contactanos')}
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white transition-colors"
              asChild
            >
              <a href="tel:+523319434231">
                <Phone className="mr-2 h-5 w-5" />
                  {t('hero.llamar')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
