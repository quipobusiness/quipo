import { ContactSection as ContactSectionType } from '../types'

interface ContactSectionProps {
  contact: ContactSectionType
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contacto" className="py-[7.41rem] px-[1.85rem] bg-quibo-text">
      <div className="max-w-[80%] lg:max-w-[74rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-[3.7rem]">
          <h2 className="text-white text-[2.96rem] font-normal leading-[1.1] mb-[1.85rem]">
            {contact.title}
          </h2>
          <p className="text-white text-[1.11rem] leading-[1.4]">
            {contact.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[3.7rem]">
          {/* Form - 70% width */}
          <div className="lg:w-[70%]">
            <form
              action={contact.form.formspark.actionUrl}
              method="POST"
              className="space-y-[1.48rem]"
            >
              {contact.form.fields.map((field, index) => (
                <div key={index}>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.label}
                      required={field.required}
                      rows={4}
                      className="w-full px-[1.11rem] py-[0.93rem] bg-quibo-input-bg text-white placeholder-white/70 rounded-[0.44rem] border-none focus:outline-none focus:ring-2 focus:ring-quibo-border"
                    />
                  ) : (
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.label}
                      required={field.required}
                      className="w-full px-[1.11rem] py-[0.93rem] bg-quibo-input-bg text-white placeholder-white/70 rounded-[0.44rem] border-none focus:outline-none focus:ring-2 focus:ring-quibo-border"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="bg-quibo-border text-quibo-text rounded-full uppercase font-semibold
                           text-[0.93rem] px-[2.22rem] py-[1.48rem]
                           hover:opacity-90 transition-opacity duration-200
                           flex items-center gap-[1.48rem]"
              >
                {contact.cta}
                <img
                  src="/svg/arrow-r.svg"
                  alt="Arrow"
                  className="w-[1.48rem] h-auto"
                />
              </button>
            </form>
          </div>

          {/* Info Panel - 30% width */}
          <div className="lg:w-[30%]">
            {/* Contact Info - Column */}
            <div className="space-y-[1.48rem] mb-[2.96rem]">
              <h3 className="text-white text-[1.48rem] font-medium mb-[1.85rem]">
                {contact.info.title}
              </h3>

              <div className="text-white text-[1.11rem] leading-[1.4]">
                <p className="mb-[0.74rem]">
                  <strong>Teléfono:</strong><br />
                  <a href={`tel:${contact.info.tel}`} className="hover:text-quibo-border">
                    {contact.info.tel}
                  </a>
                </p>

                <p className="mb-[0.74rem]">
                  <strong>Email:</strong><br />
                  <a href={`mailto:${contact.info.email}`} className="hover:text-quibo-border">
                    {contact.info.email}
                  </a>
                </p>

                <p>
                  <strong>Dirección:</strong><br />
                  {contact.info.address}
                </p>
              </div>
            </div>

            {/* Social Icons - Row */}
            <div className="flex gap-[1.48rem]">
              <a
                href={contact.info.social.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src={contact.info.social.facebook.icon}
                  alt={contact.info.social.facebook.alt}
                  className="w-[2.22rem] h-auto"
                />
              </a>

              <a
                href={contact.info.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src={contact.info.social.instagram.icon}
                  alt={contact.info.social.instagram.alt}
                  className="w-[2.22rem] h-auto"
                />
              </a>

              <a
                href={contact.info.social.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src={contact.info.social.whatsapp.icon}
                  alt={contact.info.social.whatsapp.alt}
                  className="w-[2.22rem] h-auto"
                />
              </a>

              <a
                href={contact.info.social.youtube.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src={contact.info.social.youtube.icon}
                  alt={contact.info.social.youtube.alt}
                  className="w-[2.22rem] h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-[3.7rem] pt-[1.85rem] border-t border-white/20">
          <p className="text-white/70 text-[0.93rem]">
            {contact.copyright}
          </p>
        </div>
      </div>
    </section>
  )
}
