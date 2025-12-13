"use client";

import { Section, SectionsIcon } from "@payload-types";
import { useState, useEffect } from "react";

import { CategoryIcon, AtomButton } from "@atoms";

import { useNavigation } from "@hooks";

export const AsideSectionsControl = () => {
    const { sections, activeSection } = useNavigation();
    const [activeShowSection, setActiveShowSection] = useState<Section | null>(activeSection as Section);

    useEffect(() => {
        if (activeSection) {
            setActiveShowSection(activeSection as Section);
        }
    }, [activeSection]);

    return (
        <div className="flex justify-center w-full items-center gap-x-[16px] w-full">
            <AtomButton variant="destructive">A</AtomButton>
            <div className="flex justify-center items-center gap-x-[12px]">
                {(sections as Section[])?.map((section: Section) => {
                    return (
                        <CategoryIcon
                            key={section.id}
                            icons={section.icons as SectionsIcon}
                            variant="aside_view"
                            wrapper="aside_icon_wrapper"
                            active={section === activeShowSection}
                            onClick={() => setActiveShowSection(section)}
                        />
                    );
                })}
            </div>
            <AtomButton variant="destructive">D</AtomButton>
        </div>
    );
};