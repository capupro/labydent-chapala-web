
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    '1': {
      title: '5 Consejos para Mantener una Sonrisa Saludable',
      content: `
        <p>Mantener una sonrisa saludable es fundamental para tu bienestar general. Aquí te compartimos 5 consejos esenciales que puedes seguir en casa:</p>
        
        <h3>1. Cepillado Correcto</h3>
        <p>Cepilla tus dientes al menos dos veces al día con una pasta dental con flúor. Utiliza movimientos suaves y circulares, y no olvides cepillar la lengua para eliminar las bacterias.</p>
        
        <h3>2. Uso del Hilo Dental</h3>
        <p>El hilo dental es esencial para remover la placa y los restos de comida entre los dientes, donde el cepillo no puede llegar. Úsalo diariamente antes del cepillado nocturno.</p>
        
        <h3>3. Enjuague Bucal Antibacteriano</h3>
        <p>Complementa tu rutina con un enjuague bucal antibacteriano para eliminar las bacterias restantes y mantener tu aliento fresco.</p>
        
        <h3>4. Alimentación Balanceada</h3>
        <p>Evita el exceso de azúcares y alimentos procesados. Incluye en tu dieta frutas, verduras, lácteos y alimentos ricos en calcio y vitaminas.</p>
        
        <h3>5. Visitas Regulares al Dentista</h3>
        <p>La prevención es clave. Visita a tu dentista cada 6 meses para limpiezas profesionales y detección temprana de problemas.</p>
        
        <p>En Labydent Chapala, nuestro equipo de especialistas está listo para ayudarte a mantener tu sonrisa perfecta. ¡Agenda tu cita hoy mismo!</p>
      `,
      date: '2024-01-15',
      author: 'Dr. Labydent',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    '2': {
      title: 'Mitos y Verdades sobre el Blanqueamiento Dental',
      content: `
        <p>El blanqueamiento dental es uno de los tratamientos estéticos más populares, pero también está rodeado de mitos. Aquí separamos los hechos de la ficción:</p>
        
        <h3>MITO: El blanqueamiento daña el esmalte</h3>
        <p><strong>VERDAD:</strong> Cuando se realiza correctamente por un profesional, el blanqueamiento dental es seguro y no daña el esmalte dental.</p>
        
        <h3>MITO: Los resultados duran para siempre</h3>
        <p><strong>VERDAD:</strong> Los resultados pueden durar de 1-3 años, dependiendo de tus hábitos alimenticios y de higiene oral.</p>
        
        <h3>MITO: Todos los productos caseros son efectivos</h3>
        <p><strong>VERDAD:</strong> Muchos productos caseros pueden ser abrasivos o inefectivos. Es mejor consultar con un profesional.</p>
        
        <h3>VERDAD: El blanqueamiento profesional es más efectivo</h3>
        <p>Los tratamientos realizados en consulta ofrecen resultados más rápidos, seguros y duraderos que los productos de venta libre.</p>
        
        <h3>VERDAD: No todos son candidatos</h3>
        <p>Personas con caries, enfermedad periodontal o dientes muy sensibles deben tratar estos problemas antes del blanqueamiento.</p>
        
        <p>En Labydent utilizamos técnicas avanzadas y seguras para lograr la sonrisa blanca que deseas. ¡Consulta con nuestros especialistas!</p>
      `,
      date: '2024-01-10',
      author: 'Dr. Labydent',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    '3': {
      title: 'Tecnología Digital en Odontología: El Futuro es Hoy',
      content: `
        <p>La odontología digital ha revolucionado la forma en que diagnosticamos y tratamos a nuestros pacientes. Conoce las tecnologías que utilizamos en Labydent:</p>
        
        <h3>Radiografías Digitales</h3>
        <p>Ofrecen imágenes más claras con 90% menos radiación que las radiografías tradicionales, permitiendo diagnósticos más precisos y seguros.</p>
        
        <h3>Escáner Intraoral 3D</h3>
        <p>Eliminamos las incómodas impresiones tradicionales. Con el escáner 3D creamos modelos digitales precisos de tu boca en minutos.</p>
        
        <h3>Diseño de Sonrisa Digital</h3>
        <p>Puedes ver cómo lucirá tu nueva sonrisa antes de comenzar el tratamiento, gracias a nuestro software de diseño avanzado.</p>
        
        <h3>Cirugía Guiada por Computadora</h3>
        <p>Para implantes dentales, utilizamos guías quirúrgicas computarizadas que aumentan la precisión y reducen el tiempo de recuperación.</p>
        
        <h3>Beneficios de la Tecnología Digital:</h3>
        <ul>
          <li>Diagnósticos más precisos</li>
          <li>Tratamientos menos invasivos</li>
          <li>Mayor comodidad para el paciente</li>
          <li>Resultados más predecibles</li>
          <li>Menor tiempo de tratamiento</li>
        </ul>
        
        <p>En Labydent Chapala invertimos constantemente en tecnología de vanguardia para ofrecerte la mejor atención dental. ¡Experimenta la diferencia de la odontología digital!</p>
      `,
      date: '2024-01-05',
      author: 'Dr. Labydent',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
              <Link to="/" className="text-labydent-gold hover:underline">
                Volver al inicio
              </Link>
            </div>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEOHead 
          title={`${post.title} | Labydent Chapala`}
          description={post.content.replace(/<[^>]*>/g, '').substring(0, 160)}
          url={`https://labydentchapala.com/blog/${id}`}
          type="article"
          publishedTime={post.date}
          keywords={`${post.title}, dentista Chapala, odontología, salud dental, Labydent`}
        />
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <WhatsAppFloat />
          
          <article className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Back button */}
              <Link to="/" className="inline-flex items-center text-labydent-gold hover:text-labydent-gold-light mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al blog
              </Link>

              {/* Hero image */}
              <div className="mb-8">
                <img
                  src={post.image}
                  alt={`${post.title} - Consejos de salud dental de Labydent Chapala`}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* Article header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800 dark:text-white">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
              </header>

              {/* Article content */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-labydent-gold prose-a:text-labydent-gold"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </CardContent>
              </Card>

              {/* Call to action */}
              <Card className="bg-gradient-to-r from-labydent-gold/10 to-labydent-gold-light/10 border-labydent-gold/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-800 dark:text-white">
                    ¿Necesitas más información?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Nuestro equipo de especialistas está listo para ayudarte con cualquier consulta sobre tu salud dental.
                  </p>
                  <Button 
                    size="lg"
                    className="labydent-gradient text-white hover:opacity-90 transition-opacity"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Agenda tu consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </article>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default BlogPost;
