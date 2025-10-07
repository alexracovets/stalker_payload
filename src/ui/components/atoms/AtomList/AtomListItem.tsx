"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils";

const variants = cva("w-full", {
  variants: {
    variant: {
      default: "",
      column_section_view: cn(
        "relative nth-of-type-[2n]:bg-main-border hover:bg-[#EF8E020F]! relative transition-background ease-in-out duration-300",
        "before:content-[''] before:absolute before:left-0 before:top-0 before:w-[8px] before:h-full before:bg-transparent hover:before:bg-main-yellow-border before:transition-background before:ease-in-out before:duration-300",
        "after:content-[''] after:absolute after:right-0 after:top-0 after:w-[8px] after:h-full after:bg-transparent hover:after:bg-main-yellow-border after:transition-background after:ease-in-out after:duration-300"
      ),
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

interface AtomListItemProps {
  children: React.ReactNode;
  variant?: VariantProps<typeof variants>["variant"];
  className?: string;
}

export const AtomListItem = ({
  children,
  variant,
  className,
}: AtomListItemProps) => {
  return <li className={cn(variants({ variant, className }))}>{children}</li>;
};
