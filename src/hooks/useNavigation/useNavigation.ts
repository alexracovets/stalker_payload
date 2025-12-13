"use client";

import { ElementsPage, Section } from "@payload-types";
import { usePathname } from "next/navigation";

import { useNavigationStore } from "@store";

export const useNavigation = () => {
  const { navigation } = useNavigationStore();
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const mainPagePath = pathParts[0];
  const sectionPagePath = pathParts[1];
  const elementPagePath = pathParts[2];

  const currentMainPage = navigation.find((mainPage) => mainPage.slug === mainPagePath);
  const checkMainPage = currentMainPage ? currentMainPage : navigation[0];

  const allSections = checkMainPage?.sections;
  const activeSection = (allSections as Section[])?.find((section) => (section as Section).slug_name === sectionPagePath);

  const allElements = (activeSection as Section)?.elements as ElementsPage[];
  const activeElement = (allElements as ElementsPage[])?.find((element) => element.slug_name === elementPagePath);


  return {
    navigation,
    pathname,
    sections: allSections,
    activeSection,
    elements: allElements,
    activeElement,
  };
};
