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
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
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

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
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
      image: "/quo-centromedico-5.webp",
      url: "https://www.quocentromedico.com/"
    },
    {
      title: "AutoARG",
      description: language === 'es'
        ? "Plataforma en Argentina para consulta de precios de autos nuevos y usados, con funcionalidades de búsqueda avanzada, calculadora de transferencias y planes de suscripción. Desarrollada para brindar información actualizada y confiable a miles de usuarios mensuales."
        : "Platform in Argentina for consulting prices of new and used cars, with advanced search functionalities, transfer calculator and subscription plans. Developed to provide updated and reliable information to thousands of monthly users.",
      tags: ["Next.js", "Node.js", "Tailwind CSS"],
      image: "/autoarg-5.webp",
      url: "https://www.autoarg.com/"
    }
  ];



  const clients = [
    { name: "QUO Centro Médico", logo: "/quo.jpeg" },
    { name: "Kuranda", logo: "/kuranda-logo.png" }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-700/30">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
                      <div className="flex items-center space-x-3">
              <div className="w-10 h-10 purple-gradient rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">LanderTech</span>
            </div>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button onClick={() => handleNavClick('#projects')} className="text-sm font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-200">{t.nav.projects}</button>
            <button onClick={() => handleNavClick('#services')} className="text-sm font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-200">{t.nav.services}</button>
            <button onClick={() => handleNavClick('#pricing')} className="text-sm font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-200">{t.nav.faq}</button>
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
              onClick={() => handleNavClick('#pricing')}
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
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
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
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/hero-image.png"
                  alt="LanderTech project mockup"
                  width={400}
                  height={300}
                  className="rounded-lg transform rotate-3 hover:rotate-0 transition-transform"
                />
                <img
                  src="https://ext.same-assets.com/3500878627/2318990618.webp"
                  alt="Mobile cluster mockup"
                  className="rounded-lg transform -rotate-3 hover:rotate-0 transition-transform mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-white max-w-2xl mx-auto p-8 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-gray-900 mb-6">{t.cta.title}</CardTitle>
              <CardDescription className="text-gray-600 text-xl leading-relaxed">
                {t.cta.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="purple-gradient hover:opacity-90 text-white px-10 py-6 text-xl font-semibold rounded-full shadow-lg"
                onClick={() => handleNavClick('#pricing')}
              >
                {t.cta.button}
              </Button>
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
              <img
                src="https://ext.same-assets.com/3500878627/3971648447.webp"
                alt="About us"
                className="rounded-lg"
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
      <section id="contact" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
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
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{t.contact.successTitle}</h3>
                    <p className="text-zinc-300 text-lg">{t.contact.successMessage}</p>
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
                          placeholder="tu@email.com"
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
                  <p className="font-semibold">nosotros@landertech.com</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-zinc-300" />
                  </div>
                  <p className="font-semibold">+54 9 381 619-1766</p>
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
                <a href="#" className="w-10 h-10 bg-zinc-700/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-700/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>

                <a href="#" className="w-10 h-10 bg-zinc-700/50 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200">
                  <Mail className="w-5 h-5" />
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
      <section id="pricing" className="py-16 px-4">
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
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Instagram className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
            <div className="text-center text-zinc-400">
              <p>{t.footer.copyright}</p>
              <p>{t.footer.location}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
