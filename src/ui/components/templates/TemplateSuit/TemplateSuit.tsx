"use client";

import { ElementsPage, Media } from "@payload-types";

import { AtomHR, AtomText, AtomWrapper, RichText, AtomImage, CustomScroll } from "@atoms";
import { ElementTableResistance } from "@molecules";

interface TemplateSuitProps {
    data: ElementsPage;
}

export const TemplateSuit = ({ data }: TemplateSuitProps) => {
    return (
        <CustomScroll>
            <AtomWrapper variant="content_element">
                <AtomWrapper variant="content_header">
                    <AtomWrapper variant="content_top_wrapper">
                        <AtomWrapper variant="content_top_title">
                            <AtomText variant="h1" asChild>
                                <h1>{data.title}</h1>
                            </AtomText>
                            <AtomText variant="description">{data.sub_title}</AtomText>
                        </AtomWrapper>
                    </AtomWrapper>
                </AtomWrapper>
                <AtomWrapper variant="content_suits_wrapper">
                    <div className="w-full flex flex-col gap-y-[48px]">
                        <AtomHR variant="default" />
                        <RichText text={data.description} />
                        <ElementTableResistance items={data.armor_table_wrapper} />
                    </div>
                    <div className="w-[388px]">
                        <AtomImage image={data.image as Media} variant="element_suit" />
                    </div>
                </AtomWrapper>
            </AtomWrapper>
        </CustomScroll>
    );
};