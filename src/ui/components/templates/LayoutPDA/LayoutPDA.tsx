"use client";

import { HeaderPDA, FooterPDA } from "@organisms";
import { useNavigation } from "@hooks";

export const LayoutPDA = ({ children }: React.PropsWithChildren) => {
  useNavigation();
  return (
    <>
      <HeaderPDA />
      <main>{children}</main>
      <FooterPDA />
    </>
  );
};
