"use client";

import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

import { MainPage, Section } from "@payload-types";

interface NavigationStore {
  navigation: MainPage[];
  switchedSectionAside: Section | null;
  setNavigation: (navigation: MainPage[]) => void;
  setSwitchedSectionAside: (switchedSectionAside: Section | null) => void;
}

export const useNavigationStore = create<NavigationStore>()(
  immer((set) => ({
    navigation: [],
    switchedSectionAside: null,
    setNavigation: (navigation: MainPage[]) => set({ navigation }),
    setSwitchedSectionAside: (switchedSectionAside: Section | null) => set({ switchedSectionAside }),
  }))
);
