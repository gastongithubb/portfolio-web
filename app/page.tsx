'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

// Types
interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  github?: string;
  demo?: string;
  imagen: string;
}

interface ExperienciaLaboral {
  empresa: string;
  puesto: string;
  periodo: string;
  responsabilidades: string[];
}

interface NavigationItems {
  'sobre-mi': string;
  'proyectos': string;
  'experiencia': string;
  'contacto': string;
}

const Portfolio: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const proyectos: Proyecto[] = [
    {
      nombre: "E-Commerce Dashboard",
      descripcion: "Dashboard completo para gestión de tienda en línea con análisis en tiempo real y gestión de inventario.",
      tecnologias: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/miusuario/ecommerce-dashboard",
      demo: "https://mi-ecommerce-demo.vercel.app",
      imagen: "/dashboard.png"
    },
    {
      nombre: "Sistema de Gestión de Proyectos",
      descripcion: "Aplicación para tracking y colaboración de proyectos con características de tiempo real y gestión de tareas.",
      tecnologias: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/miusuario/project-management",
      demo: "https://mi-project-management.vercel.app",
      imagen: "/project-management.png"
    }
  ];

  const experienciaLaboral: ExperienciaLaboral[] = [
    {
      empresa: "Konecta Group",
      puesto: "Front-End Developer y CX Agent",
      periodo: "Marzo 2024 - Presente",
      responsabilidades: [
        "Desarrollo y mantenimiento de interfaces de usuario con React y Next.js",
        "Implementación de sistemas de feedback del cliente con TypeScript",
        "Optimización de tiempos de respuesta para consultas y problemas",
        "Integración de múltiples canales de comunicación con APIs RESTful"
      ]
    },
    {
      empresa: "Quinto Centenario",
      puesto: "Recepción y Jefe de Reservas",
      periodo: "Noviembre 2022 - Diciembre 2023",
      responsabilidades: [
        "Gestión integral del sistema de reservas y check-in/check-out",
        "Optimización de procesos de facturación y gestión de cobros",
        "Coordinación efectiva entre departamentos y turnos",
        "Atención al cliente multicanal y resolución de incidencias"
      ]
    }
  ];

  const tecnologiasConocidas = [
    "TypeScript",
    "React",
    "Next.js",
    "Astro",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Redux",
    "Git"
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const navigationItems = ['sobre-mi', 'proyectos', 'experiencia', 'contacto'] as const;

const navigationLabels: NavigationItems = {
  'sobre-mi': 'Sobre Mí',
  'proyectos': 'Proyectos',
  'experiencia': 'Experiencia',
  'contacto': 'Contacto'
};

  return (
    <div className="min-h-screen bg-orange-50  dark:bg-purple-900 text-purple-900 dark:text-white transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-purple-900/70 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 dark:from-orange-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Mi Portfolio
            </motion.h1>

            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-6">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative px-3 py-2 transition-colors ${
                      activeSection === item
                        ? 'text-orange-500 dark:text-orange-400'
                        : 'hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    {navigationLabels[item]}
                    {activeSection === item && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 dark:bg-orange-400"
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden fixed bottom-0 w-full z-50 bg-white/80 dark:bg-purple-900/80 backdrop-blur-md shadow-lg">
        <nav className="flex justify-around py-3">
          {navigationItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`flex flex-col items-center space-y-1 ${
                activeSection === item
                  ? 'text-orange-500 dark:text-orange-400'
                  : 'text-purple-600 dark:text-purple-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {/* Puedes agregar íconos aquí si lo deseas */}
              <span className="text-sm">{navigationLabels[item]}</span>
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Sobre Mí Section */}
        <section id="sobre-mi" className="min-h-screen flex items-center py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-64 h-64 mx-auto md:w-80 md:h-80"
            >
              <Image
                src="/profile.webp"
                alt="Foto de perfil"
                fill
                className="rounded-full object-cover border-4 border-orange-400 dark:border-purple-400 shadow-xl"
                priority
              />
            </motion.div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Sobre Mí</h2>
              <p className="text-lg leading-relaxed">
                Soy un desarrollador front-end apasionado por crear experiencias web innovadoras y eficientes.
                Mi experiencia como desarrollador y CX Agent me ha permitido combinar habilidades técnicas
                con un profundo entendimiento de las necesidades del usuario, creando soluciones que no solo
                funcionan bien, sino que también son intuitivas y agradables de usar.
              </p>
              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com/gastongithubb" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/gastonalvarez-end/" },
                  { icon: Mail, href: "mailto:gastonalvarez18@outlook.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-orange-400 hover:text-purple-800 dark:hover:text-orange-500 transition-colors"
                  >
                    <social.icon size={32} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Proyectos Section */}
        <section id="proyectos" className="min-h-screen py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Proyectos Destacados</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden bg-white/90 dark:bg-purple-800/90 shadow-xl rounded-xl">
                    <CardHeader className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{proyecto.nombre}</h3>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.tecnologias.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-orange-400/20 dark:bg-orange-400/20 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="p-6 space-y-4">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                          alt={`${proyecto.nombre} preview`}
                          src={proyecto.imagen}
                          fill
                          className="object-cover transition-transform"
                        />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{proyecto.descripcion}</p>
                      <div className="flex space-x-4">
                        {proyecto.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={proyecto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-purple-600 dark:text-orange-400 hover:text-purple-800 dark:hover:text-orange-500"
                          >
                            <Github size={20} />
                            <span>Código</span>
                          </motion.a>
                        )}
                        {proyecto.demo && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={proyecto.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-purple-600 dark:text-orange-400 hover:text-purple-800 dark:hover:text-orange-500"
                          >
                            <span>🌐Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experiencia Section */}
        <section id="experiencia" className="min-h-screen py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Experiencia Laboral</h2>
            <div className="space-y-6">
              {experienciaLaboral.map((trabajo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/90 dark:bg-purple-800/90 rounded-xl p-8 shadow-lg space-y-4"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{trabajo.empresa}</h3>
                    <p className="text-lg text-purple-600 dark:text-orange-400">{trabajo.puesto}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{trabajo.periodo}</p>
                  </div>
                  <ul className="space-y-3">
                    {trabajo.responsabilidades.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3">
                        <span className="text-orange-500 dark:text-purple-400">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="min-h-screen py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 dark:bg-purple-800/90 rounded-xl p-8 shadow-lg space-y-6"
              >
                <h3 className="text-2xl font-bold">Información de Contacto</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:gastonalvarez18@outlook.com"
                    className="flex items-center space-x-3 hover:text-orange-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Mail className="flex-shrink-0" />
                    <span>gastonalvarez18@outlook.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gastonalvarez-end/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-orange-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="flex-shrink-0" />
                    <span>/gastonalvarez-end</span>
                  </a>
                  <div className="pt-6">
                    <h4 className="text-xl font-bold mb-4">Descarga mi CV</h4>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="/CV-GastonAlvarez.pdf"
                      download
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-purple-500 dark:from-purple-500 dark:to-orange-400 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
                    >
                      <span>Descargar CV</span>
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Tecnologías Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 dark:bg-purple-800/90 rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Tecnologías</h3>
                <div className="flex flex-wrap gap-3">
                  {tecnologiasConocidas.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -2 }}
                      className="bg-gradient-to-r from-orange-400/20 to-purple-500/20 dark:from-purple-500/20 dark:to-orange-400/20 text-purple-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-50 dark:bg-purple-900/80 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Gastón Alvarez. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-8 p-3 bg-orange-400 dark:bg-purple-500 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity md:bottom-8"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default Portfolio;