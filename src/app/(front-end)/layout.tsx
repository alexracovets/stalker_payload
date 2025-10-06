import { LayoutDefaultWrapper } from "@templates";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <LayoutDefaultWrapper>{children}</LayoutDefaultWrapper>;
}
