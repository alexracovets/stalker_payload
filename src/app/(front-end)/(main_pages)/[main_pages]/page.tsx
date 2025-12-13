import { Metadata } from "next";

import { MainPage } from "@payload-types";

import { getCollection, getCollectionItem } from "@api";
import { TemplateMainPage } from "@templates";
import { generateMeta } from "@utils";

type PageProps = {
  params: Promise<{
    main_pages: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { main_pages } = await params;
  const page = (await getCollectionItem({
    collection: "mainPages",
    slug: main_pages,
    depth: 4,
  })) as MainPage;

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
      collection: "mainPages",
    })) as MainPage[];

    return results.map((result) => ({
      main_pages: result.slug,
    }));
  } catch (error) {
    console.error("Помилка при генерації статичних параметрів:", error);
    return [];
  }
}

export default async function ResultPage({ params }: PageProps) {
  const { main_pages } = await params;
  const pageData = (await getCollectionItem({
    collection: "mainPages",
    slug: main_pages,
    depth: 4,
  })) as MainPage;

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return <TemplateMainPage data={pageData} />;
}
