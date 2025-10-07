"use client";

import { ElementsPage, Section, SectionsIcon } from "@payload-types";
import { useState } from "react";

import { AtomList, AtomListItem } from "@atoms";

import {
  CategoryIcon,
  AtomLink,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@atoms";
import { cn } from "@/utils";

interface ListColumnsItemProps {
  section: Section;
  idx: number;
}

export const ListColumnsItem = ({ section, idx }: ListColumnsItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <AccordionItem value={`item-${idx}`}>
      <AccordionTrigger
        variant="section_view"
        className={cn(
          hovered && "bg-main-yellow-border border-main-yellow-border transition-all ease-in-out duration-300"
        )}
      >
        <AtomLink
          href={section.slug}
          variant="categoryListTrigger"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(hovered && "text-main-yellow transition-text ease-in-out duration-300")}
        >
          <CategoryIcon
            active={hovered}
            icons={section.icons as SectionsIcon}
            variant="section_view"
          />
          {section.title}
        </AtomLink>
      </AccordionTrigger>
      <AccordionContent className="flex w-full flex-col">
        {section.elements && section.elements.length > 0 && (
          <AtomList variant="column_section_view">
            {section.elements.map(
              (element: number | ElementsPage, index: number) =>
                typeof element === "object" && (
                  <AtomListItem variant="column_section_view" key={index}>
                    <AtomLink href={element.slug} variant="categoryList">
                      {element.title}
                    </AtomLink>
                  </AtomListItem>
                )
            )}
          </AtomList>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
