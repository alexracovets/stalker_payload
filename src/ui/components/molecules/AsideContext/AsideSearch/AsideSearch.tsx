"use client";

import { Media, SystemField } from "@payload-types";
import { useEffect, useState } from "react";

import { AtomImage, AtomInput, AtomWrapper } from "@atoms";
import { getCollectionItem } from "@api";

export const AsideSearch = () => {
  const [data, setData] = useState<SystemField | null>(null);
  const searchData = data?.group_search_aside;
  const fetchData = async () => {
    const payload = await getCollectionItem({
      collection: "system-fields",
      slug: "search_aside",
      depth: 1,
      type: true,
    });
    if (payload) {
      setData(payload as SystemField);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!searchData) return null;
  return (
    <AtomWrapper variant="aside_search_wrapper">
      <AtomWrapper variant="aside_search_inner">
        <AtomImage
          variant="input_search"
          image={searchData?.search_image as Media}
        />
        <AtomInput variant="aside" placeholder={searchData?.search_name} />
      </AtomWrapper>
    </AtomWrapper>
  );
};
