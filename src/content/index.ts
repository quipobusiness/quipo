import { LandingPageContent } from '../types'

export const content: LandingPageContent = {
  // Hero section
  hero: {
    title: "Tu Título Principal",
    subtitle: "Tu subtítulo descriptivo va aquí",
    cta: {
      primary: "Comenzar",
      secondary: "Saber Más"
    }
  },

  // Navigation
  navigation: {
    logo: {
      src: "/svg/logo.svg",
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
    }
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
