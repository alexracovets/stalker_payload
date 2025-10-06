import { Metadata } from "next";
import { Config } from "payload";

import { Section } from "@payload-types";
import config from "@payload-config";

import { getCollection, getCollectionItem } from "@api";
import { generateMeta } from "@utils";

type PageProps = {
  params: Promise<{
    sections_pages: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { sections_pages } = await params;
  const resolvedConfig = (await config) as Config;
  const page = (await getCollectionItem({
    collection: "sections",
    slug: sections_pages,
    config: resolvedConfig,
    depth: 4,
    slug_name: true,
  })) as Section;

  const meta = {
    title: page?.meta?.title || "",
    description: page?.meta?.description || "",
    image: page?.meta?.image?.value || "",
  };

  return generateMeta({ ...meta, slug: page?.slug });
}

export async function generateStaticParams() {
  try {
    const resolvedConfig = (await config) as Config;
    const results = (await getCollection({
      collection: "sections",
      config: resolvedConfig,
    })) as Section[];

    return results.map((result) => ({
      sections_pages: result.slug_name,
    }));
  } catch (error) {
    console.error("Помилка при генерації статичних параметрів:", error);
    return [];
  }
}

export default async function ResultPage({ params }: PageProps) {
  const { sections_pages } = await params;
  const resolvedConfig = (await config) as Config;
  const pageData = (await getCollectionItem({
    collection: "sections",
    slug: sections_pages,
    config: resolvedConfig,
    depth: 4,
    slug_name: true,
  })) as Section;

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return <>{pageData.title}</>;
}
