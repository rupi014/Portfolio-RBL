import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rubens Ballester Lillo",
  initials: "RBL",
  url: "https://dillion.io",
  location: "Portugalete, Vizcaya",
  locationLink: "https://www.google.com/maps/place/Portugalete",
  description:
    "Técnico junior en ciberseguridad, integro mi formación en Full Stack y mi experiencia en el sector de la salud para aportar una perspectiva única. Me especializo en pentesting y análisis de vulnerabilidades para entornos robustos.",
  summary:
    "Mi progresión profesional me ha conducido a la ciberseguridad, un área que me apasiona y a la que me gustaría dedicarme por completo. Comencé mi carrera como terapeuta ocupacional, donde adquirí habilidades de liderazgo y trabajo en equipo. Posteriormente, me adentré en el desarrollo Full Stack, construyendo soluciones web como una web personal y una para un equipo de eSports. Ahora, aplico este background único al pentesting y análisis de vulnerabilidades para proteger entornos digitales.",
  avatarUrl: "/me.jpg",
  skills: [
    "Kali Linux",
    "Metasploit",
    "BurpSuite",
    "Wireshark",
    "PE Studio",
    "ILSpy",
    "Ghidra",
    "HTML",
    "SCSS/SASS",
    "JavaScript",
    "React",
    "Git",
    "Express",
    "Node.js",
    "Python",
    "Flask",
    "FastAPI",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Mongoose"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" }
  ],
  contact: {
    email: "rubens.bali@gmail.com",
    tel: "+34679888369",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rupi014",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rubensbl",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rupidev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BBK Bootcamp by The Bridge",
      href: "https://bbkbootcamps.thebridge.tech/ciberseguridad",
      badges: [],
      location: "Bilbao",
      title: "Teacher Assistant en Ciberseguridad",
      logoUrl: "/bridge.png",
      start: "Feb 2026",
      end: "Actualidad",
      description: "Teaching Assistant en bootcamp de ciberseguridad, con foco en el acompañamiento cercano al estudiantado y la resolución de problemas técnicos durante todo el proceso formativo; dar soporte al Lead Instructor en la gestión diaria del aula y la organización de contenidos, resolver dudas de primer nivel sobre ejercicios, proyectos y conceptos clave, guiar al alumnado en la depuración de errores y la comprensión de buenas prácticas. \n \n Asegurar el acceso de todo el grupo a recursos y grabaciones tanto en presencial como en remoto, colaborar en la corrección y el feedback continuo y contribuir a un entorno de aprendizaje seguro, motivador y orientado a que cada estudiante alcance los objetivos del programa."
    },
    {
      company: "Terra",
      href: "https://terrahq.com/",
      badges: [],
      location: "Bilbao",
      title: "Técnico Junior en Ciberseguridad",
      logoUrl: "/terra.png",
      start: "Jun 2025",
      end: "Jun 2025",
      description:
      "Lideré el equipo de Ciberseguridad en el Desafío de Tripulaciones de BBK Bootcamp. Este fue un programa intensivo de Terra que nos permitió, durante dos semanas, colaborar estrechamente con los equipos de Marketing Digital, Data Science y Desarrollo Full Stack. Mi función principal fue la de coordinar a cuatro miembros del equipo de Ciberseguridad, asignando responsabilidades y garantizando que el equipo estuviera siempre en sintonía. \n \n Realicé tareas de OSINT, auditoría de código con ESLint y SonarQube, y análisis de vulnerabilidades utilizando BurpSuite y Wireshark para identificar brechas de seguridad en sistemas y aplicaciones web. También investigué normativas aplicables para asegurar el cumplimiento legal y crear directrices de conformidad."
    },
    {
      company: "Bottega University",
      href: "https://bottega.edu/",
      badges: [],
      location: "Bilbao",
      title: "Programador Full Stack Junior",
      logoUrl: "/bottega.jpeg",
      start: "Sept 2024",
      end: "Oct 2024",
      description:
      "Como parte de mi trabajo final de bootcamp en Bottega University, concebí y desarrollé de forma autónoma el sitio web oficial de un club de eSports. Este proyecto me permitió aplicar y consolidar mis conocimientos como desarrollador full stack, creando una plataforma completa y funcional. \n \n Tecnologías Utilizadas: \n - Front-End: React, JavaScript, SCSS \n - Back-End: Python (FastAPI), MySQL \n - Otros: EmailJS, HTML"
    },
    {
      company: "IFAS Bizkaia",
      href: "https://ifas.bizkaia.eus/?idioma=ca",
      badges: [],
      location: "Bilbao",
      title: "Técnico en Terapia Ocupacional",
      logoUrl: "/IFAS.jpg",
      start: "Feb 2023",
      end: "Jun 2024",
      description:
      "Trabajé como terapeuta ocupacional en los centros de Gallarta, Virginetxe, Bekoetxe y Leioa de IFAS Bizkaia, adaptándome a diversos entornos y necesidades terapéuticas, y fortaleciendo mi capacidad de adaptación y trabajo en equipo."
    },

    {
      company: "AFA Salamanca",
      href: "http://www.afasalamanca.org/",
      badges: [],
      location: "Salamanca",
      title: "Dirección del departamento de Terapia Ocupacional",
      logoUrl: "/afa.jpg",
      start: "Feb 2018",
      end: "Oct 2022",
      description:
      "Dirigí el Departamento de Terapia Ocupacional en AFA Salamanca, encargándome de la planificación y aplicación de programas terapéuticos. Colaboré en un entorno interdisciplinar con diversos profesionales, desarrollando sólidas habilidades blandas y capacidad de liderazgo."
    }
  ],
  education: [
    {
      school: "Linkia FP - ASIR con Ciberseguridad",
      href: "https://linkiafp.es/fp-grado-superior-ciberseguridad-a-distancia/",
      degree: "Administración de Sistemas en Red (ASIR) con especialización en ciberseguridad.",
      logoUrl: "/linkia.png",
      start: "Feb 2026",
      end: "Actualidad",
      description: "Durante el FP de Grado Superior en Ciberseguridad que estoy cursando actualmente, estoy adquiriendo conocimientos en administración de sistemas informáticos en red con especialización en seguridad. Estoy aprendiendo a detectar, prevenir y corregir incidentes de seguridad, además de desarrollar competencias en hacking ético, administración de redes, gestión de bases de datos y programación. También me estoy formando en análisis de ataques informáticos y protección de infraestructuras tecnológicas."
    },
    {
      school: "BBK Bootcamp - Ciberseguridad",
      href: "https://bbkbootcamps.thebridge.tech/ciberseguridad",
      degree: "Certificado Junior en Ciberseguridad",
      logoUrl: "/bbk.png",
      start: "Mar 2025",
      end: "Jun 2025",
      description: `Programa intensivo de ciberseguridad que cubre fundamentos de seguridad, análisis de vulnerabilidades, respuesta a incidentes y seguridad en la nube.

🔴RED TEAM - Análisis de Objetivos, Ataques a Infraestructuras de Sistemas y Redes, Ataques a Aplicaciones Web, Ataques a Aplicaciones Móviles, Ataques a Redes Wireless, Explotación y Post-Explotación, Elevación de Privilegios, Evasión de Defensas, Reconocimiento Interno y Movimientos Laterales.

🔵BLUE TEAM - Protección de Activos, Análisis Forense y Respuesta ante Incidentes (DFIR), Análisis de Malware, Sistemas de Información de Seguridad y Gestión de Eventos (SIEM)`
    },
    {
      school: "Bottega University",
      href: "https://bottega.edu/",
      degree: "Full Stack Development Certificate",
      logoUrl: "/bottega.jpeg",
      start: "Feb 2024",
      end: " Oct 2024",
      description: "Este curso de Programación Full Stack me ha capacitado para desarrollar aplicaciones web completas, abarcando tanto el front-end como el back-end. He adquirido habilidades en JavaScript, HTML, CSS y React para crear interfaces de usuario dinámicas y atractivas, y en Python para desarrollar el back-end y construir APIs funcionales. También he aprendido sobre bases de datos, logrando diseñar y gestionar sistemas de almacenamiento de datos eficientes. Esta formación integral me ha dado una base sólida en programación y las herramientas necesarias para crear aplicaciones web modernas, escalables y orientadas a mejorar la experiencia del usuario."
    },
    {
      school: "Universidad de Salamanca",
      href: "https://www.usal.es/",
      degree: "Master en Intervención en Personas con Alzheimer y otras Demencias",
      logoUrl: "/usal.png",
      start: "2014",
      end: "2016",
      description: "Especialización en el tratamiento y cuidado de personas con enfermedades neurodegenerativas, con enfoque en la mejora de la calidad de vida."
    },
    {
      school: "Universidad de Castilla-La Mancha",
      href: "https://www.uclm.es/",
      degree: "Grado en Terapia Ocupacional",
      logoUrl: "/uclm.png",
      start: "2010",
      end: "2014",
      description: "Formación en la promoción de la salud y el bienestar a través de la ocupación, con especial atención a la rehabilitación y la adaptación funcional."
    },
    {
      school: "Conservatorio Profesional de Música de Ciudad Real",
      href: "https://www.conservatoriociudadreal.es/",
      degree: "Pianista",
      logoUrl: "/conser.jpg",
      start: "2000",
      end: "2008",
      description: "Formación musical especializada en piano, incluyendo teoría musical, composición y técnicas de interpretación."
    }
  ],
  certifications: [
    {
      title: "eJPTv2 || eLearnSecurity Junior Penetration Tester v2",
      issuer: "INE Security",
      href: "https://certs.ine.com/309dd480-900b-413e-958c-7e31a78833f6#acc.hWT1Gs5S",
      logoUrl: "/ejpt.png",
      date: "Jun 2025",
    },
    {
      title: "ICCA || INE Certified Cloud Associate",
      issuer: "INE Security",
      href: "https://certs.ine.com/0c2d99dc-621c-4629-a7fb-e0e4c043b9b6#acc.Yr7sA23z",
      logoUrl: "/icca.png",
      date: "Jun 2025",
    },
    {
      title: "Ethical Hacking Professional Certification - CEHPC™",
      issuer: "Certiprof",
      href: "https://www.credly.com/badges/78832eca-75f0-4955-a165-ada26dc2274e/linked_in_profile",
      logoUrl: "/et-ha.png",
      date: "Sep 2025",
    },
    {
      title: "Lead Cybersecurity Professional Certification - LCSPC™",
      issuer: "Certiprof",
      href: "https://www.credly.com/badges/11ee5824-06c8-4650-84bc-8d5a979bfa31/linked_in_profile",
      logoUrl: "/le-ci.png",
      date: "Sep 2025",
    },
    {
      title: "Certified ISO 27001 Lead Auditor - I27001LA™",
      issuer: "Certiprof",
      href: "https://www.credly.com/badges/7d23361d-4044-48c7-b838-c266cfa28e40/linked_in_profile",
      logoUrl: "/le-iso.png",
      date: "Sep 2025",
    },
    {
      title: "Google Cybersecurity Professional Certificate V2",
      issuer: "Google",
      href: "https://www.credly.com/badges/f68a2936-db07-459d-8c48-a8932e3ec7e1/public_url",
      logoUrl: "/google.png",
      date: "May 2025",
    },
    

  ],
  projects: [
    {
      title: "Pentest Metasploitable 3",
      href: "https://drive.google.com/file/d/1mssi21O4jP8Iy6oRynBJiF0YCzSEmDBC/view?usp=sharing",
      dates: "May 2025",
      active: true,
      description:
        "Pentest exhaustivo sobre Metasploitable3, abarcando desde la fase de caja negra hasta la elevación de privilegios a root. Identificación y explotación de múltiples vulnerabilidades críticas, demostrando un compromiso total del sistema y ofreciendo recomendaciones de seguridad detalladas.",
      technologies: [
        "Metasploitable 3",
        "Kali Linux",
        "Nmap",
        "Metasploit",
        "Caja Negra",
        "Caja Blanca",
        "Análisis de vulnerabilidades",
        "Recomendaciones de seguridad",
      ],
      links: [
        {
          type: "Ver PDF",
          href: "https://drive.google.com/file/d/1mssi21O4jP8Iy6oRynBJiF0YCzSEmDBC/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pentest.png",
      video: "",
    },
    {
      title: "Análisis de Malware",
      href: "https://drive.google.com/file/d/1IadOZ8PchSVcTRVHpM779dH60ZQpMsB8/view?usp=sharing",
      dates: "May 2025",
      active: true,
      description:
        "Análisis detallado de un malware utilizando herramientas de análisis estático y dinámico. Identificación de patrones de comportamiento, técnicas de evasión y recomendaciones de mitigación. El análisis incluye ingeniería inversa, análisis de red y evaluación de impacto.",
      technologies: [
        "Ghidra",
        "Wireshark",
        "PE Studio",
        "ILSpy",
        "Análisis Estático",
        "Análisis Dinámico",
        "Análisis de Código",
        "Ingeniería Inversa",
      ],
      links: [
        {
          type: "Ver PDF",
          href: "https://drive.google.com/file/d/1IadOZ8PchSVcTRVHpM779dH60ZQpMsB8/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/malware.png",
      video: "",
    },
    {
      title: "Vikings eSports Club",
      href: "https://vikingsoftherift.netlify.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Sitio web oficial del club de esports Vikings of the Rift, desarrollado con React, JavaScript y CSS. El sitio permite a los usuarios conocer a los miembros del club, interactuar con el blog, realizar compras en la tienda oficial y contactar con el equipo.",
      technologies: [
        "HTML",
        "SCSS",
        "JavaScript",
        "React",
        "Python",
        "FastAPI",
        "MySQL",
        "EmailJS"
      ],
      links: [
        {
          type: "Website",
          href: "https://vikingsoftherift.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/rupi014/vikings-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vikings.png",
      video:
        "",
    },
    {
      title: "API de gestión de Vikings",
      href: "https://vikingsapi.netlify.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "API creada con FastAPI que permite la gestión de datos en una base de datos MySQL. A través de esta aplicación, se pueden realizar diversas operaciones de administración de pedidos, staff, usuarios, productos, etc.",
      technologies: [
        "HTML",
        "SCSS",
        "JavaScript",
        "React",
        "Python",
        "FastAPI",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://vikingsapi.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/rupi014/frontend-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/api.png",
      video: "",
    },
    {
      title: "PokeCheck",
      href: "https://pokecheck-rbl.netlify.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "Aplicación web sencilla que facilita la gestión de una lista de Pokémon para marcarlos como capturados. Utiliza la API de PokeAPI para obtener los datos de los Pokémon.",
      technologies: [
        "HTML",
        "SCSS",
        "JavaScript",
        "React",
        "Rest API",
      ],
      links: [
        {
          type: "Website",
          href: "https://pokecheck-rbl.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/rupi014/pokecheck",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pokecheck.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
