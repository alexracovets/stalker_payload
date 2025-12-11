"use client";

import { Media, SectionsIcon } from "@payload-types";

import { AtomImage, AtomImageVariant, AtomWrapper } from "@atoms";
import { cn } from "@utils";

interface CategoryIconProps {
  icons: SectionsIcon;
  variant: AtomImageVariant;
  wrapper: "category_icon_wrapper" | "aside_icon_wrapper";
  active: boolean;
}

export const CategoryIcon = ({ icons, variant, active, wrapper = "category_icon_wrapper" }: CategoryIconProps) => {
  return (
    <AtomWrapper variant={wrapper}>
      <AtomImage
        image={icons.icon as Media}
        variant={variant}
        className={cn("absolute top-0 left-0", !active && "opacity-100")}
      />
      <AtomImage
        image={icons.icon_active as Media}
        variant={variant}
        className={cn("absolute top-0 left-0", active && "opacity-100")}
      />
    </AtomWrapper>
  );
};
