"use client";

import { useNavigationStore } from "@store";

export const useNavigation = () => {
  const { navigation } = useNavigationStore();
  
  return { navigation };
};
