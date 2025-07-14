
import React from 'react';
import { Smile, Sparkles, AlignHorizontalJustifyCenter, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smile,
      titleKey: 'services.general',
      descKey: 'services.general.desc',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sparkles,
      titleKey: 'services.aesthetic',
      descKey: 'services.aesthetic.desc',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: AlignHorizontalJustifyCenter,
      titleKey: 'services.orthodontics',
      descKey: 'services.orthodontics.desc',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Crown,
      titleKey: 'services.implants',
      descKey: 'services.implants.desc',
      color: 'from-labydent-gold to-labydent-gold-light'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="labydent-text-gradient">Servicios Dentales en Chapala - Odontología General y Especializada</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-labydent-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.titleKey}
              className="dental-card group hover:scale-105 transition-all duration-300 animate-fade-in border-0 shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat text-gray-800 dark:text-white">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {t(service.descKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-gradient-to-r from-labydent-cream to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-800 dark:text-white">
                {t('Temas Populares')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-labydent-gold rounded-full"></div>
                <span>Endodoncia</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-labydent-gold rounded-full"></div>
                <span>Periodoncia</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-labydent-gold rounded-full"></div>
                <span>Cirugía Oral</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-labydent-gold rounded-full"></div>
                <span>Prótesis Dental</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-labydent-gold rounded-full"></div>
                <span>Odontopediatría</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-labydent-gold rounded-full"></div>
                <span>Emergencias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
