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
    whatsapp: {
      icon: "/svg/social-wa.svg",
      href: "https://wa.me/your-number",
      alt: "WhatsApp"
    },

  },

  // Contact form
  contact: {
    title: "Ponte en Contacto",
    subtitle: "Nos encantaría escucharte",
    form: {
      formspark: {
        actionUrl: "https://submit-form.com/your-form-id", // Replace with your formspark URL
      },
      fields: [
        { name: "name", label: "Nombre", type: "text", required: true },
        { name: "email", label: "Correo Electrónico", type: "email", required: true },
        { name: "message", label: "Mensaje", type: "textarea", required: true }
      ]
    }
  }
}
