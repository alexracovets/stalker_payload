"use client";

import { Section } from "@payload-types";

import { ListColumns, ListGrid } from "@molecules";
import { useSectionViewStore } from "@store";

interface CategoriesViewProps {
  sections: Section[] | null | undefined;
  perentSlug: string;
}

export const CategoriesView = ({
  sections,
  perentSlug,
}: CategoriesViewProps) => {
  const { isList } = useSectionViewStore();
  return (
    <>
      {isList ? (
        <ListColumns sections={sections as Section[]} perentSlug={perentSlug} />
      ) : (
        <ListGrid sections={sections as Section[]} perentSlug={perentSlug} />
      )}
    </>
  );
};
