import { MainPage } from "@payload-types";
import { Metadata } from "next";

import { TemplateHome } from "@templates";
import { getCollectionItem } from "@api";
import { generateMeta } from "@utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getCollectionItem({
    collection: "mainPages",
    slug: "/",
    depth: 4,
  })) as MainPage;

  const meta = {
    title: page?.meta?.title || "",
    description: page?.meta?.description || "",
    image: page?.meta?.image?.value || "",
  };

  return generateMeta({ ...meta, slug: page?.slug || "/" });
}

export default async function Home() {
  const page = (await getCollectionItem({
    collection: "mainPages",
    slug: "/",
    depth: 4,
  })) as MainPage;

  if (!page) {
    return <div>Page not found</div>;
  }

  return <TemplateHome data={page} />;
}
