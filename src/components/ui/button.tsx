import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-glow shadow-soft hover:shadow-elegant",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-soft",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-accent shadow-soft hover:shadow-rose",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-accent text-primary-foreground font-semibold shadow-premium hover:shadow-glow border-0 hover:scale-105",
        premium: "gradient-premium text-foreground font-semibold shadow-elegant hover:shadow-premium border border-accent/30 hover:scale-105",
        elegant: "bg-card backdrop-blur-sm text-card-foreground border-2 border-accent/50 hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-elegant",
        luxury: "bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-premium hover:shadow-glow hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-semibold",
        icon: "h-12 w-12",
        hero: "h-16 rounded-2xl px-12 text-xl font-bold",
        premium: "h-14 rounded-2xl px-10 text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
