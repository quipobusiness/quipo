import { Category } from '../types'
import { Button } from './Button'
import { Label } from './Label'

interface CategoriesCardProps {
  category: Category
}

export function CategoriesCard({ category }: CategoriesCardProps) {
  return (
    <div className="bg-quibo-gray-light p-[1.85rem] text-left xl:rounded-[1.48rem] xl:pt-[1.59rem] xl:px-[1.96rem] xl:pb-[3.22rem]">
      <div className="xl:pb-[2.96rem]">
        <Label>{category.label}</Label>
      </div>
      <h3 className="text-quibo-text text-[1.48rem] font-medium mb-[0.74rem] xl:text-[2.59rem] xl:pb-[3.33rem] xl:mb-0">
        {category.title}
      </h3>
      <hr className="border-quibo-green-light border-t-2 mb-[0.74rem] xl:pb-[1.48rem] xl:mb-0" />
      <h4 className="text-quibo-text text-[1.11rem] font-medium mb-[0.74rem] xl:text-[1.85rem] xl:pb-[2.37rem] xl:mb-0">
        {category.subtitle}
      </h4>
      <p className="text-quibo-text text-[1.11rem] leading-[1.4] mb-[1.48rem] xl:text-[0.93rem] xl:pb-[3.7rem] xl:pr-[10rem] xl:mb-0">
        {category.description}
      </p>
      <Button
        text={category.cta.text}
        href={category.cta.href}
        variant="secondary"
        className="xl:font-satoshi xl:font-medium xl:px-[7.04rem]"
      />
    </div>
  )
}
