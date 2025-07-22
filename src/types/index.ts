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
  social: {
    facebook: SocialIcon
    instagram: SocialIcon
    whatsapp: SocialIcon
    youtube: SocialIcon
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

// Solutions types
export interface Category {
  label: string
  title: string
  subtitle: string
  description: string
  cta: {
    text: string
    href: string
  }
}

export interface Sector {
  title: string
  description: string
}

export interface Solutions {
  title1: string
  title2: string
  categories: Category[]
  sectors: Sector[]
}

// Services types
export interface ServiceCategory {
  label: string
  title: string
  img: Image
  description: string
}

export interface Services {
  mainLabel: string
  title: string
  description: string
  bgImg: string
  categories: ServiceCategory[]
  cta: {
    text: string
    href: string
  }
}

// Clients types
export interface Client {
  logo: Image
  title: string
  description: string
}

export interface Clients {
  title: string
  clients: Client[]
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

export interface SocialIcon {
  icon: string
  href: string
  alt: string
}

export interface ContactInfo {
  title: string
  tel: string
  email: string
  address: string
  social: {
    facebook: SocialIcon
    instagram: SocialIcon
    whatsapp: SocialIcon
    youtube: SocialIcon
  }
}

export interface ContactSection {
  title: string
  form: ContactForm
  cta: string
  info: ContactInfo
  copyright: string
}

// Main content structure
export interface LandingPageContent {
  hero: HeroSection
  navigation: Navigation
  contabilidadCta: ServiceCTAProps
  impuestosCta: ServiceCTAProps
  solutions: Solutions
  services: Services
  clients?: Clients
  contact: ContactSection
}
