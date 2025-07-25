
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat mb-4 px-2">
            <span className="labydent-text-gradient">Servicios Dentales en Chapala - Odontología General y Especializada</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-labydent-gold mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.titleKey}
              className="dental-card group hover:scale-105 transition-all duration-300 animate-fade-in border-0 shadow-xl min-h-[16rem] sm:min-h-[18rem]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-montserrat text-gray-800 dark:text-white leading-tight">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                  {t(service.descKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services - Responsive */}
        <div className="bg-gradient-to-r from-labydent-cream to-white dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-6 sm:mb-8 text-gray-800 dark:text-white">
                Especialidades Adicionales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-center space-x-2 p-2 sm:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-labydent-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Endodoncia</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-2 sm:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-labydent-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Periodoncia</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-2 sm:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-labydent-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Cirugía Oral</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-2 sm:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-labydent-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Prótesis Dental</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-2 sm:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-labydent-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Odontopediatría</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-2 sm:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-labydent-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Emergencias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
