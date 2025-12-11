import { getGlobal } from "@api";
import { NavigationProvider } from "@providers";
import { MainPage } from "@payload-types";
import { LayoutDefault } from "./LayoutDefault";

import "@styles/globals.scss";

// Кешування на 60 секунд - дані будуть завантажуватися при білді
export const revalidate = 60;

interface LayoutDefaultWrapperProps {
  children: React.ReactNode;
}

export const LayoutDefaultWrapper = async ({
  children,
}: LayoutDefaultWrapperProps) => {
  const navigationData = await getGlobal({ slug: "nav_home", depth: 4 });
  const navigation =
    navigationData?.items?.map((item) => item.page as MainPage) || [];

  return (
    <LayoutDefault>
      <NavigationProvider initialNavigation={navigation}>
        {children}
      </NavigationProvider>
    </LayoutDefault>
  );
};
