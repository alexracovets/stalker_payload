"use client";

import Image from "next/image";
import { Media } from "@payload-types";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils";

interface AtomImageProps {
  image?: Media;
  src?: string;
  alt?: string;
  variant: VariantProps<typeof variants>["variant"];
  priority?: boolean;
  className?: string;
}

const variants = cva("", {
  variants: {
    variant: {
      default: "w-full",
      home_logo: "w-[391px] h-[110px]",
      header_layout: cn("w-[164.7rem] h-[4.1rem]"),
      battery: cn("w-[1.6rem] h-[.8rem]"),
      line_dot: cn("w-[8.5rem] h-[2.5rem]"),
      line_dot_small: cn("w-[4.4rem] h-[1.7rem]"),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const AtomImage = ({
  image,
  src,
  alt,
  variant,
  priority = false,
  className,
}: AtomImageProps) => {
  return (
    <div className={cn("relative", variants({ variant }), className)}>
      <Image
        src={image?.url || src || ""}
        alt={image?.alt || alt || "image"}
        priority={priority}
        sizes="100%"
        fill
        className={"object-cover"}
      />
    </div>
  );
};
