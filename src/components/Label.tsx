interface LabelProps {
  children: React.ReactNode
}

export function Label({ children }: LabelProps) {
  return (
    <span className="bg-quibo-green-light text-quibo-green-dark text-quibo-xs font-medium uppercase tracking-wider mb-[1.48rem] inline-block rounded-[0.44rem] px-[1.04rem] py-[0.52rem]">
      {children}
    </span>
  )
}
