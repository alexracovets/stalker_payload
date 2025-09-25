"use client";

import { useCallback, useEffect } from "react";
import { useNavigationStore } from "@store";
import { MainPage } from "@payload-types";

export const useNavigationApi = () => {
  const { navigation, setNavigation } = useNavigationStore();

  const getNavigation = useCallback(async () => {
    try {
      const response = await fetch("/api/navigation");
      const { navigation: navigationData } = await response.json();
      
      setNavigation(navigationData as MainPage[]);
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
