import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-[1px] hover:shadow-sm",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border/50 bg-transparent text-foreground hover:bg-accent/20 hover:text-accent-foreground dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary/50 text-secondary-foreground border border-border/30 hover:bg-secondary/80 hover:-translate-y-[1px]",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground dark:hover:bg-accent/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[40px] px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-[10px] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-[48px] rounded-[14px] px-8 has-[>svg]:px-6",
        icon: "size-[40px] rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
