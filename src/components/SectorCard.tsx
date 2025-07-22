import { Sector } from '../types'
import { resolveAssetPath } from '../utils'

interface SectorCardProps {
  sector: Sector
}

export function SectorCard({ sector }: SectorCardProps) {
  return (
    <div className="bg-quibo-text p-[1.4rem] pb-[3.7rem] text-left relative rounded-[1.6rem] flex flex-col gap-[1.22rem]">
      <img
        src={resolveAssetPath("/svg/check.svg")}
        alt="Check"
        className=" w-[3.63rem] h-auto"
      />
      <h4 className="text-white text-quibo-sm font-medium">
        {sector.title}
      </h4>
      <p className="text-white text-quibo-xs leading-[1.4]">
        {sector.description}
      </p>
    </div>
  )
}
