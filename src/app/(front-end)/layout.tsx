"use client";

import { LayoutDefault } from "@templates";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  console.log("RootLayout");
  return <LayoutDefault>{children}</LayoutDefault>;
}
