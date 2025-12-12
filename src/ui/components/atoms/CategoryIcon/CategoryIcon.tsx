"use client";

import { Media, SectionsIcon } from "@payload-types";

import { AtomImage, AtomImageVariant, AtomWrapper } from "@atoms";
import { cn } from "@utils";
import { useState } from "react";

interface CategoryIconProps {
  icons: SectionsIcon;
  variant: AtomImageVariant;
  wrapper: "category_icon_wrapper" | "aside_icon_wrapper";
  active: boolean;
}

export const CategoryIcon = ({
  icons,
  variant,
  active,
  wrapper = "category_icon_wrapper",
}: CategoryIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AtomWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variant={wrapper}
    >
      <AtomImage
        image={icons.icon as Media}
        variant={variant}
        className={cn(!active && !isHovered && "opacity-100")}
      />
      <AtomImage
        image={icons.icon_active as Media}
        variant={variant}
        className={cn((active || isHovered) && "opacity-100")}
      />
    </AtomWrapper>
  );
};
