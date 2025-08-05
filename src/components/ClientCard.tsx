import { resolveAssetPath } from '../utils'
import { Client } from '../types'

interface ClientCardProps {
  client: Client
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="flex-shrink-0 w-full lg:w-[calc((100%-6.3rem)/2.4)] lg:first:ml-[1.85rem]">
      {/* Client Card */}
      <div className="px-[1.85rem] lg:mx-0 lg:px-0 flex flex-col h-full gap-[1.85rem]">
        {/* Logo with white background */}
        <div className="bg-white rounded-[1.6rem] h-[10.6rem] flex items-center justify-center">
          <img
            src={resolveAssetPath(client.logo.src)}
            alt={client.logo.alt}
            className="max-w-[90%] max-h-[7.81rem] w-auto h-auto"
          />
        </div>

        {/* Content with gray background */}
        <div className="bg-quibo-gray-light p-[1.85rem] pb-[5.4rem] rounded-[1.6rem] flex-1">
          <h3 className="text-quibo-text text-quibo-md font-medium mb-[3.15rem] leading-[.9]">
            {client.title}
          </h3>
          <p className="text-quibo-text text-justify text-quibo-xs leading-[1.1rem]" dangerouslySetInnerHTML={{ __html: client.description }} />
        </div>
      </div>
    </div>
  )
}
