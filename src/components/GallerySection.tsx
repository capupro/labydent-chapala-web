
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);

  // Imágenes de la galería con URLs reales
  const galleryImages = [
    {
      id: 1,
      title: 'Consulta Dental Moderna',
      description: 'Nuestras instalaciones equipadas con tecnología de vanguardia',
      imageUrl: 'lovable-uploads/2.jpg',
      category: 'Instalaciones'
    },
    {
      id: 2,
      title: 'Sonrisa Perfecta',
      description: 'Resultado de tratamiento de estética dental',
      imageUrl: 'lovable-uploads/3.jpg',
      category: 'Resultados'
    },
    {
      id: 3,
      title: 'Tecnología Avanzada',
      description: 'Equipo dental de última generación',
      imageUrl: 'lovable-uploads/4.jpg',
      category: 'Tecnología'
    },
    {
      id: 4,
      title: 'Atención Personalizada',
      description: 'Nuestro equipo de especialistas',
      imageUrl: 'lovable-uploads/5.jpg',
      category: 'Equipo'
    },
    {
      id: 5,
      title: 'Ambiente Cálido',
      description: 'Sala de espera cómoda y acogedora',
      imageUrl: 'lovable-uploads/6.jpg',
      category: 'manejo'
    },
    {
      id: 6,
      title: 'Tratamientos Especializados',
      description: 'Ortodoncia y estética dental',
      imageUrl: 'lovable-uploads/7.jpg'
      ,
      category: 'Tratamientos'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      rating: 5,
      text: 'testimonial.text1',
      treatment: 'Carillas de porcelana'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      rating: 5,
      text: 'testimonial.text2',
      treatment: 'Implante dental'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      rating: 5,
      text: 'testimonial.text3',
      treatment: 'Ortodoncia invisible'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const visibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentImageSlide + i) % galleryImages.length;
      images.push(galleryImages[index]);
    }
    return images;
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat mb-4 px-2">
            <span className="labydent-text-gradient">Galería de Labydent Chapala - Instalaciones y Resultados</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t('hero.conoce')}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-labydent-gold mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Carrusel de Imágenes - Responsive */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-center mb-6 sm:mb-8 text-gray-800 dark:text-white px-4">
            Nuestras Instalaciones y Tratamientos Dentales
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out">
                {/* Mobile: Show 1 image, Tablet: 2 images, Desktop: 3 images */}
                <div className="block sm:hidden w-full">
                  <div className="relative group">
                    <img
                      src={galleryImages[currentImageSlide].imageUrl}
                      alt={`${galleryImages[currentImageSlide].title} - ${galleryImages[currentImageSlide].description} en Labydent Chapala, clínica dental especializada`}
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-semibold text-base sm:text-lg">{galleryImages[currentImageSlide].title}</h4>
                        <p className="text-sm opacity-90">{galleryImages[currentImageSlide].description}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-labydent-gold text-xs rounded-full">
                          {galleryImages[currentImageSlide].category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tablet and Desktop view */}
                <div className="hidden sm:flex w-full">
                  {visibleImages().map((image, index) => (
                    <div key={image.id} className="w-1/2 lg:w-1/3 flex-shrink-0 px-1 sm:px-2">
                      <div className="relative group">
                        <img
                          src={image.imageUrl}
                          alt={`${image.title} - ${image.description} en Labydent Chapala, clínica dental especializada`}
                          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                            <h4 className="font-semibold text-sm sm:text-base lg:text-lg">{image.title}</h4>
                            <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{image.description}</p>
                            <span className="inline-block mt-1 sm:mt-2 px-2 py-1 bg-labydent-gold text-xs rounded-full">
                              {image.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Controles del carrusel - Touch friendly */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImageSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white dark:hover:bg-gray-800 rounded-full w-10 h-10 sm:w-12 sm:h-12"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImageSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white dark:hover:bg-gray-800 rounded-full w-10 h-10 sm:w-12 sm:h-12"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>

            {/* Indicadores - Responsive */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentImageSlide ? 'bg-labydent-gold' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-gradient-to-r from-labydent-cream to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-800 dark:text-white">
            Testimonios de Pacientes de Labydent Chapala
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white dark:bg-gray-800 shadow-lg border-0">
                      <CardContent className="p-8 text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                          "{t(testimonial.text)}"
                        </blockquote>
                        
                        {/* Author */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-labydent-gold">
                            {testimonial.treatment}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-labydent-gold' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('hero.listo')}
          </p>
          <Button 
            size="lg"
            className="labydent-gradient text-white hover:opacity-90 transition-all duration-200"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
             {t('hero.medio')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
