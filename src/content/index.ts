import { LandingPageContent } from '../types'

export const content: LandingPageContent = {
  // Hero section
  hero: {
    logo: {
      src: '/svg/logo-green.svg',
      alt: 'Quibo. Business partners'
    },
    bgImage: '/img/hero.webp',
    title: "Somos tu equipo contable<br />y de negocios.",
    cta: {
      title: "Haz una cita",
      href: "#contact"
    }
  },

  // Navigation
  navigation: {
    logo: {
      src: "/svg/logo.svg",
      alt: "Quibo. Business partners"
    },
    logoLong: {
      src: "/svg/logo-long.svg",
      alt: "Quibo. Business partners"
    },
    links: [
      { label: "SOLUCIONES", href: "#soluciones" },
      { label: "SERVICIOS", href: "#servicios" },
      { label: "CONTACTO", href: "#contacto" }
    ],
    social: {
      facebook: {
        icon: "/svg/social-fb.svg",
        href: "https://www.facebook.com/quipo.mx",
        alt: "Facebook"
      },
      instagram: {
        icon: "/svg/social-ig.svg",
        href: "https://www.instagram.com/quipo.mx",
        alt: "Instagram"
      },
      whatsapp: {
        icon: "/svg/social-wa.svg",
        href: "https://wa.me/your-number",
        alt: "WhatsApp"
      },
      youtube: {
        icon: "/svg/social-yt.svg",
        href: "https://www.youtube.com/quipo.mx",
        alt: "Youtube"
      }
    }
  },

  contabilidadCta: {
    label: "Contabilidad",
    title: "La salud de tu negocio, está en <em>los números.</em>",
    description: "En la vida como en los negocios, el objetivo es <strong>encontrar el equilibrio</strong>, el balance perfecto entre salud y crecimiento, entre bienestar y rendimiento.",
    cta: {
      text: "HABLEMOS DE NÚMEROS",
      href: "#contacto"
    },
    img: {
      src: "/img/Quipo-Balance-mono.png",
      alt: "Contabilidad"
    },
    bgImg: "/img/Quipo-Balance-BG.png"
  },
  solutions: {
    title1: "Soluciones a la medida de tu negocio",
    title2: "A quienes ayudamos",
    categories: [
      {
        label: "Nuevos emprendimientos",
        title: "Inicia tu negocio",
        subtitle: "Constitución de empresas",
        description: "Te ayudamos a registrar la razón social de tu negocio, buscando optimizar en términos fiscales los beneficios que te brinda una empresa.",
        cta: {
          text: "Empieza hoy",
          href: "#contacto"
        }
      },
      {
        label: "Cámbiate a Quipo",
        title: "Haz crecer tu negocio",
        subtitle: "Consultoría fiscal y contable",
        description: "Revisamos las operaciones de tu negocio para identificar si cumples con las regularizaciones fiscales y posteriormente te brindamos una estrategia que te permita maximizar tus utilidades.",
        cta: {
          text: "Agenda un diagnóstico",
          href: "#contacto"
        }
      }
    ],
    sectors: [
      {
        title: "Médicos y Dentistas",
        description: "Contabilidad, facturación y declaraciones optimizadas para mantener tu práctica en regla."
      },
      {
        title: "Nuevos Negocios",
        description: "Desde la gestión de trámites municipales, hasta tu alta en el SAT e IMSS, te guiamos para que empieces bien y sin errores."
      },
      {
        title: "Empresas e Industria",
        description: "Optimizamos tu operación fiscal y contable, cuidando cumplimiento, nómina y atención a requerimientos."
      },
      {
        title: "Asalariados y Jubilados",
        description: "Te ayudamos a recuperar impuestos, aprovechar deducciones y mantener todo en orden."
      }
    ]
  },
  impuestosCta: {
    label: "Impuestos",
    title: "En paz con tus <em>impuestos</em>",
    description: "Simplificamos el proceso de facturación electrónica para tu empresa. Cumplimos con todos los requisitos fiscales mientras automatizamos tus procesos para mayor eficiencia y control.",
    cta: {
      text: "Empezar ahora",
      href: "#contacto"
    },
    img: {
      src: "/img/Quipo-Paz-mono.png",
      alt: "Facturación electrónica"
    },
    bgImg: "/img/Quipo-Paz-BG.png",
    reverse: true
  },
  // Servicios
  services: {
    mainLabel: "Servicios",
    title: "Inteligencia Fiscal<br />y de <em>Negocios</em>",
    description: "Entendemos de personas y de números, no somos amigos del SAT ni del IMSS pero tampoco son nuestros enemigos, aun así, los conocemos muuuy de cerca.",
    bgImg: "/img/accent.webp",
    categories: [
      {
        label: "Contabilidad",
        title: "Contabilidad y<br />cumplimiento fiscal",
        img: {
          src: "/img/contabilidad.webp",
          alt: "Contabilidad",
        },
        description: "Nos encargamos de tus números para que no te preocupes por el SAT. Llevamos tu contabilidad al día, revisamos que todo esté en orden y corregimos lo que haga falta.<br /><br />Tú enfócate en vender, nosotros en mantener tu negocio en regla.",
      },
      {
        label: "Facturación",
        title: "Factura fácil y rápido",
        img: {
          src: "/img/facturacion.webp",
          alt: "Facturación",
        },
        description: "¿Necesitas facturar? Lo haces tú desde la app o lo hacemos por ti. Así de fácil. Sin complicaciones, sin perder tiempo y sin errores."
      },
      {
        label: "Nóminas e IMSS",
        title: "Manejo de nómina, análisis y seguridad social",
        img: {
          src: "/img/nomina.webp",
          alt: "Nóminas e IMSS",
        },
        description: "Procesamos todo lo relacionado con la nómina e IMSS: incidencias, finiquitos, altas, bajas, modificaciones de salario, cálculo, timbrado y envío de recibos de nómina.<br /><br />Calculamos y presentamos primas de riesgo, diferencias, entre otros.<br /><br />Para que no te preocupes por multas."
      }
    ],
    cta: {
      text: "Conoce más sobre nuestros servicios",
      href: "#contacto"
    }
  },
  // Clientes
  clients: {
    title: "Qué opinan<br /><em>nuestros clientes</em>",
    clients: [
      {
        logo: {
          src: "/img/molar-house.webp",
          alt: "Molar House",
        },
        title: "Excelente servicio, profesionales y con amplia experiencia.",
        description: "Hace cuatro años, un buen amigo nos recomendó los servicios de Quipo, y desde nuestra primera reunión con el Lic. Juan carlos, notamos la diferencia. Nos dio un diagnóstico claro y un panorama preciso sobre nuestras posibilidades como nuevos emprendedores. Veníamos de una contabilidad desorganizada, pero gracias a su guía, logramos poner todo en orden.<br /><br />La Lic. Valeria, por su parte, nos apoya de manera excepcional en temas de nómina e imss, siempre con un enfoque profesional y detallado. Ambos destacan por su honestidad, atención al detalle y profundo conocimiento en su área."
      },
      {
        logo: {
          src: "/img/aip.webp",
          alt: "Arquitectura Imagen Pintura",
        },
        title: "Resultados evidentes y excelentes.",
        description: "Nuestra empresa atravesaba una situación fiscal complicada debido a la falta de una asesoría contable confiable. Tomar la decisión de cambiar de despacho no fue fácil, pero en muy poco tiempo los resultados fueron evidentes y excelentes. Logramos sanear por completo nuestra situación fiscal y, desde entonces, recibimos una atención puntual, acertada y profesional. Hoy tenemos plena confianza en la asesoría que recibimos y la tranquilidad de estar cumpliendo correctamente con todas nuestras obligaciones."
      },
      {
        logo: {
          src: "/img/energente.webp",
          alt: "Energente - Energía inteligente",
        },
        title: "Siempre atentos y responsables.",
        description: "El despacho de Quipo ha sido un gran aliado para     Energía Energente, ayudándonos a llevar un buen   control de nuestra nomina y de nuestra contabilidad. Siempre atentos, responsables y con disponibilidad para resolver nuestras dudas."
      },
      {
        logo: {
          src: "/img/elevanova.webp",
          alt: "Elevanova - Venta y renta de maquinaria",
        },
        title: "Amplio conocimiento y experiencía.",
        description: "El Lic. Juan Carlos Pedroza nos brindó toda la asesoría necesaria para poner en marcha nuestra empresa, abarcando desde aspectos legales hasta la orientación fiscal indispensable para iniciar un negocio conforme a la normativa. Su amplio conocimiento y experiencia en materia fiscal han sido clave para cumplir con todos los requisitos aplicables.<br /><br />Reiteramos nuestra recomendación y expresamos nuestra plena satisfacción con sus servicios."
      },
      {
        logo: {
          src: "/img/vip-pinturas.webp",
          alt: "Vip Pinturas - Todo para el carrocero pintor",
        },
        title: "Atención y asesoría constante.",
        description: "HEs un gusto trabajar con un despacho contable        generacional que siempre nos ha guiado por el camino correcto, contable y fiscalmente. Esto nos ha permitido crecer como empresa, obteniendo como resultado la tranquilidad de que todo está en orden y evitando problemas fiscales.<br /><br />Desde hace 20 años que iniciamos nuestra empresa, hemos recibido una atención y asesoría constante que nos ha permitido estar siempre a la vanguardia. El contador Juan Carlos Pedroza siempre se ha preocupado por continuar con su preparación constante, no solo en temas de contabilidad, sino también en tecnología.  "
      }
    ]
  },

  // Contact form
  contact: {
    title: "Cuéntanos sobre tu negocio",
    form: {
      formspark: {
        actionUrl: "https://submit-form.com/XBdj2sBul", // Replace with your formspark URL
      },
      fields: [
        { name: "name", label: "Nombre", type: "text", required: true },
        { name: "empresa", label: "Empresa", type: "text", required: true },
        { name: "telefono", label: "Teléfono", type: "text", required: false },
        { name: "email", label: "Correo Electrónico", type: "email", required: true },
        { name: "celular", label: "Cel", type: "text", required: false },
        { name: "message", label: "Mensaje", type: "textarea", required: true }
      ]
    },
    cta: "Enviar",
    info: {
      title: "Contacto",
      tel: "+52 663 439 1259",
      email: "contacto@quipo.mx",
      address: "Josefa Ortiz de Dominguez 1310 Zona Urbana Rio Tijuana, Tijuana B.c. Cp 22010",
      social: {
        facebook: {
          icon: "/svg/social-fb.svg",
          href: "https://www.facebook.com/quipo.mx",
          alt: "Facebook"
        },
        instagram: {
          icon: "/svg/social-ig.svg",
          href: "https://www.instagram.com/quipo.mx",
          alt: "Instagram"
        },
        whatsapp: {
          icon: "/svg/social-wa.svg",
          href: "https://wa.me/your-number",
          alt: "WhatsApp"
        },
        youtube: {
          icon: "/svg/social-yt.svg",
          href: "https://www.youtube.com/quipo.mx",
          alt: "Youtube"
        }
      }
    },
    copyright: "QUIPO Business Partners © Todos los derechos reservados"
  }
}
