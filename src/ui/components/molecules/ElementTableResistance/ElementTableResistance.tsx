"use client";

import { AtomImage, AtomText, AtomWrapper } from "@atoms";
import { ElementsPage, Media } from "@payload-types";

interface ElementTableResistanceProps {
    items: ElementsPage["armor_table_wrapper"];
}

export const ElementTableResistance = ({ items }: ElementTableResistanceProps) => {
    console.log(items)
    return (
        <AtomWrapper variant="resistance_table_wrapper" asChild>
            <ul>
                <li className="w-full flex flex-start">
                    <div className="flex justify-start items-center gap-x-[8px] px-[12px] py-[8px]">
                        <AtomImage image={items?.[0]?.indicator?.image as Media} variant="table_icon" />
                        <AtomText variant="resistance_table_title">
                            {items?.[0]?.indicator?.title}
                        </AtomText>
                    </div>
                    <div className="px-[22px] py-[12px] flex justify-center items-center">
                        <AtomText variant="resistance_table_title">
                            {items?.[0].value}
                        </AtomText>
                    </div>
                    <div className="px-[12px] py-[19px]">

                    </div>
                </li>
            </ul>
        </AtomWrapper>
    );
};