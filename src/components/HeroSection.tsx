
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
    <section id="home" className="min-h-screen hero-section flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-labydent-gold rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-labydent-gold rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-labydent-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 leading-tight">
              <span className="labydent-text-gradient">{t('hero.title')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="labydent-gradient text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                onClick={() => scrollToSection('#contact')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t('hero.cta')}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-labydent-gold text-labydent-gold hover:bg-labydent-gold hover:text-white transition-all duration-200"
                onClick={() => scrollToSection('#about')}
              >
                {t('hero.cta2')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-labydent-gold font-montserrat">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-labydent-gold font-montserrat">5000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Sonrisas transformadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-labydent-gold font-montserrat">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:order-last animate-scale-in">
            <div className="relative bg-gradient-to-br from-labydent-cream to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for hero image - replace with actual dental clinic photos */}
              <div className="bg-gradient-to-br from-labydent-gold/20 to-labydent-gold-light/20 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png" 
                    alt="Labydent Excellence" 
                    className="h-32 w-auto mx-auto mb-4 opacity-80"
                  />
                  <p className="text-labydent-gold font-medium">Excelencia Dental</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chapala, Jalisco</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <div className="w-6 h-6 bg-labydent-gold rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-labydent-gold rounded-full p-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#services')}
            className="text-labydent-gold hover:text-labydent-gold-light transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
