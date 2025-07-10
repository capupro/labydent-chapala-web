
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation

    'hero.hola': 'Ser la clínica dental líder en Chapala, reconocida por nuestra innovación y calidez humana.fg',
    'hero.Vision': 'Vision',
    'hero.equipo': 'Equipo Especializado',
    'hero.item': 'Tambien ofrecemos',
    'hero.calidad': 'calidad certificada',
    'hero.tratamientos': 'Tratamientos con los más altos estándares de calidad y seguridad.',
    'hero.galeria': 'Galeria y testimonios',
    'hero.conoce': 'Conoce nuestras instalaciones y las experiencias de nuestros pacientes',
     'hero.dicen': 'lo que dicen nuetros pacientes',
    'testimonial.text1':"Excelente atención, el Dr. y su equipo son muy profesionales. Mi experiencia fue increíble, quedé muy satisfecha con mi tratamiento.",
    'testimonial.text2':"La mejor clínica dental en Chapala. Tecnología de punta y un trato muy humano. Definitivamente la recomiendo.",
    'testimonial.text3':"Estoy encantada con mi nueva sonrisa. El equipo de Labydent hizo un trabajo excepcional. Muchas gracias!",
    'hero.listo': '¿listo para transformar tu sonrisa?',
    'hero.agenda': 'Agenda tu consulta gratuita',
    'hero.llamanos': 'Llámanos directamente y agenda tu consulta. Nuestro equipo te atenderá con gusto.',
    'hero.nuestra': 'Nuestra ubicacion',
    'hero.emergencia': '¿Emergencia dental?',
    'hero.enlaces': 'Enlaces Rapidos',



    'hero.mision': 'Mision',
    'hero.contacto': 'Nuestro Compromiso',
    'hero.atencion': 'Atencion personalizada',
    'hero.profecionales': 'profecionales con especializacion en diferentes areas odontologicas',
    'hero.paciente': 'paciente',
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.gallery': 'Galería',
    'nav.about': 'Nosotros',
    'hero.cosa': 'endodoncia',
    'nav.blog': 'Blog',
    'hero.medio': 'Contacto',
     'hero.cita': '¡Agenda tu cita ahora!',
      'hero.contactanos': 'Contáctanos durante nuestros horarios de atención para casos urgentes.',
      'hero.llamar': 'Llamar por emergencia.',

    'nav.contact': 'Contacto',
    'hero.descripcion': 'Transformando sonrisas y mejorando la calidad de vida de nuestros pacientes con excelentes tratamientos ',


    
    // Hero Section
    'hero.title': 'Tu sonrisa es nuestra pasión',
    'hero.subtitle': 'Clínica dental de excelencia en Chapala, Jalisco. Especialistas en odontología general y estética con tecnología de vanguardia.',
    'hero.cta': 'Agenda tu Cita',
    'hero.cta2': 'Conoce Más',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Tratamientos dentales profesionales con tecnología de última generación',
    'services.general': 'Odontología General',
    'services.general.desc': 'Revisiones, limpiezas y tratamientos preventivos para mantener tu salud bucal óptima.',
    'services.aesthetic': 'Estética Dental',
    'services.aesthetic.desc': 'Carillas, blanqueamiento y diseño de sonrisa para transformar tu imagen.',
    'services.orthodontics': 'Ortodoncia',
    'services.orthodontics.desc': 'Brackets tradicionales e invisibles para alinear perfectamente tus dientes.',
    'services.implants': 'Implantes Dentales',
    'services.implants.desc': 'Reemplazo de dientes perdidos con implantes de titanio de máxima calidad.',
    
    // About
    'about.title': 'Sobre Labydent',
    'about.subtitle': 'Más de 15 años transformando sonrisas en Chapala',
    'about.text1': 'En Labydent, combinamos experiencia, tecnología y calidez humana para brindarte la mejor atención dental. Nuestro equipo de especialistas se compromete con tu salud bucal y bienestar.',
    'about.text2': 'Utilizamos equipos de última generación y técnicas innovadoras para garantizar tratamientos efectivos, cómodos y duraderos. Tu confianza es nuestro mayor logro.',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Estamos aquí para cuidar tu sonrisa',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.hours': 'Horarios',
    'contact.hours.text': 'Lun - Vie: 9:00 - 18:00\nSáb: 9:00 - 14:00',
    'contact.address': 'Dirección',
    'contact.address.text': 'Chapala, Jalisco, México',
    
    // Form
    'form.name': 'Nombre Completo',
    'form.email': 'Correo Electrónico',
    'form.phone': 'Teléfono',
    'form.message': 'Mensaje',
    'form.send': 'Enviar Mensaje',
    
    // Blog
    'blog.title': 'Blog Dental',
    'blog.subtitle': 'Consejos y novedades para tu salud bucal',
    'blog.readmore': 'Leer Más',
    
    // Footer
    'footer.text': '© 2024 Labydent Chapala. Todos los derechos reservados.',
    'footer.follow': 'Síguenos en nuestras redes sociales',
  },
  en: {
    // Navigation
    
     
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Us',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.galeria': 'Gallery and testimonials',
    'hero.conoce': 'Learn about our facilities and our patients experiences',
    'hero.dicen': 'Learn about our facilities and our patients experiences',
    'hero.llamanos': 'Call us directly and schedule your appointment. Our team will be happy to assist you.',
    'hero.emergencia': 'Dental emergency ?',
    'hero.contactanos': ' Contact us during our business hours for urgent cases.',
     'hero.llamar': 'Call for emergency',
         'hero.enlaces': 'Quick links',

      
    
    // Hero Section
    'hero.Vision': 'Vision',
    'hero.hola': 'To be the leading dental clinic in Chapala, recognized for our innovation and human warmth.fg',
    
    'hero.mision': 'Mission',
    'hero.equipo': 'specialized equipment s',
    'hero.contacto': 'our commitment',
    'hero.item': 'We also offer',
    'hero.cosa': 'endodontics',
    'hero.medio': 'Contact',
    'hero.cita': 'Schedule your appointment now!',


    'hero.calidad': 'certified quality',
    'hero.atencion': 'personalized attention',
     'hero.profecionales': 'professionals with specialization in different dental areas',
     'hero.agenda': 'schedule your consultation',
    'hero.tratamientos': 'Treatments with the highest standards of quality and safety.',

    'hero.title': 'Your smile is our passion',
    'hero.subtitle': 'Excellence dental clinic in Chapala, Jalisco. Specialists in general and aesthetic dentistry with cutting-edge technology.',
    'hero.cta': 'Book Appointment',
    'hero.cta2': 'Learn More',
    'hero.descripcion': 'Transforming smiles and improving the quality of life of our patients with excellent treatments ',
    'hero.listo': 'Ready to transform your smile?',
    'hero.nuestra': 'Our location',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional dental treatments with state-of-the-art technology',
    'services.general': 'General Dentistry',
    'services.general.desc': 'Check-ups, cleanings and preventive treatments to maintain optimal oral health.',
    'services.aesthetic': 'Aesthetic Dentistry',
    'services.aesthetic.desc': 'Veneers, whitening and smile design to transform your image.',
    'services.orthodontics': 'Orthodontics',
    'services.orthodontics.desc': 'Traditional and invisible braces to perfectly align your teeth.',
    'services.implants': 'Dental Implants',
    'services.implants.desc': 'Replacement of lost teeth with highest quality titanium implants.',
    
    // About
    'about.title': 'About Labydent',
    'about.subtitle': 'Over 15 years transforming smiles in Chapala',
    'about.text1': 'At Labydent, we combine experience, technology and human warmth to provide you with the best dental care. Our team of specialists is committed to your oral health and wellbeing.',
    'about.text2': 'We use state-of-the-art equipment and innovative techniques to guarantee effective, comfortable and lasting treatments. Your trust is our greatest achievement.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to take care of your smile',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Hours',
    'contact.hours.text': 'Mon - Fri: 9:00 - 18:00\nSat: 9:00 - 14:00',
    'contact.address': 'Address',
    'contact.address.text': 'Chapala, Jalisco, Mexico',
    
    // Form
    'form.name': 'Full Name',
    'testimonial.text1': 'Excellent care, the doctor and his team are very professional. My experience was incredible, I was very satisfied with my treatment.',
    'testimonial.text2':"The best dental clinic in Chapala. Cutting-edge technology and very friendly service. I definitely recommend it.",
        'testimonial.text3':"I'm delighted with my new smile. The Labydent team did an exceptional job. Thank you so much!",


    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.send': 'Send Message',
    
    // Blog
    'blog.title': 'Dental Blog',
    'blog.subtitle': 'Tips and news for your oral health',
    'blog.readmore': 'Read More',
    
    // Footer
    'footer.text': '© 2024 Labydent Chapala. All rights reserved.',
    'footer.follow': 'Follow us on social media',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
