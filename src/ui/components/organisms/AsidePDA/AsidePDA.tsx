"use client";

import { AtomWrapper } from "@atoms";

import { AsidePDABorder } from "./AsidePDABorder";

export const AsidePDA = () => {
  return (
    <AtomWrapper variant="aside_wrapper" asChild>
      <aside>
        <AsidePDABorder />
        AsidePDA
      </aside>
    </AtomWrapper>
  );
};
