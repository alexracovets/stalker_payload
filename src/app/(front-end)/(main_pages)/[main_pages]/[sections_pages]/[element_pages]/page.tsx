import { Metadata } from "next";
import { ElementsPage } from "@payload-types";

import {
  TemplateExosuitSuit,
  TemplateAutomatic,
  TemplateObject,
  TemplatePistol,
  TemplateSuit,
  TemplateMask,
} from "@templates";

import { getCollection, getCollectionItem } from "@api";
import { generateMeta } from "@utils";

type PageProps = {
  params: Promise<{
    element_pages: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { element_pages } = await params;
  const page = (await getCollectionItem({
    collection: "elements_pages",
    slug: element_pages,
    depth: 4,
    slug_name: true,
  })) as ElementsPage;

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
      collection: "elements_pages",
    })) as ElementsPage[];

    return results.map((result) => ({
      sections_pages: result.slug_name,
    }));
  } catch (error) {
    console.error("Помилка при генерації статичних параметрів:", error);
    return [];
  }
}

export default async function ResultPage({ params }: PageProps) {
  const { element_pages } = await params;
  const pageData = (await getCollectionItem({
    collection: "elements_pages",
    slug: element_pages,
    depth: 4,
    slug_name: true,
  })) as ElementsPage;

  if (!pageData) {
    return <div>Page not found</div>;
  }
  
  return (
    <>
      {pageData.type === "suits" && (
        <TemplateSuit data={pageData as ElementsPage} />
      )}
      {pageData.type === "masks" && (
        <TemplateMask data={pageData as ElementsPage} />
      )}
      {pageData.type === "exosuits" && (
        <TemplateExosuitSuit data={pageData as ElementsPage} />
      )}
      {pageData.type === "objects" && (
        <TemplateObject data={pageData as ElementsPage} />
      )}
      {pageData.type === "pistols" && (
        <TemplatePistol data={pageData as ElementsPage} />
      )}
      {pageData.type === "automatic" && (
        <TemplateAutomatic data={pageData as ElementsPage} />
      )}
    </>
  );
}
