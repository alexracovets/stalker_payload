"use client";

import { ElementsPage, Section } from "@payload-types";
import { SectionsIcon } from "@payload-types";

import { CategoryIcon, AtomInput } from "@atoms";
import { useNavigation } from "@hooks";

export const AsideContext = () => {
  const { navigation, mainPagePath, sectionPagePath, elementPagePath } =
    useNavigation();
  const currentMainPage = navigation.find(
    (mainPage) => mainPage.slug === mainPagePath
  );
  const checkMainPage = currentMainPage ? currentMainPage : navigation[0];
  const allSections = checkMainPage?.sections;
  const activeSection = allSections?.find(
    (section) => (section as Section).slug_name === sectionPagePath
  );
  const allElements = (activeSection as Section)?.elements;
  const activeElement = allElements?.find(
    (element) => (element as ElementsPage).slug_name === elementPagePath
  );

  return (
    <div>
      <div className="flex justify-center w-full items-center px-[10px] py-[20px]">
        <AtomInput variant="aside" placeholder="Пошук" />
      </div>
      <div className="flex justify-center w-full items-center gap-x-[12px]">
        {allSections?.map((section) => {
          const sectionData = section as Section;
          return (
            <CategoryIcon
              key={sectionData.id}
              icons={sectionData.icons as SectionsIcon}
              variant="aside_view"
              wrapper="aside_icon_wrapper"
              active={sectionData.slug_name === sectionPagePath}
            />
          );
        })}
      </div>
    </div>
  );
};
