"use client";

import { useState, RefObject, useRef, useCallback, useEffect } from "react";

import { useNavigation, useCurrentMainPage, useNavigationDash } from "@hooks";
import {
  NavigationPDADash,
  NavigationPDALink,
  NavigationPDA_BG,
} from "@molecules";
import { AtomWrapper, AtomButton } from "@atoms";

export const NavigationPDA = () => {
  const navigation = useNavigation();
  const currentMainPage = useCurrentMainPage();
  const listRef = useRef<HTMLUListElement>(null);
  const [hoveredRef, setHoveredRef] = useState<RefObject<HTMLLIElement | null>>(
    { current: null }
  );
  const [hoveredSpanRef, setHoveredSpanRef] = useState<
    RefObject<HTMLSpanElement | null>
  >({ current: null });
  const [currentPageRef, setCurrentPageRef] = useState<
    RefObject<HTMLLIElement | null>
  >({ current: null });
  const [currentPageSpanRef, setCurrentPageSpanRef] = useState<
    RefObject<HTMLSpanElement | null>
  >({ current: null });

  const handleListLeave = useCallback(() => {
    console.log("listLeave");
    setHoveredRef({ current: null });
    setHoveredSpanRef({ current: null });
  }, [setHoveredRef, setHoveredSpanRef]);

  useEffect(() => {
    setHoveredRef({ current: null });
    setHoveredSpanRef({ current: null });
  }, [currentMainPage]);

  useNavigationDash({
    listRef,
    hoveredRef,
    hoveredSpanRef,
    currentPageRef,
    currentPageSpanRef,
  });

  return (
    <AtomWrapper variant="pda_navigation_wrapper">
      <AtomButton variant="destructive">Q</AtomButton>
      <AtomWrapper variant="pda_navigation_link_wrapper" asChild>
        <nav>
          <AtomWrapper variant="pda_navigation" asChild>
            <ul ref={listRef} onMouseLeave={handleListLeave}>
              {navigation.navigation.map((item, idx) => (
                <NavigationPDALink
                  key={idx}
                  item={item}
                  currentMainPage={currentMainPage}
                  setHoveredRef={setHoveredRef}
                  setHoveredSpanRef={setHoveredSpanRef}
                  setCurrentPageRef={setCurrentPageRef}
                  setCurrentPageSpanRef={setCurrentPageSpanRef}
                />
              ))}
            </ul>
          </AtomWrapper>
          <NavigationPDADash />
        </nav>
      </AtomWrapper>
      <AtomButton variant="destructive">E</AtomButton>
      <NavigationPDA_BG />
    </AtomWrapper>
  );
};
