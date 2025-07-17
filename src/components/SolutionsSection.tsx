import { Solutions } from '../types'
import { Button } from './Button'
import { Label } from './Label'
import { CategoriesCard } from './CategoriesCard'

interface SolutionsSectionProps {
  solutions: Solutions
}

export function SolutionsSection({ solutions }: SolutionsSectionProps) {
  return (
    <section id="soluciones" className="py-[7.41rem] px-[1.85rem] xl:pt-[2.54rem] xl:pb-[2.09rem]">
      <div className="max-w-[80%] lg:max-w-[74rem] mx-auto xl:max-w-[87%]">
        <h2 className="text-quibo-text text-quibo-xl font-normal leading-[1.1] mb-[3.7rem] text-center">
          {solutions.title1}
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0.67rem] mb-[3.7rem]">
          {solutions.categories.map((category, index) => (
            <CategoriesCard key={index} category={category} />
          ))}
        </div>

        <h2 className="text-quibo-text text-quibo-xl font-normal leading-[1.1] mb-[3.7rem] text-center">
          {solutions.title2}
        </h2>

        {/* Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[0.67rem]">
          {solutions.sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-quibo-text p-[1.85rem] text-left relative"
            >
              <img
                src="/svg/check.svg"
                alt="Check"
                className="absolute top-[1.85rem] left-[1.85rem] w-[3.63rem] h-auto"
              />
              <h4 className="text-white text-quibo-sm font-medium mt-[4.44rem] mb-[0.74rem]">
                {sector.title}
              </h4>
              <p className="text-white text-quibo-xs leading-[1.4]">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
