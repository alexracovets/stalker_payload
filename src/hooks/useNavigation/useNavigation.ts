"use client";

import { useNavigationStore } from "@store";
import { usePathname } from "next/navigation";

export const useNavigation = () => {
  const { navigation } = useNavigationStore();
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const mainPagePath = pathParts[0];
  const sectionPagePath = pathParts[1];
  const elementPagePath = pathParts[2];
  // const currentMainPage = navigation.find((mainPage) => mainPage.slug === pathParts[0]);
  // const currentSectionPage = (currentMainPage as MainPage).sections?.find((section) => (section as Section).slug_name === pathParts[1]);
  // const currentElementPage = (currentSectionPage as Section).elements?.find((element) => (element as ElementsPage).slug_name === pathParts[2]);

  return {
    navigation,
    pathname,
    mainPagePath,
    sectionPagePath,
    elementPagePath,
  };
};
