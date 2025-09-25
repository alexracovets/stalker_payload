"use client";

import { Media, SectionsIcon } from "@payload-types";
import { AtomImage, AtomImageVariant, AtomWrapper } from "@atoms";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface CategoryIconProps {
  icons: SectionsIcon;
  variant: AtomImageVariant;
}

export const CategoryIcon = ({ icons, variant }: CategoryIconProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <AtomWrapper
      variant="category_icon_wrapper"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <AtomImage
        image={icons.icon as Media}
        variant={variant}
        className={cn("absolute top-0 left-0", !isActive && "opacity-100")}
      />
      <AtomImage
        image={icons.icon_active as Media}
        variant={variant}
        className={cn("absolute top-0 left-0", isActive && "opacity-100")}
      />
    </AtomWrapper>
  );
};
