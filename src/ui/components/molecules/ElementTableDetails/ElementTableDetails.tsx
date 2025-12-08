"use client";

import { ElementsPage, Media } from "@payload-types";

import { AtomImage, AtomWrapper, AtomText } from "@atoms";

interface ElementTableDetailsProps {
  items: NonNullable<ElementsPage["armor_group"]>["detaile_table_wrapper"];
}

export const ElementTableDetails = ({ items }: ElementTableDetailsProps) => {

  return (
    <AtomWrapper variant="details_list" asChild>
      <ul>
        {items?.map((item, idx) => (
          <AtomWrapper variant="details_item" key={idx} asChild>
            <li>
              {typeof item?.indicator === "object" &&
                item.indicator !== null && (
                  <AtomWrapper variant="details_item_indicator">
                    <AtomImage
                      image={item.indicator.image as Media}
                      variant="table_icon"
                    />
                    <AtomText variant="table_title">
                      {item.indicator.title}
                    </AtomText>
                  </AtomWrapper>
                )}
              <AtomWrapper variant="details_item_value">
                <AtomText variant="table_title">{item.value}</AtomText>
              </AtomWrapper>
            </li>
          </AtomWrapper>
        ))}
      </ul>
    </AtomWrapper>
  );
};
