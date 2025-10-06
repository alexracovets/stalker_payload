"use client";

import { Section, SectionsIcon } from "@payload-types";
import { AtomLink, CategoryIcon } from "@atoms";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@atoms";

interface ListColumnsProps {
  sections: Section[];
}

export const ListColumns = ({ sections }: ListColumnsProps) => {
  return (
    <div className="w-full max-w-[50%]">
      <Accordion type="multiple">
        {sections.map((section, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger variant="section_view">
              <AtomLink href={section.slug} variant="categoryList">
                <CategoryIcon
                  icons={section.icons as SectionsIcon}
                  variant="section_view"
                />
                {section.title}
              </AtomLink>
            </AccordionTrigger>
            <AccordionContent className="flex w-full flex-col"></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
