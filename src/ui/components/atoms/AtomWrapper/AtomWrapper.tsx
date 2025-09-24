"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@utils";

const variants = cva("", {
  variants: {
    variant: {
      default: "w-full",
      home_page: "w-full h-full relative",
      home_header: cn(
        "absolute top-0 left-0 z-[1]",
        "flex flex-col justify-center items-center w-[520px] h-full bg-main-black p-[32px] gap-y-[48px]"
      ),
      home_logo_wrapper: cn(
        "flex flex-col justify-center items-center gap-y-[2px]"
      ),
      home_video: cn("w-full h-full object-cover relative"),
      home_navigation: cn(
        "flex flex-col justify-center items-center w-full gap-y-[24px]"
      ),
      home_navigationElement: cn("flex justify-center items-center w-full"),
      pda_header: cn("relative"),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AtomWrapperProps extends React.ComponentProps<"div"> {
  variant?: VariantProps<typeof variants>["variant"];
  asChild?: boolean;
}

export const AtomWrapper = ({
  children,
  variant = "default",
  className,
  asChild = false,
  ...props
}: AtomWrapperProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component className={cn(variants({ variant, className }))} {...props}>
      {children}
    </Component>
  );
};
