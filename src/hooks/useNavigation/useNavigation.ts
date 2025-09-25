"use client";

import { useCallback, useEffect } from "react";
import { MainPage } from "@payload-types";
import { getGlobal } from "@/api";
import { useNavigationStore } from "@store";

export const useNavigation = () => {
  const { navigation, setNavigation } = useNavigationStore();

  const getNavigation = useCallback(async () => {
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
  }, [setNavigation]);

  useEffect(() => {
    if (navigation.length === 0) {
      getNavigation();
    }
  }, [getNavigation, navigation]);

  return { navigation };
};
