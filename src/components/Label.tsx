interface LabelProps {
  children: React.ReactNode,
  className?: string
}

export function Label({ children, className }: LabelProps) {
  return (
    <span className={`bg-quibo-green-light text-quibo-green-dark text-quibo-xs font-medium uppercase tracking-wide inline-block rounded-[0.44rem] py-[0.55rem] px-[1.1rem] leading-none ${className}`}>
      {children}
    </span>
  )
}
