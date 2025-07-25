import { ClientCard } from './ClientCard'
import { Carousel } from './Carousel'
import { Clients } from '../types'

interface ClientsSectionProps {
  clients: Clients
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  // Handle case where clients data might not be available
  if (!clients || !clients.clients || clients.clients.length === 0) {
    return null
  }

  return (
    <section className="pt-[4.5rem] pb-[3.1rem] bg-quibo-border overflow-hidden">
      <div className="lg:max-w-none mx-auto lg:mx-0">
        <div className="max-w-[80%] mx-auto lg:max-w-none lg:mx-0">
          <h2 className="text-quibo-text text-quibo-xl font-medium leading-[1.07] mb-[3.7rem] text-center"
          dangerouslySetInnerHTML={{ __html: clients.title }} />
        </div>
        {/* Carousel Container */}
        <Carousel>
          {clients.clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}
