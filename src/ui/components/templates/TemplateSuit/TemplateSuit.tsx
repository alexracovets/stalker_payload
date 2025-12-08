"use client";

import { ElementsPage, Media } from "@payload-types";

import { AtomHR, AtomText, AtomWrapper, RichText, AtomImage, CustomScroll } from "@atoms";
import { ElementTableResistance, ElementTableDetails } from "@molecules";

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
                    <AtomWrapper variant="content_suits_wrapper_left">
                        <AtomHR variant="default" />
                        <RichText text={data.description} />
                        <ElementTableResistance items={data.armor_table_wrapper} />
                    </AtomWrapper>
                    <AtomWrapper variant="content_suits_wrapper_right">
                        <AtomImage image={data.image as Media} variant="element_suit" />
                        <ElementTableDetails items={data.detaile_table_wrapper} />
                    </AtomWrapper>
                </AtomWrapper>
            </AtomWrapper>
        </CustomScroll>
    );
};