"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Menu, X, ChevronDown, ArrowRight, ExternalLink, Instagram, Linkedin, Mail, User, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Home() {
  const { t, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();
    // Smooth scroll to section
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    closeMobileMenu();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Por favor, ingrese una dirección de correo electrónico válida';
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Por favor, ingrese un número de teléfono válido';
    }

    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFormErrors({});

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "QUO Centro Médico",
      description: language === 'es' 
        ? "Plataforma web para la gestión de turnos médicos online, permitiendo a pacientes reservar citas y a administradores gestionar profesionales y especialidades. Desarrollada para QUO Centro Médico en Tucumán."
        : "Web platform for online medical appointment management, allowing patients to book appointments and administrators to manage professionals and specialties. Developed for QUO Medical Center in Tucumán.",
      tags: ["Next.js", "Node.js", "Tailwind CSS"],
      image: "/ilustraciones/quo-centromedico-1.webp",
      url: "https://www.quocentromedico.com/"
    },
    {
      title: "Kuranda Business",
      description: language === 'es'
        ? "Sistema web para gestión de pedidos de frutas y verduras entre bares, proveeduría, logística y administración. Permite a los clientes realizar pedidos, coordinar entregas y a los administradores gestionar usuarios, productos y vehículos."
        : "Web system for managing fruit and vegetable orders between bars, supply, logistics, and admin roles. Enables clients to place orders, coordinate deliveries, and admins to manage users, products, and vehicles.",
      tags: ["React", "JavaScript", "CSS"],
      image: "/ilustraciones/kuranda.png",
      url: "http://kuranda-bares-test.netlify.app/"
    },
    {
      title: "Nou Consultoría Integral",
      description: language === 'es'
        ? "Sitio web corporativo para consultoría especializada en pymes, con secciones de servicios, experiencia y contacto. Diseñado para comunicar profesionalismo y generar confianza en potenciales clientes del sector empresarial."
        : "Corporate website for specialized SME consulting, with services, experience and contact sections. Designed to communicate professionalism and generate trust in potential clients from the business sector.",
      tags: ["Next.js", "Tailwind CSS", "Responsive"],
      image: "/evaristonougues.jpeg",
      url: "https://evaristo-nougues.vercel.app/"
    },
    {
      title: "AutoARG",
      description: language === 'es'
        ? "Plataforma en Argentina para consulta de precios de autos nuevos y usados, con funcionalidades de búsqueda avanzada, calculadora de transferencias y planes de suscripción. Desarrollada para brindar información actualizada y confiable a miles de usuarios mensuales."
        : "Platform in Argentina for consulting prices of new and used cars, with advanced search functionalities, transfer calculator and subscription plans. Developed to provide updated and reliable information to thousands of monthly users.",
      tags: ["Next.js", "Node.js", "Tailwind CSS"],
      image: "/ilustraciones/autoarg.png",
      url: "https://www.autoarg.com/"
    }
  ];



  const clients = [
    { name: "QUO Centro Médico", logo: "/quo.jpeg" },
    { name: "Kuranda", logo: "/kuranda-logo.png" },
    { name: "Nou Consultoría Integral", logo: "/NOUlogo.png" }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-700/30">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
              <Image
                src="/imagenes/MarcaGráficaFondoTransparente-06.png"
                alt="LanderTech Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">LanderTech</span>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button onClick={() => handleNavClick('#projects')} className="text-sm font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-200">{t.nav.projects}</button>
            <button onClick={() => handleNavClick('#services')} className="text-sm font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-200">{t.nav.services}</button>
            <button onClick={() => handleNavClick('#faq')} className="text-sm font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-200">{t.nav.faq}</button>
          </nav>

          {/* Right side - Language & Social */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSelector />
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a href="#" className="w-9 h-9 bg-zinc-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200 group">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200 group">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a href="#" className="w-9 h-9 bg-zinc-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-16 right-0 h-full w-80 max-w-[80vw] bg-zinc-900/95 backdrop-blur-md border-l border-zinc-700/50 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-6">
            <button
              onClick={() => handleNavClick('#projects')}
              className="text-left text-lg font-medium hover:text-purple-400 transition-colors py-2"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => handleNavClick('#services')}
              className="text-left text-lg font-medium hover:text-purple-400 transition-colors py-2"
            >
              {t.nav.services}
            </button>
            <button
                                onClick={() => handleNavClick('#faq')}
              className="text-left text-lg font-medium hover:text-purple-400 transition-colors py-2"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={scrollToContact}
              className="text-left text-lg font-medium hover:text-purple-400 transition-colors py-2"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Separator */}
          <div className="px-6">
            <Separator className="bg-zinc-700/50" />
          </div>

          {/* Language Selector */}
          <div className="px-6">
            <LanguageSelector />
          </div>

          {/* Social Links */}
          <div className="p-6">
            <h3 className="text-sm font-medium text-zinc-400 mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>

              <a href="#" className="hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto p-6">
            <Button
              className="w-full purple-gradient hover:opacity-90 text-white py-3 rounded-full"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/recursos/close-up-image-programer-working-his-desk-office.jpg"
            alt="Professional workspace"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-zinc-900/90"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t.hero.titleLines.map((line, index) => (
                  <span key={index}>
                    {index === 3 || index === 4 ? (
                      <span className="gradient-text">{line}</span>
                    ) : (
                      line
                    )}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="text-zinc-300 text-lg max-w-md">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="purple-gradient hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
                  onClick={() => handleNavClick('#services')}
                >
                  {t.hero.servicesButton}
                </Button>
                <Button
                  className="bg-white/10 border-white/20 hover:border-purple-400 text-white hover:text-purple-400 hover:bg-white/20 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                  onClick={scrollToContact}
                >
                  {t.hero.contactButton}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <Image
                    src="/ilustraciones/IlustracionesLanderTech-02.png"
                    alt="LanderTech desarrollo web"
                    width={500}
                    height={400}
                    className="rounded-xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/ilustraciones/IlustracionesLanderTech-03.png"
                    alt="LanderTech servicios"
                    width={240}
                    height={200}
                    className="rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                  <Image
                    src="/ilustraciones/IlustracionesLanderTech-04.png"
                    alt="LanderTech soluciones"
                    width={240}
                    height={200}
                    className="rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/recursos/contemporary-room-workplace-office-supplies-concept.jpg"
            alt="Modern workplace"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <Card className="bg-zinc-800/80 backdrop-blur-lg max-w-3xl mx-auto p-12 shadow-2xl border border-zinc-700/50 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-white mb-8 leading-tight">
                {t.cta.title}
              </CardTitle>
              <CardDescription className="text-zinc-300 text-2xl leading-relaxed max-w-2xl mx-auto">
                {t.cta.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mt-8">
                <Button
                  className="purple-gradient hover:opacity-90 hover:scale-105 text-white px-12 py-8 text-xl font-semibold rounded-full shadow-2xl transition-all duration-300"
                  onClick={() => handleNavClick('#contact')}
                >
                  {t.cta.button}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {t.projects.title.includes('Our') ? (
                  <>
                    Our featured<br />projects
                  </>
                ) : (
                  <>
                    Nuestros proyectos<br />destacados
                  </>
                )}
              </h2>
              <p className="text-zinc-300 text-lg">
                {t.projects.subtitle}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm overflow-hidden hover:transform hover:scale-105 transition-transform shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  <CardDescription className="text-zinc-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-purple-600/30 text-purple-300 border-purple-600/50 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-zinc-600 hover:border-purple-400 text-zinc-300 hover:text-purple-400 font-medium bg-zinc-700/50 hover:bg-purple-600/20"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    {t.projects.viewProject}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.services.title}</h2>
              <p className="text-zinc-300 text-lg mb-8">
                {t.services.subtitle}
              </p>
              <p className="text-zinc-300 mb-8">
                {t.services.description}
              </p>
              <Button
                className="purple-gradient hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
                onClick={scrollToContact}
              >
                {t.services.button}
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/ilustraciones/IlustracionesLanderTech_Mesa de trabajo 1.png"
                alt="LanderTech servicios digitales"
                width={600}
                height={500}
                className="rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Text */}
      <section className="py-12 overflow-hidden bg-zinc-800/30">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">DESIGN</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">-</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">DEVELOPMENT</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">-</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">HOSTING</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">-</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">DOMAIN</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">-</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">MAINTENANCE</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">-</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">SUPPORT</span>
          <span className="text-6xl font-bold text-zinc-600 inline-block mx-8">-</span>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-900 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/recursos/workplace-with-smartphone-laptop-on-black-table-top-view-copyspace-background.jpg"
            alt="Professional workspace"
            fill
            className="object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-zinc-300 text-xl max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-zinc-800/80 border-zinc-700/50 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{t.contact.successTitle}</h3>
                    <p className="text-zinc-300 text-xl leading-relaxed max-w-md mx-auto">{t.contact.successMessage}</p>
                    <div className="mt-8">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all"
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                          {t.contact.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder-zinc-400 ${
                            formErrors.name ? 'ring-2 ring-red-500' : ''
                          }`}
                          placeholder="Tu nombre"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                          {t.contact.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder-zinc-400 ${
                            formErrors.email ? 'ring-2 ring-red-500' : ''
                          }`}
                          placeholder="tu-email@gmail.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                        {t.contact.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder-zinc-400 ${
                          formErrors.phone ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="+54 9 381 123-4567"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                        {t.contact.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none text-white placeholder-zinc-400 ${
                          formErrors.message ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full purple-gradient hover:opacity-90 text-white py-4 rounded-xl text-lg font-semibold shadow-lg disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          {t.contact.sending}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-3" />
                          {t.contact.sendMessage}
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info - Simplified */}
            <div className="mt-12 text-center space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-zinc-300" />
                  </div>
                  <p className="font-semibold">contacto@landertech.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-zinc-300" />
                  </div>
                  <p className="font-semibold">+54 9 3813011730</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-zinc-300" />
                  </div>
                  <p className="font-semibold">Tucumán, Argentina</p>
                </div>
              </div>

              {/* Social Links - Minimalist */}
              <div className="flex justify-center space-x-6 pt-8">
                <a
                  href="https://www.instagram.com/lander.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-700/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/69324615/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-700/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Client Logos */}
      <section className="py-20 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">{t.clients.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="bg-zinc-700 p-12 text-center rounded-2xl hover:bg-zinc-600 transition-colors group">
                <div className="relative w-full h-20 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className={`object-contain group-hover:scale-110 transition-transform ${
                      client.logo.includes('.png') ? 'brightness-0 invert' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold text-center mb-12 tracking-tight">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="space-y-0">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-600 last:border-b-0">
                <AccordionTrigger className="text-left text-3xl font-medium hover:text-purple-400 py-8 px-8 hover:no-underline transition-colors duration-200 tracking-tight [&>svg]:hidden [&[data-state=open]_.plus-icon]:hidden [&[data-state=open]_.minus-icon]:block">
                  <span className="flex-1 text-left leading-tight">{faq.question}</span>
                  <div className="plus-icon text-3xl font-light ml-12 transition-all duration-200">+</div>
                  <div className="minus-icon text-3xl font-light ml-12 transition-all duration-200 hidden">−</div>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-300 text-lg px-8 pb-8 leading-relaxed max-w-5xl font-normal tracking-wide">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">
            {t.finalCta.title.includes('DO YOU HAVE') ? (
              <>
                DO YOU HAVE A<br />
                BUSINESS IDEA?
              </>
            ) : (
              <>
                ¿TIENES UNA IDEA<br />
                DE NEGOCIO?
              </>
            )}
          </h2>
          <Button
            className="purple-gradient hover:opacity-90 text-white px-12 py-8 text-2xl rounded-full"
            onClick={scrollToContact}
          >
            {t.finalCta.button}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-700/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo y empresa */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/imagenes/MarcaGráficaFondoTransparente-08.png"
                alt="LanderTech"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold text-white">LanderTech</span>
                <p className="text-zinc-400 text-sm">{t.footer.location}</p>
              </div>
            </div>
            
            {/* Social y copyright */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <a href="https://www.instagram.com/lander.tech" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
                </a>
                <a href="mailto:contacto@landertech.com">
                  <Mail className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/69324615/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
                </a>
              </div>
              <p className="text-zinc-400 text-sm">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
