"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { MainPage } from "@payload-types";

import { useNavigationStore } from "@store";

export const useCurrentMainPage = () => {
  const { navigation } = useNavigationStore();
  const pathname = usePathname();
  const [currentMainPage, setCurrentMainPage] = useState<MainPage | null>(null);

  useEffect(() => {
    const currentSlug = pathname.split("/").pop();
    const currentPage = navigation.find((page) => page.slug === currentSlug);
    setCurrentMainPage(currentPage || null);
  }, [navigation, pathname]);

  return currentMainPage;
};
