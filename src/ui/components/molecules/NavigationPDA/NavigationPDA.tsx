"use client";

import { useRef, useState } from "react";

import { useNavigation, useCurrentMainPage } from "@hooks";
import { NavigationPDALink } from "./NavigationPDALink";
import { NavigationPDADash } from "@molecules";
import { AtomWrapper } from "@atoms";

export const NavigationPDA = () => {
  const navigation = useNavigation();
  const currentMainPage = useCurrentMainPage();
  const listRef = useRef<HTMLUListElement>(null);
  const [triggerLeave, setTriggerLeave] = useState(false);

  return (
    <AtomWrapper variant="pda_navigation_wrapper">
      <AtomWrapper variant="pda_navigation_link_wrapper" asChild>
        <nav>
          <AtomWrapper variant="pda_navigation" asChild>
            <ul 
              ref={listRef} 
              onMouseLeave={() => setTriggerLeave(true)}
              onMouseEnter={() => setTriggerLeave(false)}
            >
              {navigation.navigation.map((item, idx) => (
                <NavigationPDALink
                  key={idx}
                  item={item}
                  currentMainPage={currentMainPage}
                  listRef={listRef}
                  triggerLeave={triggerLeave}
                />
              ))}
            </ul>
          </AtomWrapper>
          <NavigationPDADash />
        </nav>
      </AtomWrapper>
    </AtomWrapper>
  );
};
