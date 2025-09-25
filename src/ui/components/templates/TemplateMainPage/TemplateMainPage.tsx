"use client";

import { MainPage } from "@payload-types";

import { AtomHR, AtomText, AtomWrapper } from "@atoms";
import { CategoriesViewSwitch } from "@molecules";

interface TemplateMainPageProps {
  data: MainPage;
}

export const TemplateMainPage = ({ data }: TemplateMainPageProps) => {
  console.log(data);
  return (
    <AtomWrapper variant="content">
      <AtomWrapper variant="content_top_switch_wrapper">
        <AtomWrapper variant="content_top_wrapper">
          <AtomWrapper variant="content_top_title">
            <AtomText variant="h1" asChild>
              <h1>{data.title}</h1>
            </AtomText>
            <AtomText variant="description">{data.description}</AtomText>
          </AtomWrapper>
          <AtomHR variant="default" className="max-w-[679px]" />
        </AtomWrapper>
        <CategoriesViewSwitch />
      </AtomWrapper>
    </AtomWrapper>
  );
};
