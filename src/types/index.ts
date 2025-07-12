// Navigation types
export interface NavigationLink {
  label: string
  href: string
}

export interface Navigation {
  logo: {
    src: string
    alt: string
  }
  links: NavigationLink[]
  whatsapp: {
    icon: string
    href: string
    alt: string
  }
}

// Hero section types
export interface HeroSection {
  title: string
  subtitle: string
  cta: {
    primary: string
    secondary: string
  }
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
  contact: ContactSection
}
