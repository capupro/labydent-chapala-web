
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: {
        es: '5 Consejos para Mantener una Sonrisa Saludable',
        en: '5 Tips to Maintain a Healthy Smile'
      },
      excerpt: {
        es: 'Descubre los secretos para mantener tus dientes sanos y tu sonrisa radiante con estos consejos profesionales que puedes aplicar en casa.',
        en: 'Discover the secrets to keeping your teeth healthy and your smile radiant with these professional tips you can apply at home.'
      },
      category: 'Prevención',
      date: '2024-01-15',
      author: 'Dr. Labydent',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: {
        es: 'Mitos y Verdades sobre el Blanqueamiento Dental',
        en: 'Myths and Truths about Dental Whitening'
      },
      excerpt: {
        es: 'Separamos los hechos de la ficción sobre el blanqueamiento dental. Conoce qué es seguro y efectivo para aclarar tus dientes.',
        en: 'We separate facts from fiction about dental whitening. Learn what is safe and effective for whitening your teeth.'
      },
      category: 'Estética',
      date: '2024-01-10',
      author: 'Dr. Labydent',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: {
        es: 'Tecnología Digital en Odontología: El Futuro es Hoy',
        en: 'Digital Technology in Dentistry: The Future is Today'
      },
      excerpt: {
        es: 'Explora cómo las nuevas tecnologías están revolucionando los tratamientos dentales, haciéndolos más precisos, cómodos y eficaces.',
        en: 'Explore how new technologies are revolutionizing dental treatments, making them more precise, comfortable and effective.'
      },
      category: 'Tecnología',
      date: '2024-01-05',
      author: 'Dr. Labydent',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const { language } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-labydent-cream to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="labydent-text-gradient">{t('blog.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
          <div className="w-24 h-1 bg-labydent-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="dental-card group hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-labydent-gold text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <CardTitle className="text-xl font-montserrat group-hover:text-labydent-gold transition-colors">
                  {post.title[language]}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt[language]}
                </CardDescription>
                
                <Link to={`/blog/${post.id}`}>
                  <Button 
                    variant="ghost" 
                    className="text-labydent-gold hover:text-labydent-gold-dark p-0 h-auto font-medium group"
                  >
                    {t('blog.readmore')}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-800 dark:text-white">
            Temas Populares
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Implantes Dentales', 'Ortodoncia Invisible', 'Blanqueamiento', 
              'Cuidado Preventivo', 'Estética Dental', 'Endodoncia', 
              'Periodoncia', 'Odontopediatría'
            ].map((topic) => (
              <Badge 
                key={topic}
                variant="outline" 
                className="text-labydent-gold border-labydent-gold hover:bg-labydent-gold hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
