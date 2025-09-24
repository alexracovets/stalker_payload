"use client";

import { useEffect, useState } from "react";
import { MainPage } from "@payload-types";
import { getGlobal } from "@/api";

export const useNavigationHome = () => {
  const [navigation, setNavigation] = useState<MainPage[]>([]);

  const getNavigation = async () => {
    try {
      const navigationData = await getGlobal({
        slug: "nav_home",
      });
      setNavigation(
        navigationData?.items?.map((item) => item.page as MainPage) || []
      );
    } catch (error) {
      console.error("Error fetching navigation data:", error);
      return [];
    }
  };

  useEffect(() => {
    getNavigation();
  }, []);

  return { navigation };
};
