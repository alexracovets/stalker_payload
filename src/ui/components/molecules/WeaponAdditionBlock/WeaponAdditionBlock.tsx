"use client";

import { ElementsPage, Media } from "@payload-types";
import { AtomText, AtomImage, AtomLink } from "@atoms";

interface WeaponAdditionBlockProps {
  tacticalKits: ElementsPage[];
}

export const WeaponAdditionBlock = ({
  tacticalKits,
}: WeaponAdditionBlockProps) => {
  return (
    <div className="flex flex-col w-full gap-y-[4px]">
      <AtomText variant="weapon_addition_title">Tактичний обвіс:</AtomText>
      <div className="flex flex-col w-full gap-y-[12px]">
        {tacticalKits.map((item) => {
          return (
            <AtomLink href={item.slug} variant="weapon_addition" key={item.id}>
              <AtomImage
                image={item.aside_image as Media}
                variant="table_icon"
              />
              <AtomText variant="weapon_addition">{item.title}</AtomText>
            </AtomLink>
          );
        })}
      </div>
    </div>
  );
};
