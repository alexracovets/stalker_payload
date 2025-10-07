"use client";

import { Section } from "@payload-types";

import { AtomText, AtomHR, AtomWrapper } from "@atoms";
import { ListGrid } from "@molecules";

interface TemplateSectionPageProps {
  data: Section;
}

export const TemplateSectionPage = ({ data }: TemplateSectionPageProps) => {
  return (
    <AtomWrapper variant="content">
      <AtomWrapper variant="content_top_switch_wrapper">
        <AtomWrapper variant="content_top_wrapper">
          <AtomWrapper variant="content_top_title">
            <AtomText variant="h1" asChild>
              <h1>{data.title}</h1>
            </AtomText>
            <AtomText variant="description">{data.sub_title}</AtomText>
          </AtomWrapper>
          <AtomHR variant="default" className="max-w-[679px]" />
        </AtomWrapper>
      </AtomWrapper>
      <ListGrid sections={[data] as Section[]} />
    </AtomWrapper>
  );
};
