interface ButtonProps {
  text: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon?: {
    src: string
    alt: string
    className?: string
  }
}

export function Button({ text, href, type, variant, className = '', onClick, disabled = false, icon }: ButtonProps) {
  const baseClasses = "inline-block rounded-full uppercase font-semibold text-quibo-xs text-center py-[1.14rem] px-[1.85rem] transition-all duration-300 ease-in-out transform hover:shadow-lg active:scale-95 animate-fade-in"

  const variantClasses = {
    primary: "bg-quibo-border text-quibo-text font-medium border-2 border-quibo-border hover:bg-quibo-text hover:text-white hover:border-quibo-border",
    secondary: "bg-quibo-text text-white font-medium border-2 border-quibo-text hover:bg-quibo-border hover:text-quibo-text hover:border-quibo-text"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className} ${icon ? 'flex items-center gap-[1.48rem]' : ''}`

  const content = (
    <>
      {text}
      {icon && (
        <img
          src={icon.src}
          alt={icon.alt}
          className={icon.className || "w-[1.48rem] h-auto"}
        />
      )}
    </>
  )

  // Render as button element when type is provided
  if (type) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {content}
      </button>
    )
  }

  // Render as anchor element when href is provided
  return (
    <a
      href={href}
      className={classes}
    >
      {content}
    </a>
  )
}
