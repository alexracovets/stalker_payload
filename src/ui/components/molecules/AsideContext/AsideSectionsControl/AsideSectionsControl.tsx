"use client";

import { Section, SectionsIcon } from "@payload-types";

import { CategoryIcon, AtomButton, AtomWrapper } from "@atoms";

import { useNavigationStore } from "@store";
import { useNavigation } from "@hooks";

export const AsideSectionsControl = () => {
  const { sections, activeSection } = useNavigation();
  const { setSwitchedSectionAside } = useNavigationStore();

  return (
    <AtomWrapper variant="aside_control_wrapper">
      <AtomButton variant="destructive">A</AtomButton>
      <AtomWrapper variant="aside_control_inner">
        {(sections as Section[])?.map((section: Section) => {
          return (
            <CategoryIcon
              key={section.id}
              icons={section.icons as SectionsIcon}
              variant="aside_view"
              wrapper="aside_icon_wrapper"
              active={section === activeSection}
              wrapper_active={section === activeSection}
              onClick={() => setSwitchedSectionAside(section)}
            />
          );
        })}
      </AtomWrapper>
      <AtomButton variant="destructive">D</AtomButton>
    </AtomWrapper>
  );
};
