"use client";

import { HeaderPDA, FooterPDA } from "@organisms";
import { useNavigation } from "@hooks";

export const LayoutPDA = ({ children }: React.PropsWithChildren) => {
  useNavigation();
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-full">
      <HeaderPDA />
      <main className="w-full">{children}</main>
      <FooterPDA />
    </div>
  );
};
