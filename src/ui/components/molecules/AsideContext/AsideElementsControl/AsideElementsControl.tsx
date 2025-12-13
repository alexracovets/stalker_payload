"use client";

import { ElementsPage } from "@payload-types";

import { useNavigation } from "@hooks";

export const AsideElementsControl = () => {
    const { elements } = useNavigation();
    return (
        <div>
            {elements?.map((element) => {
                const elementData = element as ElementsPage;
                return <div key={elementData.id}>{elementData.title}</div>;
            })}
        </div>
    );
};