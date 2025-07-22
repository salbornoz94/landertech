export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    projects: string;
    services: string;
    pricing: string;
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
      pricing: 'PRECIOS',
      contact: 'CONTACTO',
    },
    hero: {
      title: 'Diseño Web y Soluciones Digitales',
      titleLines: ['Diseño', 'Web', 'y', 'Soluciones', 'Digitales'],
      subtitle: 'Diseñamos sitios web que marcan la diferencia. Con un enfoque en UX/UI innovador y optimización SEO, creamos sitios que se ven increíbles y funcionan perfectamente en cualquier dispositivo. Estamos aquí para darle a tu negocio la presencia online que merece.',
      servicesButton: 'Servicios',
      contactButton: 'Contáctanos',
    },
    cta: {
      title: '¿Quieres hacer crecer tu negocio?',
      description: 'No pierdas la oportunidad de mejorar tus resultados de manera rápida y eficiente. Accede a soluciones para posicionar tu negocio online.',
      button: 'Revisa nuestros planes',
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
      title: 'Ponte en contacto',
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
          question: '¿Qué es el diseño web y por qué es importante?',
          answer: 'El diseño web es el proceso de crear y organizar elementos visuales, contenido y funcionalidad de sitios web. Es importante porque afecta la experiencia del usuario, la percepción de la marca y las conversiones del negocio.'
        },
        {
          question: '¿Cuál es la diferencia entre diseño web y desarrollo web?',
          answer: 'El diseño web se enfoca en los aspectos visuales y de experiencia del usuario, mientras que el desarrollo web involucra la implementación técnica y programación que hace funcionar los sitios web.'
        },
        {
          question: '¿Qué es un sitio web responsivo?',
          answer: 'Un sitio web responsivo se adapta automáticamente y optimiza su diseño, contenido y funcionalidad en diferentes dispositivos y tamaños de pantalla para una experiencia de usuario óptima.'
        },
        {
          question: '¿Qué necesito para crear un sitio web?',
          answer: 'Necesitas un nombre de dominio, hosting web, servicios de diseño/desarrollo, contenido y mantenimiento continuo. Podemos ayudarte con todos estos aspectos.'
        },
        {
          question: '¿Cuánto cuesta un sitio web?',
          answer: 'Los costos de un sitio web varían según la complejidad, características y requisitos. Ofrecemos diferentes paquetes para adaptarse a varios presupuestos y necesidades de negocio.'
        },
        {
          question: '¿Por qué es importante optimizar mi sitio web para SEO?',
          answer: 'La optimización SEO ayuda a que tu sitio web se posicione mejor en los resultados de búsqueda, aumentando la visibilidad, el tráfico y los clientes potenciales para tu negocio.'
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
      pricing: 'PRICING',
      contact: 'CONTACT',
    },
    hero: {
      title: 'Web Design and Digital Solutions',
      titleLines: ['Web', 'Design', 'and', 'Digital', 'Solutions'],
      subtitle: 'We design websites that make a difference. With a focus on innovative UX/UI and SEO optimization, we create sites that look amazing and work perfectly on any device. We are here to give your business the online presence it deserves.',
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
          question: 'What is web design and why is it important?',
          answer: 'Web design is the process of creating and arranging visual elements, content, and functionality of websites. It\'s important because it affects user experience, brand perception, and business conversions.'
        },
        {
          question: 'What is the difference between web design and web development?',
          answer: 'Web design focuses on the visual and user experience aspects, while web development involves the technical implementation and programming that makes websites function.'
        },
        {
          question: 'What is a responsive website?',
          answer: 'A responsive website automatically adapts and optimizes its layout, content, and functionality across different devices and screen sizes for optimal user experience.'
        },
        {
          question: 'What do I need to create a website?',
          answer: 'You need a domain name, web hosting, design/development services, content, and ongoing maintenance. We can help you with all these aspects.'
        },
        {
          question: 'How much does a website cost?',
          answer: 'Website costs vary based on complexity, features, and requirements. We offer different packages to suit various budgets and business needs.'
        },
        {
          question: 'Why is it important to optimize my website for SEO?',
          answer: 'SEO optimization helps your website rank higher in search results, increasing visibility, traffic, and potential customers for your business.'
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