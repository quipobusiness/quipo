// Navigation types
export interface NavigationLink {
  label: string
  href: string
}
interface Image {
  src: string
  alt: string
}

export interface Navigation {
  logo: Image
  logoLong: Image,
  links: NavigationLink[]
  whatsapp: {
    icon: string
    href: string
    alt: string
  }
}

// Hero section types
export interface HeroSection {
  logo: Image;
  bgImage: string
  title: string
  cta: {
    title: string
    href: string
  }
}

// Service CTA types
export interface ServiceCTAProps {
  label: string
  title: string
  description: string
  cta: {
    text: string
    href: string
  }
  img: {
    src: string
    alt: string
  }
  bgImg: string
  reverse?: boolean
}

// Contact form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  required: boolean
}

export interface ContactForm {
  formspark: {
    actionUrl: string
  }
  fields: FormField[]
}

export interface ContactSection {
  title: string
  subtitle: string
  form: ContactForm
}

// Main content structure
export interface LandingPageContent {
  hero: HeroSection
  navigation: Navigation
  contabilidadCta: ServiceCTAProps
  impuestosCta: ServiceCTAProps
  contact: ContactSection
}
