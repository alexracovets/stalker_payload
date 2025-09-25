"use client";

import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

import { MainPage } from "@payload-types";

interface NavigationStore {
  navigation: MainPage[];
  isDash: boolean;
  dashStyles: {
    underline: React.CSSProperties;
    shortline: React.CSSProperties;
  };
  setDashStyles: (dashStyles: {
    underline: React.CSSProperties;
    shortline: React.CSSProperties;
  }) => void;
  setNavigation: (navigation: MainPage[]) => void;
  setIsDash: (isDash: boolean) => void;
}

export const useNavigationStore = create<NavigationStore>()(
  immer((set) => ({
    navigation: [],
    isDash: true,
    dashStyles: {
      underline: {},
      shortline: {},
    },
    setDashStyles: (dashStyles: {
      underline: React.CSSProperties;
      shortline: React.CSSProperties;
    }) => set({ dashStyles }),
    setIsDash: (isDash: boolean) => set({ isDash }),
    setNavigation: (navigation: MainPage[]) => set({ navigation }),
  }))
);
