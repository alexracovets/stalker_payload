import { Metadata } from "next";

import { Section } from "@payload-types";

import { getCollection, getCollectionItem } from "@api";
import { TemplateSectionPage } from "@templates";
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
  const page = (await getCollectionItem({
    collection: "sections",
    slug: sections_pages,
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
    const results = (await getCollection({
      collection: "sections",
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
  const pageData = (await getCollectionItem({
    collection: "sections",
    slug: sections_pages,
    depth: 4,
    slug_name: true,
  })) as Section;

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return <TemplateSectionPage data={pageData} />;
}
