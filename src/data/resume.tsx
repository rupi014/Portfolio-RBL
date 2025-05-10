import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rubens Ballester Lillo",
  initials: "RBL",
  url: "https://dillion.io",
  location: "Portugalete, Vizcaya",
  locationLink: "https://www.google.com/maps/place/Portugalete",
  description:
    "Desarrollador en transición desde el sector de la salud. Apasionado por la tecnología y por crear soluciones que mejoren la vida de las personas.",
  summary:
    "Después de trabajar varios años como terapeuta ocupacional, decidí adentrarme en el mundo de la programación para unir mis conocimientos en salud con mi pasión por la tecnología. Hasta ahora, he desarrollado una web personal y una web para un equipo de eSports. Estoy constantemente ampliando mis habilidades en programación. Con un gran interés en informática, mi motivación principal es seguir aprendiendo y desarrollar proyectos que generen un impacto positivo en las personas.",
  avatarUrl: "/me.jpg",
  skills: [
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
        url: "https://www.linkedin.com/in/rubens-ballester-lillo-336902bb/",
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
      company: "IFAS Bizkaia",
      href: "https://ifas.bizkaia.eus/?idioma=ca",
      badges: [],
      location: "Bilbao",
      title: "Técnico en Terapia Ocupacional",
      logoUrl: "/IFAS.jpg",
      start: "Feb 2023",
      end: "Jun 2024",
      description:
      "Realicé sustituciones como terapeuta ocupacional en los centros de Gallarta, Virginetxe, Bekoetxe y Leioa de IFAS Bizkaia, adaptándome a diversos entornos y necesidades terapéuticas, y fortaleciendo mi capacidad de adaptación y trabajo en equipo."
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
      school: "BBK Bootcamp - Ciberseguridad",
      href: "https://bbkbootcamps.thebridge.tech/ciberseguridad",
      degree: "Certificado Junior en Ciberseguridad",
      logoUrl: "/bbk.png",
      start: "Mar 2025",
      end: "Actualidad",
      description: "Programa intensivo de ciberseguridad que cubre fundamentos de seguridad, análisis de vulnerabilidades, respuesta a incidentes y seguridad en la nube."
    },
    {
      school: "Bottega University",
      href: "https://bottega.edu/",
      degree: "Full Stack Development Certificate",
      logoUrl: "/bottega.jpeg",
      start: "Feb 2024",
      end: " Oct 2024",
      description: "Programa completo de desarrollo web que abarca tanto el frontend como el backend, incluyendo React, Node.js, y bases de datos."
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
      title: "Google Cybersecurity Professional Certificate V2",
      issuer: "Google",
      href: "https://www.credly.com/badges/f68a2936-db07-459d-8c48-a8932e3ec7e1/public_url",
      logoUrl: "/google.png",
      date: "May 2025",
    },

  ],
  projects: [
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
          type: "Source",
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
          type: "Source",
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
          type: "Source",
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
