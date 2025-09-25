"use client";

import { Section } from "@payload-types";

interface ListGridProps {
  sections: Section[];
  perentSlug: string;
}

export const ListGrid = ({ sections, perentSlug }: ListGridProps) => {
  return <div>ListGrid</div>;
};
