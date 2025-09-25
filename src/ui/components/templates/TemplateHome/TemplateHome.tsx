"use client";

import { AtomVideo, AtomWrapper } from "@atoms";
import { HeaderHome } from "@organisms";

import { MainPage, Media } from "@payload-types";

interface TemplateHomeProps {
  data: MainPage;
}

export const TemplateHome = ({ data }: TemplateHomeProps) => {
  return (
    <AtomWrapper variant="home_page">
      <HeaderHome logo={data.logo as Media} />
      <AtomVideo
        wrapperVariant="home_video"
        videoVariant="home_video"
        videoSrc={typeof data.video === "object" ? data.video?.url || "" : ""}
        videoType={
          typeof data.video === "object" ? data.video?.mimeType || "" : ""
        }
      />
    </AtomWrapper>
  );
};
