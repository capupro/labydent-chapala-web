
import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: 'Experiencia',
      value: '15+ años',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Pacientes',
      value: '5000+',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      value: '6 días',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Satisfacción',
      value: '100%',
      color: 'text-red-500'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-labydent-cream to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in order-2 lg:order-1 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat mb-4 sm:mb-6 text-center lg:text-left">
              <span className="labydent-text-gradient">Sobre Labydent Chapala - Tu Clínica Dental de Confianza</span>
            </h2>
            
            <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 font-medium text-center lg:text-left">
              {t('about.subtitle')}
            </h3>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-center lg:text-left">
              {t('about.text1')}
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
              {t('about.text2')}
            </p>

            {/* Mission Values - Responsive */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-labydent-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-sm sm:text-base">{t('hero.mision')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.descripcion')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-labydent-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-sm sm:text-base">{t('hero.Vision')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.hola')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Features - Responsive */}
          <div className="animate-scale-in order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none">
            {/* Main Visual */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl mb-6 sm:mb-8">
              <div className="text-center mb-4 sm:mb-6">
                <img 
                  src="/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png" 
                  alt="Labydent Team - Equipo profesional de dentistas en Chapala" 
                  className="h-16 sm:h-20 lg:h-24 w-auto mx-auto mb-3 sm:mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white font-montserrat">
                  Equipo Profesional 
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Especialistas certificados comprometidos con tu salud
                </p>
              </div>

              {/* Decorative elements - Responsive */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-labydent-gold/20 rounded-full"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 bg-labydent-gold/30 rounded-full"></div>
            </div>

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="dental-card text-center group hover:scale-105 transition-all duration-300 min-h-[7rem] sm:min-h-[8rem]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col justify-center h-full">
                    <feature.icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 mx-auto mb-2 sm:mb-3 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white font-montserrat mb-1">
                      {feature.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {feature.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section - Responsive */}
        <div className="mt-16 sm:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-6 sm:mb-8 text-gray-800 dark:text-white px-4">
            Nuestros Valores Fundamentales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm sm:text-base">{t('hero.calidad')}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.tratamientos')}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm sm:text-base">{t('hero.atencion')}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">Cada paciente recibe un plan de tratamiento único y personalizado</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm sm:text-base">{t('hero.equipo')}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.cada')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
