"use client";

import { Section, SectionsIcon } from "@payload-types";

import { CategoryIcon, AtomButton } from "@atoms";

import { useNavigationStore } from "@store";
import { useNavigation } from "@hooks";

export const AsideSectionsControl = () => {
    const { sections, activeSection } = useNavigation();
    const { setSwitchedSectionAside } = useNavigationStore();

    return (
        <div className="flex justify-center w-full items-center gap-x-[16px] w-full py-[14px] px-[12px] bg-aside-control-bg">
            <AtomButton variant="destructive">A</AtomButton>
            <div className="flex justify-center items-center gap-x-[12px]">
                {(sections as Section[])?.map((section: Section) => {
                    return (
                        <CategoryIcon
                            key={section.id}
                            icons={section.icons as SectionsIcon}
                            variant="aside_view"
                            wrapper="aside_icon_wrapper"
                            active={section === activeSection}
                            onClick={() => setSwitchedSectionAside(section)}
                        />
                    );
                })}
            </div>
            <AtomButton variant="destructive">D</AtomButton>
        </div>
    );
};