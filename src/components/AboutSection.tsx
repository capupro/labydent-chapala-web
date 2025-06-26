
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
    <section id="about" className="py-20 bg-gradient-to-br from-labydent-cream to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              <span className="labydent-text-gradient">{t('about.title')}</span>
            </h2>
            
            <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
              {t('about.subtitle')}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              {t('about.text1')}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              {t('about.text2')}
            </p>

            {/* Mission Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-labydent-gold rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Misión</h4>
                  <p className="text-gray-600 dark:text-gray-300">Transformar sonrisas y mejorar la calidad de vida de nuestros pacientes con tratamientos de excelencia.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-labydent-gold rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Visión</h4>
                  <p className="text-gray-600 dark:text-gray-300">Ser la clínica dental líder en Chapala, reconocida por nuestra innovación y calidez humana.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Features */}
          <div className="animate-scale-in">
            {/* Main Visual */}
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl mb-8">
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png" 
                  alt="Labydent Team" 
                  className="h-24 w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-montserrat">
                  Equipo Profesional
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Especialistas certificados comprometidos con tu salud
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-labydent-gold/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-labydent-gold/30 rounded-full"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="dental-card text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <feature.icon className={`h-8 w-8 mx-auto mb-3 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-2xl font-bold text-gray-800 dark:text-white font-montserrat mb-1">
                      {feature.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold font-montserrat mb-8 text-gray-800 dark:text-white">
            Nuestro Compromiso
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Calidad Certificada</h4>
              <p className="text-gray-600 dark:text-gray-300">Tratamientos con los más altos estándares de calidad y seguridad.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Atención Personalizada</h4>
              <p className="text-gray-600 dark:text-gray-300">Cada paciente recibe un plan de tratamiento único y personalizado.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Equipo Especializado</h4>
              <p className="text-gray-600 dark:text-gray-300">Profesionales con especialización en diferentes áreas odontológicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
