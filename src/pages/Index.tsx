
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead />
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <GallerySection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
