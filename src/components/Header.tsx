
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img 
              src="/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png" 
              alt="Labydent Chapala - Clínica Dental Especializada en Chapala, Jalisco" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
              loading="lazy"
            />
            <div className="font-montserrat font-bold text-lg sm:text-xl lg:text-2xl text-labydent-gold">
              Labydent
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-labydent-gold dark:hover:text-labydent-gold-light transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Controls - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="hidden sm:flex items-center space-x-1 h-8 sm:h-9 px-2 sm:px-3"
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-medium text-xs sm:text-sm">{language.toUpperCase()}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hidden sm:flex h-8 sm:h-9 w-8 sm:w-9"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
              ) : (
                <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
              )}
            </Button>

            {/* CTA Button */}
            <Button 
              className="hidden md:flex labydent-gradient text-white hover:opacity-90 transition-opacity h-9 lg:h-10 px-3 lg:px-4 text-sm lg:text-base"
              onClick={() => scrollToSection('#contact')}
            >
              <span className="hidden lg:inline">{t('hero.cta')}</span>
              <span className="lg:hidden">Cita</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden h-8 w-8 sm:h-9 sm:w-9"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced Responsive */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 backdrop-blur-md">
            <nav className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-labydent-gold py-3 sm:py-4 font-medium text-base sm:text-lg border-b border-gray-100 dark:border-gray-800 last:border-b-0 transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  className="w-full labydent-gradient text-white hover:opacity-90 transition-opacity h-12 text-base mb-4"
                  onClick={() => {
                    scrollToSection('#contact');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('hero.cta')}
                </Button>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="flex items-center space-x-2 h-10 px-4"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="h-10 w-10"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
