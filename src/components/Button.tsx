interface ButtonProps {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

export function Button({ text, href, variant }: ButtonProps) {
  const baseClasses = "inline-block rounded-full uppercase font-semibold text-[0.93rem] px-[2.22rem] py-[1.48rem] hover:opacity-90 transition-opacity duration-200"

  const variantClasses = {
    primary: "bg-quibo-border text-quibo-text font-medium",
    secondary: "bg-quibo-text text-white"
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {text}
    </a>
  )
}
