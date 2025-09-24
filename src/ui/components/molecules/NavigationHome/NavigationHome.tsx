"use client";

import { MainPage } from "@payload-types";
import { AtomLink } from "@atoms";

interface NavigationHomeProps {
  navigation: MainPage[];
}

export const NavigationHome = ({ navigation }: NavigationHomeProps) => {
  return (
    <ul>
      {navigation.map((item) => (
        <li key={item.id}>
          <AtomLink href={item.slug} variant="default">
            {item.title}
          </AtomLink>
        </li>
      ))}
    </ul>
  );
};
