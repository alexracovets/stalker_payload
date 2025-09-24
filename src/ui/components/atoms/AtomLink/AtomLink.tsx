"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@utils";

const variants = cva("", {
  variants: {
    variant: {
      default: "bg-red",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AtomLinkProps {
  variant: VariantProps<typeof variants>["variant"];
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export const AtomLink = ({
  variant,
  className,
  children,
  href,
  ...props
}: AtomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(variants({ variant, className }))}
      {...props}
    >
      {children}
    </Link>
  );
};
