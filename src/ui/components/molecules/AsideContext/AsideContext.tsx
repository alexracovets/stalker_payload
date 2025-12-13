"use client";

import { ElementsPage, Section } from "@payload-types";
import { SectionsIcon } from "@payload-types";
import { useEffect, useState } from "react";

import { CategoryIcon, AtomInput, AtomButton } from "@atoms";
import { useNavigation } from "@hooks";

export const AsideContext = () => {
  const { navigation, mainPagePath, sectionPagePath, elementPagePath } =
    useNavigation();
  const currentMainPage = navigation.find(
    (mainPage) => mainPage.slug === mainPagePath
  );
  const checkMainPage = currentMainPage ? currentMainPage : navigation[0];
  const allSections = checkMainPage?.sections;
  const [activeShowSection, setActiveShowSection] = useState<Section | null>(
    null
  );
  const allElements = (activeShowSection as Section)?.elements;
  const activeElement = allElements?.find(
    (element) => (element as ElementsPage).slug_name === elementPagePath
  );

  useEffect(() => {
    if (sectionPagePath) {
      const activeSection = allSections?.find(
        (section) => (section as Section).slug_name === sectionPagePath
      );
      setActiveShowSection(activeSection as Section);
    } else {
      setActiveShowSection(checkMainPage?.sections?.[0] as Section);
    }
  }, [sectionPagePath, allSections, checkMainPage]);

  return (
    <div>
      <div className="flex justify-center w-full items-center px-[10px] py-[20px]">
        <AtomInput variant="aside" placeholder="Пошук" />
      </div>
      <div className="flex justify-center w-full items-center gap-x-[16px] w-full">
        <AtomButton variant="destructive">A</AtomButton>
        <div className="flex justify-center items-center gap-x-[12px]">
          {allSections?.map((section) => {
            const sectionData = section as Section;
            return (
              <CategoryIcon
                key={sectionData.id}
                icons={sectionData.icons as SectionsIcon}
                variant="aside_view"
                wrapper="aside_icon_wrapper"
                active={sectionData.slug_name === activeShowSection?.slug_name}
                onClick={() => setActiveShowSection(sectionData as Section)}
              />
            );
          })}
        </div>
        <AtomButton variant="destructive">D</AtomButton>
      </div>
      <div>
        {allElements?.map((element) => {
          const elementData = element as ElementsPage;
          return <div key={elementData.id}>{elementData.title}</div>;
        })}
      </div>
    </div>
  );
};
