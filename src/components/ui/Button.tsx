import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-gradient-to-r from-primary to-[#a00028] text-white shadow-lg shadow-primary/30":
                            variant === "primary",
                        "bg-white/10 text-white hover:bg-white/20":
                            variant === "secondary",
                        "border border-white/20 text-white hover:bg-white/10":
                            variant === "outline",
                        "text-white hover:bg-white/10": variant === "ghost",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
