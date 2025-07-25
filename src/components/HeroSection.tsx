
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-section flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern - Responsive */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 sm:top-10 lg:top-20 left-4 sm:left-10 lg:left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-labydent-gold rounded-full"></div>
        <div className="absolute top-20 sm:top-32 lg:top-40 right-8 sm:right-16 lg:right-32 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-labydent-gold rounded-full"></div>
        <div className="absolute bottom-16 sm:bottom-24 lg:bottom-32 left-1/4 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-labydent-gold rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1 w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold mb-4 sm:mb-6 leading-tight">
              <span className="labydent-text-gradient">Clínica Dental en Chapala</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
              <Button 
                size="lg"
                className="labydent-gradient text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105 w-full xs:w-auto min-h-[3rem] text-base sm:text-lg"
                onClick={() => scrollToSection('#contact')}
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t('hero.cta')}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-labydent-gold text-labydent-gold hover:bg-labydent-gold hover:text-white transition-all duration-200 w-full xs:w-auto min-h-[3rem] text-base sm:text-lg"
                onClick={() => scrollToSection('#about')}
              >
                {t('hero.cta2')}
              </Button>
            </div>

            {/* Stats - Responsive Grid */}
            <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-labydent-gold font-montserrat">15+</div>
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 mt-1">Años</div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-labydent-gold font-montserrat">5000+</div>
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 mt-1">Sonrisas</div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-labydent-gold font-montserrat">100%</div>
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Image/Visual - Responsive */}
          <div className="relative animate-scale-in order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <div className="relative bg-gradient-to-br from-labydent-cream to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
              {/* Imagen responsive */}
              <div className="bg-gradient-to-br from-labydent-gold/20 to-labydent-gold-light/20 rounded-xl sm:rounded-2xl aspect-video flex items-center justify-center p-4">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png" 
                    alt="Labydent Chapala - Clínica Dental de Excelencia en Chapala, Jalisco" 
                    className="h-12 sm:h-16 lg:h-20 w-auto mx-auto mb-2 sm:mb-4 opacity-80"
                    loading="lazy"
                  />
                  <p className="text-labydent-gold font-medium text-sm sm:text-base">Excelencia Dental</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Chapala, Jalisco</p>
                </div>
              </div>

              {/* Floating Elements - Responsive */}
              <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-lg">
                <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-labydent-gold rounded-full"></div>
              </div>
              <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 bg-labydent-gold rounded-full p-1 sm:p-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#services')}
            className="text-labydent-gold hover:text-labydent-gold-light transition-colors p-2"
            aria-label="Scroll to services"
          >
            <ArrowDown className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
