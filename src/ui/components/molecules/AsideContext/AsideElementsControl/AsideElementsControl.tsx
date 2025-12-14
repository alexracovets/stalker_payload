"use client";

import { ElementsPage, Media, SectionsIcon } from "@payload-types";

import { AtomText, AtomWrapper, AtomImage, AtomLink } from "@atoms";

import { useNavigation } from "@hooks";

export const AsideElementsControl = () => {
  const { elements, activeSection, activeElement } = useNavigation();
  const sectionImage =
    typeof activeSection?.icons === "object" && activeSection.icons !== null
      ? ((activeSection.icons as SectionsIcon).icon as Media)
      : undefined;

  return (
    <AtomWrapper variant="aside_elements_control_wrapper" asChild>
      <ul>
        {elements?.map((element) => {
          const elementData = element as ElementsPage;
          return (
            <li key={elementData.id}>
              <AtomLink
                href={elementData.slug}
                data-active={elementData === activeElement}
                variant="aside_li"
              >
                {sectionImage && (
                  <AtomImage image={sectionImage} variant="table_icon" />
                )}
                <AtomText variant="aside_li">{elementData.title}</AtomText>
              </AtomLink>
            </li>
          );
        })}
      </ul>
    </AtomWrapper>
  );
};
