"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { useNavigation } from "@hooks";
import { MainPage } from "@/config/payload/payload-types";

export const useCurrentMainPage = () => {
  const { navigation } = useNavigation();
  const pathname = usePathname();
  const [currentMainPage, setCurrentMainPage] = useState<MainPage | null>(null);

  useEffect(() => {
    const currentSlug = pathname.split("/").pop();
    const currentPage = navigation.find((page) => page.slug === currentSlug);
    setCurrentMainPage(currentPage || null);
  }, [navigation, pathname]);

  return currentMainPage;
};
