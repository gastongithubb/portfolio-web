import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

// Definición de tipos
interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  github?: string;
  demo?: string;
}

interface ExperienciaLaboral {
  empresa: string;
  puesto: string;
  periodo: string;
  responsabilidades: string[];
}

const Portfolio: React.FC = () => {
  const proyectos: Proyecto[] = [
    {
      nombre: "E-Commerce Dashboard",
      descripcion: "Dashboard completo para gestión de tienda en línea",
      tecnologias: ["React", "TypeScript", "Tailwind", "Express"],
      github: "https://github.com/miusuario/ecommerce-dashboard",
      demo: "https://mi-ecommerce-demo.vercel.app"
    },
    {
      nombre: "Sistema de Gestión de Proyectos",
      descripcion: "Aplicación para tracking y colaboración de proyectos",
      tecnologias: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/miusuario/project-management",
      demo: "https://mi-project-management.vercel.app"
    }
  ];

  const experienciaLaboral: ExperienciaLaboral[] = [
    {
      empresa: "Konecta Group",
      puesto: "Front-End Developer y CX Agent",
      periodo: "Marzo 2024 - Presente",
      responsabilidades: [
        "Facilitación del acceso a la información para los usuarios.", 
        "Implementación de sistemas de feedback del cliente.", 
        "Optimización de tiempos de respuesta para consultas y problemas.",
        "Integración de múltiples canales de comunicación."
      ]
    },
    {
      empresa: "Quinto Centenario",
      puesto: "Recepción y  Jefe de Reservas",
      periodo: "Noviembre 2022 - Diciembre 2023",
      responsabilidades: [
        "Comprobación del estado del hotel y gestión de llegadas y salidas de huéspedes.",
        "Revisión de la facturación a crédito y gestión de cobros.",
        "Coordinación y comunicación de incidencias y novedades con el turno de tarde.",
        "Gestión de correo electrónico y centralita telefónica, incluyendo la transferencia de llamadas y recepción de mensajes."
      ]
    }
  ];

  const tecnologiasConocidas = [
    "TypeScript", "React", "Next.js", "Tailwind CSS",
    "Node.js", "Express", "PostgreSQL"
  ];

  return (
    <div className="min-h-screen bg-[#2F3E46] text-[#CAD2C5] font-['SF_Pro'] p-8">
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold text-[#84A98C]">Mi Portfolio</h1>
        <nav className="flex space-x-6">
          <a href="#sobre-mi" className="text-[#CAD2C5] hover:text-[#52796F]">Sobre Mí</a>
          <a href="#proyectos" className="text-[#CAD2C5] hover:text-[#52796F]">Proyectos</a>
          <a href="#experiencia" className="text-[#CAD2C5] hover:text-[#52796F]">Experiencia</a>
        </nav>
      </header>

      <section id="sobre-mi" className="mb-16">
        <h2 className="text-3xl text-[#84A98C] mb-6">Sobre Mí</h2>
        <div className="flex items-center">
          <Image
            src="/profile-2.png"
            alt="Foto de perfil"
            width={250}
            height={250}
            className="rounded-full mr-8 border-4 border-[#52796F]"
          />
          <div>
            <p className="text-lg mb-4">
              Soy desarrollador front-end apasionado por crear soluciones innovadoras y eficientes. Con experiencia en front-end y como CX Agent, he trabajado en la optimización y mejora de la experiencia del usuario para Sancor Salud en colaboración con Konecta Group. Anteriormente, fui gerente de reservas, lo que me ha permitido desarrollar habilidades de liderazgo y gestión de equipos. Busco unirme a un equipo dinámico en una empresa donde pueda contribuir con mis habilidades técnicas y creatividad para optimizar procesos y mejorar la experiencia del usuario a través de tecnologías modernas y enfoques estratégicos
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/gastongithubb" target="_blank" className="text-[#84A98C] hover:text-[#52796F]">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/gastonalvarez-end/" target="_blank" className="text-[#84A98C] hover:text-[#52796F]">
                <Linkedin size={32} />
              </a>
              <a href="mailto:gastonalvarez18@outlook.com" className="text-[#84A98C] hover:text-[#52796F]">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mb-16">
        <h2 className="text-3xl text-[#84A98C] mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="bg-[#354F52] p-6 rounded-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl text-[#84A98C] mb-4">{proyecto.nombre}</h3>
              <p className="mb-4">{proyecto.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tecnologias.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#52796F] text-[#CAD2C5] px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {proyecto.github && (
                  <a
                    href={proyecto.github}
                    target="_blank"
                    className="text-[#84A98C] hover:text-[#52796F]"
                  >
                    <Github size={24} />
                  </a>
                )}
                {proyecto.demo && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    className="text-[#84A98C] hover:text-[#52796F]"
                  >
                    🌐 Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experiencia" className="mb-16">
        <h2 className="text-3xl text-[#84A98C] mb-6">Experiencia Laboral</h2>
        {experienciaLaboral.map((trabajo, index) => (
          <div
            key={index}
            className="bg-[#354F52] p-6 rounded-lg mb-6"
          >
            <h3 className="text-2xl text-[#84A98C]">{trabajo.empresa}</h3>
            <p className="text-lg mb-2">{trabajo.puesto}</p>
            <p className="text-sm text-[#52796F] mb-4">{trabajo.periodo}</p>
            <ul className="list-disc list-inside">
              {trabajo.responsabilidades.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="tecnologias">
        <h2 className="text-3xl text-[#84A98C] mb-6">Tecnologías</h2>
        <div className="flex flex-wrap gap-4">
          {tecnologiasConocidas.map((tech, index) => (
            <span
              key={index}
              className="bg-[#52796F] text-[#CAD2C5] px-3 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;