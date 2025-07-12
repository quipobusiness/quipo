import { ContactSection as ContactSectionType } from '../types'

interface ContactSectionProps {
  contact: ContactSectionType
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-gray-600">
            {contact.subtitle}
          </p>
        </div>

        <form
          action={contact.form.formspark.actionUrl}
          method="POST"
          className="space-y-6"
        >
          {contact.form.fields.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
