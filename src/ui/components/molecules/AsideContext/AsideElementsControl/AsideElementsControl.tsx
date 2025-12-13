"use client";

import { ElementsPage, Media, SectionsIcon } from "@payload-types";

import { AtomText, AtomWrapper, AtomImage } from "@atoms";

import { useNavigation } from "@hooks";

export const AsideElementsControl = () => {
    const { elements, activeSection } = useNavigation();
    const sectionImage = typeof activeSection?.icons === 'object' && activeSection.icons !== null
        ? (activeSection.icons as SectionsIcon).icon as Media
        : undefined;

    return (
        <AtomWrapper variant="aside_elements_control_wrapper" asChild>
            <ul>
                {elements?.map((element) => {
                    const elementData = element as ElementsPage;
                    return (
                        <AtomText key={elementData.id} variant="aside_li" asChild>
                            <li>
                                {sectionImage && <AtomImage image={sectionImage} variant="table_icon" />}
                                {elementData.title}
                            </li>
                        </AtomText>
                    )
                })}
            </ul>
        </AtomWrapper>
    );
};