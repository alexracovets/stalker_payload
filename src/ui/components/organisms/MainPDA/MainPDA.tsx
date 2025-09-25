"use client";

import { AtomWrapper } from "@atoms";

export const MainPDA = ({ children }: React.PropsWithChildren) => {
  return (
    <AtomWrapper variant="main_wrapper" asChild>
      <main>{children}</main>
    </AtomWrapper>
  );
};
