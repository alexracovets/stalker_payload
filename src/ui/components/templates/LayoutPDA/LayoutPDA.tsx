"use client";

import { HeaderPDA, FooterPDA } from "@organisms";

export const LayoutPDA = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <HeaderPDA />
      <main>{children}</main>
      <FooterPDA />
    </>
  );
};
