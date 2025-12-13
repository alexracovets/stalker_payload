"use client";

import { ElementsPage } from "@payload-types";

import { AsideSectionsControl } from "./AsideSectionsControl";
import { AsideSearch } from "./AsideSearch/AsideSearch";
import { AtomHR } from "@atoms";

import { useNavigation } from "@hooks";

export const AsideContext = () => {
  const { elements } = useNavigation();

  return (
    <div>
      <AsideSearch />
      <AsideSectionsControl />
      <AtomHR variant="default" />
      <div>
        {elements?.map((element) => {
          const elementData = element as ElementsPage;
          return <div key={elementData.id}>{elementData.title}</div>;
        })}
      </div>
    </div>
  );
};
