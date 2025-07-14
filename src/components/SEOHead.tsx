import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Labydent Chapala - Clínica Dental de Excelencia | Odontología Especializada",
  description = "Labydent Chapala - Clínica dental de alta calidad en Chapala, Jalisco. Especialistas en odontología general, estética dental, ortodoncia e implantes dentales. Tu sonrisa es nuestra pasión.",
  image = "https://labydentchapala.com/lovable-uploads/52a908f0-c5a9-48f9-bb71-99a5e75234eb.png",
  url = "https://labydentchapala.com",
  type = "website",
  keywords = "dentista Chapala, clínica dental Chapala, odontología estética, implantes dentales, ortodoncia Chapala, limpieza dental, dentista Jalisco, estética dental Chapala, cuidado dental",
  author = "Labydent Chapala",
  publishedTime,
  modifiedTime
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Labydent Chapala",
    "description": description,
    "url": url,
    "logo": image,
    "image": image,
    "telephone": "+52-376-765-4321",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Madero 232",
      "addressLocality": "Chapala",
      "addressRegion": "Jalisco",
      "postalCode": "45900",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.2968",
      "longitude": "-103.1946"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "20.2968",
        "longitude": "-103.1946"
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Chapala, Jalisco, México"
    },
    "medicalSpecialty": [
      "Odontología General",
      "Estética Dental",
      "Ortodoncia",
      "Implantes Dentales",
      "Endodoncia",
      "Periodoncia"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "MXN",
    "hasMap": "https://maps.google.com/?q=Chapala,+Jalisco,+Mexico"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Labydent Chapala - Clínica Dental" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="Labydent Chapala" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="Labydent Chapala - Clínica Dental" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && <meta property="article:author" content={author} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-navbutton-color" content="#D4AF37" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="MX-JAL" />
      <meta name="geo.placename" content="Chapala, Jalisco" />
      <meta name="geo.position" content="20.2968;-103.1946" />
      <meta name="ICBM" content="20.2968, -103.1946" />
    </Helmet>
  );
};

export default SEOHead;