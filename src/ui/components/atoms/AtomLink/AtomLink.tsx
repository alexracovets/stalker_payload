"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@utils";

const variants = cva("", {
  variants: {
    variant: {
      default: "bg-red",
      home_link: cn(
        "text-[32px] text-main-white uppercase font-roboto_condensed font-medium w-[390px] h-[40px] relative clip_startBtn flex justify-center items-center",
        "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url('/png/btn_home.png')] after:bg-cover after:opacity-0",
        "hover:after:opacity-[1]",
        "active:after:opacity-[1] active:bg-main-white active:text-main-black"
      ),
      pda_link: cn(
        "block text-[2.5rem] font-normal font-roboto_condensed py-[2.5rem] px-[3rem] cursor-pointer text-main-gray relative",
        "before:content-[var(--before-content)] before:absolute before:left-0 before:top-0 before:w-full before:h-full",
        "before:flex before:justify-center before:items-center",
        "before:transition-all before:ease-in-out before:duration-100 before:will-change-auto",
        "hover:before:text-main-white-active hover:before:font-medium  "
      ),
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
  style?: React.CSSProperties;
}

export const AtomLink = ({
  variant,
  className,
  children,
  href,
  style,
  ...props
}: AtomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(variants({ variant, className }))}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
};
