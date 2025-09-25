"use client";

import { HeaderPDA, FooterPDA } from "@organisms";
import { AtomWrapper } from "@atoms";

export const LayoutPDA = ({ children }: React.PropsWithChildren) => {
  return (
    <AtomWrapper variant="pda_layout">
      <HeaderPDA />
      <main className="w-full">{children}</main>
      <FooterPDA />
    </AtomWrapper>
  );
};
