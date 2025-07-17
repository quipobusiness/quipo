import { Category } from '../types'
import { Button } from './Button'
import { Label } from './Label'

interface CategoriesCardProps {
  category: Category
}

export function CategoriesCard({ category }: CategoriesCardProps) {
  return (
    <div className="bg-quibo-gray-light p-[1.85rem] text-left rounded-[1.27rem] pt-[1.36rem] px-[1.68rem] pb-[2.76rem] flex flex-col">
      <div className="xl:pb-[2.54rem]">
        <Label>{category.label}</Label>
      </div>
      <h3 className="text-quibo-text font-medium text-[2.22rem] mb-[2.85rem]">
        {category.title}
      </h3>
      <hr className="border-quibo-green-light border-t-2 pb-[1.27rem] mb-0" />
      <h4 className="text-quibo-text font-medium text-quibo-md mb-[2.03rem] pr-[5.57rem]">
        {category.subtitle}
      </h4>
      <p className="text-quibo-text leading-[1.4] text-[0.80rem] mb-[3.17rem] pr-[5.57rem] flex-grow">
        {category.description}
      </p>
      <Button
        text={category.cta.text}
        href={category.cta.href}
        variant="secondary"
        className="w-[15rem]"
      />
    </div>
  )
}
