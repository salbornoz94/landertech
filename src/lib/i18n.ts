export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    projects: string;
    services: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    titleLines: string[];
    subtitle: string;
    servicesButton: string;
    contactButton: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };

  contact: {
    title: string;
    subtitle: string;
    conversationTitle: string;
    conversationDescription: string;
    formTitle: string;
    formDescription: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    sendMessage: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    emailUs: string;
    callUs: string;
    location: string;
    followUs: string;
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    copyright: string;
    location: string;
  };
  clients: {
    title: string;
  };
  finalCta: {
    title: string;
    button: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      projects: 'PROYECTOS',
      services: 'SERVICIOS',
      faq: 'FAQ',
      contact: 'CONTACTO',
    },
    hero: {
      title: 'Software que hace la diferencia',
      titleLines: ['Software', 'que hace', 'la diferencia'],
      subtitle: 'Diseñamos y desarrollamos software que resuelve problemas reales. Potenciamos tus ideas con tecnología moderna, experiencia de usuario y foco en resultados.',
      servicesButton: 'Servicios',
      contactButton: 'Contáctanos',
    },
    cta: {
      title: '¿Quieres hacer crecer tu negocio?',
      description: 'No pierdas la oportunidad de mejorar tus resultados de manera rápida y eficiente. Accede a soluciones para posicionar tu negocio online.',
      button: 'Contactanos',
    },
    projects: {
      title: 'Nuestros proyectos destacados',
      subtitle: 'Descubre cómo transformamos negocios con sitios web y aplicaciones web, tiendas online y sistemas de gestión personalizados. Creamos soluciones diseñadas para mejorar la experiencia del usuario y hacer tus procesos digitales más simples y efectivos.',
      viewProject: 'Ver proyecto',
    },
    services: {
      title: 'Qué hacemos',
      subtitle: 'Ayudamos a las empresas a modernizarse, mejorar sus procesos internos y crecer. Diseñamos soluciones digitales personalizadas para ayudar a tu negocio a alcanzar su máximo potencial.',
      description: 'Descubre cómo podemos ser el motor de tu transformación digital.',
      button: 'Servicios',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para transformar tu presencia digital? Contáctanos hoy y conversemos sobre cómo podemos ayudar a tu negocio a crecer online.',
      conversationTitle: 'Iniciemos una conversación',
      conversationDescription: 'Estamos aquí para ayudarte a crear experiencias digitales increíbles. Ya sea que necesites un nuevo sitio web, quieras mejorar el existente o tengas preguntas sobre nuestros servicios, nos encantaría escucharte.',
      formTitle: 'Envíanos un mensaje',
      formDescription: 'Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.',
      name: 'Nombre *',
      email: 'Email *',
      phone: 'Teléfono (opcional)',
      message: 'Mensaje *',
      sendMessage: 'Enviar mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje enviado exitosamente!',
      successMessage: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
      emailUs: 'Envíanos un email',
      callUs: 'Llámanos',
      location: 'Ubicación',
      followUs: 'Síguenos',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      questions: [
        {
          question: '¿Por qué mi empresa necesita una web profesional?',
          answer: 'Tu web es tu carta de presentación digital 24/7. Transmite profesionalismo, credibilidad y facilita que tus clientes te encuentren. En 2025, no tener web profesional es como no tener teléfono en los 90s.'
        },
        {
          question: '¿Qué pasa si mi negocio crece y necesito más funcionalidades?',
          answer: 'Perfecto, eso significa que tu web está funcionando. Diseñamos sitios escalables que pueden crecer contigo. Podemos agregar nuevas secciones, funcionalidades avanzadas, integrar sistemas de gestión o crear aplicaciones web personalizadas.'
        },
        {
          question: '¿Mi web actual está funcionando mal, se puede mejorar?',
          answer: 'Si tu web no te genera consultas, carga lenta o se ve anticuada, es momento de renovarla. Analizamos tu situación actual y creamos una estrategia para maximizar tu presencia digital sin perder tu posicionamiento.'
        },
        {
          question: '¿Ofrecen soporte después de entregar la web?',
          answer: 'Absolutamente. No te dejamos solo después de la entrega. Ofrecemos soporte técnico, actualizaciones de seguridad y podemos ayudarte con cambios menores. Tu tranquilidad es importante para nosotros.'
        },
        {
          question: '¿Qué incluye el desarrollo de una web profesional?',
          answer: 'Diseño personalizado, programación a medida, optimización para móviles, velocidad optimizada, SEO básico, formularios de contacto, integración con redes sociales y capacitación para que puedas gestionar contenido básico.'
        },
        {
          question: '¿Cuánto tiempo lleva crear una web desde cero?',
          answer: 'Cada proyecto es único y analizamos los tiempos personalizadamente según la complejidad y requerimientos específicos. No hacemos plantillas genéricas; cada sitio es diseñado a medida para tu empresa y objetivos de negocio.'
        }
      ]
    },
    footer: {
      copyright: '© 2025 LanderTech',
      location: 'Estamos en Tucumán, Argentina',
    },
    clients: {
      title: 'Empresas que confían en nosotros',
    },
    finalCta: {
      title: '¿TIENES UNA IDEA DE NEGOCIO?',
      button: 'CONTÁCTANOS',
    },
  },
  en: {
    nav: {
      projects: 'PROJECTS',
      services: 'SERVICES',
      faq: 'FAQ',
      contact: 'CONTACT',
    },
    hero: {
      title: 'Software that makes a difference',
      titleLines: ['Software', 'that makes', 'a difference'],
      subtitle: 'We design and develop software that solves real problems. We empower your ideas with modern technology, great user experience, and a focus on results.',
      servicesButton: 'Services',
      contactButton: 'Contact us',
    },
    cta: {
      title: 'Want to grow your business?',
      description: "Don't miss the opportunity to improve your results quickly and efficiently. Access solutions to position your business online.",
      button: 'Check out our plans',
    },
    projects: {
      title: 'Our featured projects',
      subtitle: 'Discover how we transform businesses with websites and web applications, online stores, and custom management systems. We create solutions designed to improve user experience and make your digital processes simpler and more effective.',
      viewProject: 'View project',
    },
    services: {
      title: 'What we do',
      subtitle: 'We help companies modernize, improve their internal processes, and grow. We design custom digital solutions to help your business reach its full potential.',
      description: 'Discover how we can be the engine of your digital transformation.',
      button: 'Services',
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Ready to transform your digital presence? Contact us today and let\'s discuss how we can help your business grow online.',
      conversationTitle: 'Let\'s start a conversation',
      conversationDescription: 'We\'re here to help you create amazing digital experiences. Whether you need a new website, want to improve your existing one, or have questions about our services, we\'d love to hear from you.',
      formTitle: 'Send us a message',
      formDescription: 'Fill out the form below and we\'ll get back to you as soon as possible.',
      name: 'Name *',
      email: 'Email *',
      phone: 'Phone (optional)',
      message: 'Message *',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message sent successfully!',
      successMessage: 'Thank you for contacting us. We\'ll get back to you soon.',
      emailUs: 'Email us',
      callUs: 'Call us',
      location: 'Location',
      followUs: 'Follow us',
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'Why does my company need a professional website?',
          answer: 'Your website is your digital business card 24/7. It conveys professionalism, credibility, and makes it easy for your customers to find you. In 2025, not having a professional website is like not having a phone in the 90s.'
        },
        {
          question: 'What if my business grows and I need more features?',
          answer: 'Perfect, that means your website is working. We design scalable sites that can grow with you. We can add new sections, advanced features, integrate management systems, or create custom web applications.'
        },
        {
          question: 'My current website isn\'t working well, can it be improved?',
          answer: 'If your website doesn\'t generate inquiries, loads slowly, or looks outdated, it\'s time to renew it. We analyze your current situation and create a strategy to maximize your digital presence without losing your positioning.'
        },
        {
          question: 'Do you offer support after delivering the website?',
          answer: 'Absolutely. We don\'t leave you alone after delivery. We offer technical support, security updates, and can help you with minor changes. Your peace of mind is important to us.'
        },
        {
          question: 'What does professional web development include?',
          answer: 'Custom design, tailored programming, mobile optimization, speed optimization, basic SEO, contact forms, social media integration, and training so you can manage basic content.'
        },
        {
          question: 'How long does it take to create a website from scratch?',
          answer: 'Each project is unique and we analyze timelines personally according to complexity and specific requirements. We don\'t use generic templates; each site is custom designed for your company and business objectives.'
        }
      ]
    },
    footer: {
      copyright: '© 2025 LanderTech',
      location: 'We are in Tucumán, Argentina',
    },
    clients: {
      title: 'Companies that trust us',
    },
    finalCta: {
      title: 'DO YOU HAVE A BUSINESS IDEA?',
      button: 'CONTACT US',
    },
  },
};

export const getTranslation = (language: Language) => translations[language]; 