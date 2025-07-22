import { ContactSection as ContactSectionType } from '../types'
import { SocialMedia } from './SocialMedia'
import { Button } from './Button'

interface ContactSectionProps {
  contact: ContactSectionType
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contacto" className="pt-[5.48rem] pb-[1.62rem] bg-quibo-text flex flex-col">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row gap-[3.7rem] mb-[4.81rem]">
        {/* Form - 70% width */}
        <div className="lg:w-[70%]">
          <h2 className="text-white text-quibo-md font-medium mb-[2.18rem]">
            {contact.title}
          </h2>
          <form
            action={contact.form.formspark.actionUrl}
            method="POST"
            className="flex flex-col gap-[0.55rem] items-end"
          >
            {contact.form.fields.map((field, index) => (
              <div key={index} className="w-full">
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    placeholder={field.label}
                    required={field.required}
                    rows={4}
                    className="w-full px-[1.48rem] py-[0.48rem] bg-quibo-input-bg text-white placeholder-white/70 rounded-[0.7rem] border-none focus:outline-none focus:ring-2 focus:ring-quibo-border"
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.label}
                    required={field.required}
                    className="w-full px-[1.48rem] py-[0.48rem] bg-quibo-input-bg text-white placeholder-white/70 rounded-[0.7rem] border-none focus:outline-none focus:ring-2 focus:ring-quibo-border"
                  />
                )}
              </div>
            ))}

            <Button
              text={contact.cta}
              type="submit"
              variant="primary"
              className="px-[2.22rem]"
              icon={{
                src: "/svg/arrow-r.svg",
                alt: "Arrow",
                className: "w-[2.18rem] h-auto -my-[1rem]"
              }}
            />
          </form>
        </div>

          {/* Info Panel - 30% width */}
        <div className="lg:w-[30%]">
          {/* Contact Info - Column */}
          <div className="mb-[3.2rem]">
            <h3 className="text-white text-quibo-md font-medium mb-[3.2rem]">
              {contact.info.title}
            </h3>

            <div className="text-white text-quibo-xs ">
              <a href={`tel:${contact.info.tel}`} className="block hover:text-quibo-border mb-[1.59rem]">
                {contact.info.tel}
              </a>
              <a href={`mailto:${contact.info.email}`} className="block hover:text-quibo-border mb-[1.59rem]">
                {contact.info.email}
              </a>
              {contact.info.address}
            </div>
          </div>

          {/* Social Icons - Row */}
          <SocialMedia social={contact.info.social} />
        </div>
      </div>
      {/* Copyright */}
      <p className="text-white/70 text-quibo-xs mx-[2.77rem]">
        {contact.copyright}
      </p>
    </section>
  )
}
