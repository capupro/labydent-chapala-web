
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto. ¡Gracias por tu interés!",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+52 376 123 4567',
      href: 'tel:+523761234567',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@labydentchapala.com',
      href: 'mailto:info@labydentchapala.com',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: t('contact.hours.text'),
      href: null,
      color: 'text-purple-600'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      content: t('contact.address.text'),
      href: 'https://maps.google.com/?q=Chapala,Jalisco,Mexico',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="labydent-text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-labydent-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold font-montserrat mb-8 text-gray-800 dark:text-white">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="dental-card hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${info.color}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-labydent-gold transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps Placeholder */}
            <Card className="dental-card">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-white">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-labydent-gold/20 to-labydent-gold-light/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-labydent-gold mx-auto mb-2" />
                    <p className="text-labydent-gold font-medium">Google Maps</p>
                    <p className="text-sm text-gray-600">Chapala, Jalisco</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="dental-card shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-gray-800 dark:text-white">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                      {t('form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 dark:border-gray-600 focus:border-labydent-gold focus:ring-labydent-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      {t('form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 dark:border-gray-600 focus:border-labydent-gold focus:ring-labydent-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                      {t('form.phone')}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 dark:border-gray-600 focus:border-labydent-gold focus:ring-labydent-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      {t('form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 dark:border-gray-600 focus:border-labydent-gold focus:ring-labydent-gold resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full labydent-gradient text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t('form.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                asChild
              >
                <a href="https://wa.me/523761234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-labydent-gold text-labydent-gold hover:bg-labydent-gold hover:text-white transition-colors"
                asChild
              >
                <a href="tel:+523761234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-800 dark:text-white">
            ¿Emergencia Dental?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contamos con servicio de emergencias. Llámanos las 24 horas para casos urgentes.
          </p>
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white transition-colors"
            asChild
          >
            <a href="tel:+523761234567">
              <Phone className="mr-2 h-5 w-5" />
              Emergencias 24/7
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
