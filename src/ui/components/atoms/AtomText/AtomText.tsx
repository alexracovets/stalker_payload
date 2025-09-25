"use client";

import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@utils";

const variants = cva("", {
  variants: {
    variant: {
      default: "text-sm",
      logo_title: cn(
        "text-[22px] font-regular font-calibri text-main-gray-light uppercase flex justify-between items-center w-full"
      ),
      header_top: cn(
        "text-[1.6rem] text-main-white-light font-roboto",
        "transition-opacity ease-in-out duration-300"
      ),
      destructive_label: cn(
        "text-[1.8rem] font-roboto text-main-destructive-label"
      ),
      h1: cn(
        "text-[32px] font-roboto_condensed font-medium text-main-destructive-bg"
      ),
      description: cn("text-[18px] font-roboto text-main-yellow"),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AtomTextProps {
  variant: VariantProps<typeof variants>["variant"];
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export const AtomText = ({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: AtomTextProps) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="text"
      className={cn(variants({ variant, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
};
