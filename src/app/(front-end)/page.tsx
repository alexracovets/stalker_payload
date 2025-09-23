import { MainPage } from "@payload-types";
import config from "@payload-config";
import { Config } from "payload";
import { Metadata } from "next";

import { TemplateHome } from "@templates";
import { getCollectionItem } from "@api";
import { generateMeta } from "@utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const resolvedConfig = (await config) as Config;
  const page = (await getCollectionItem({
    collection: "mainPages",
    slug: "/",
    config: resolvedConfig,
  })) as MainPage;

  const meta = {
    title: page?.meta?.title || "",
    description: page?.meta?.description || "",
    image: page?.meta?.image?.value || "",
  };

  return generateMeta({ ...meta, slug: page?.slug || "/" });
}

export default async function Home() {
  const resolvedConfig = (await config) as Config;
  const page = (await getCollectionItem({
    collection: "mainPages",
    slug: "/",
    config: resolvedConfig,
  })) as MainPage;

  return <TemplateHome data={page} />;
}
