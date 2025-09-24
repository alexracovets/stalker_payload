"use client";

import Image from "next/image";
import { Media } from "@payload-types";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils";

interface AtomImageProps {
  image: Media;
  variant: VariantProps<typeof variants>["variant"];
  priority?: boolean;
}

const variants = cva("", {
  variants: {
    variant: {
      default: "w-full",
      home_logo: "w-[391px] h-[110px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const AtomImage = ({
  image,
  variant,
  priority = false,
}: AtomImageProps) => {
  return (
    <div className={cn("relative", variants({ variant }))}>
      <Image
        src={image.url || ""}
        alt={image.alt || "image"}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        className="object-cover"
      />
    </div>
  );
};
