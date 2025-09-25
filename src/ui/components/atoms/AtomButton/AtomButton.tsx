import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@utils";

const buttonVariants = cva("cursor-pointer", {
  variants: {
    variant: {
      default: "",
      destructive: cn(
        "text-[2.5rem] text-main-destructive font-rethink_sans font-extrabold flex justify-center items-center w-[3.6rem] h-[3.6rem] border-[.1rem] border-main-black rounded-[.4rem] bg-main-destructive-bg bg-[url('/png/btn_destructive.png')] bg-contain sepia leading-[1]"
      ),
      destructive_with_label: cn(
        "flex justify-center items-center gap-x-[1.6rem]"
      ),
      view_switch: cn("px-[12px] py-[8px]"),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const AtomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
AtomButton.displayName = "AtomButton";

export { AtomButton, buttonVariants };
