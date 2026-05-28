import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"


const badgeVariants = cva(
  "inline-flex items-center rounded-lg border-2 px-3 py-1 text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",

        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",

        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",

        outline:
          "border-2 border-[#4537e2] text-[#4537e2] bg-white shadow-sm hover:bg-[#4537e2] hover:text-white",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);


function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
