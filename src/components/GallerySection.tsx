
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder data - replace with actual patient photos and testimonials
  const beforeAfter = [
    {
      id: 1,
      title: 'Sonrisa Perfecta',
      description: 'Tratamiento completo de estética dental',
      category: 'Estética'
    },
    {
      id: 2,
      title: 'Ortodoncia Exitosa',
      description: 'Alineación dental con brackets invisibles',
      category: 'Ortodoncia'
    },
    {
      id: 3,
      title: 'Implante Dental',
      description: 'Reemplazo de pieza perdida',
      category: 'Implantes'
    },
    {
      id: 4,
      title: 'Blanqueamiento',
      description: 'Aclaramiento dental profesional',
      category: 'Estética'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      rating: 5,
      text: 'Excelente atención, el Dr. y su equipo son muy profesionales. Mi experiencia fue increíble, quedé muy satisfecha con mi tratamiento.',
      treatment: 'Carillas de porcelana'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      rating: 5,
      text: 'La mejor clínica dental en Chapala. Tecnología de punta y un trato muy humano. Definitivamente la recomiendo.',
      treatment: 'Implante dental'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      rating: 5,
      text: 'Estoy encantada con mi nueva sonrisa. El equipo de Labydent hizo un trabajo excepcional. Muchas gracias!',
      treatment: 'Ortodoncia invisible'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="labydent-text-gradient">Galería y Testimonios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce los resultados que hemos logrado y las experiencias de nuestros pacientes
          </p>
          <div className="w-24 h-1 bg-labydent-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Before/After Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-800 dark:text-white">
            Transformaciones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfter.map((item, index) => (
              <Card 
                key={item.id}
                className="dental-card group overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-labydent-gold/20 to-labydent-gold-light/20 relative overflow-hidden">
                  {/* Placeholder for before/after image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-labydent-gold/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">✨</span>
                      </div>
                      <p className="text-labydent-gold font-medium">{item.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-gradient-to-r from-labydent-cream to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-800 dark:text-white">
            Lo que dicen nuestros pacientes
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
                          "{testimonial.text}"
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
            ¿Listo para transformar tu sonrisa?
          </p>
          <Button 
            size="lg"
            className="labydent-gradient text-white hover:opacity-90 transition-all duration-200"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Agenda tu consulta gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
