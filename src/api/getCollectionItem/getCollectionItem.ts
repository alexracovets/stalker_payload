"use server";

import {
  CollectionSlug,
  Config,
  getPayload,
  SanitizedConfig,
  Where,
} from "payload";

interface getCollectionItemProps {
  collection: CollectionSlug;
  slug: string;
  config: Config;
  depth: number;
  slug_name?: boolean;
}

export async function getCollectionItem({
  collection,
  slug,
  config,
  depth,
  slug_name,
}: getCollectionItemProps) {
  try {
    const payload = await getPayload({ config: config as SanitizedConfig });
    const whereFind: Where = slug_name
      ? { slug_name: { equals: slug } }
      : { slug: { equals: slug } };
    const item = await payload.find({
      collection: collection,
      where: whereFind,
      depth: depth,
    });
    return item.docs[0];
  } catch (error) {
    console.error(
      `Помилка при отриманні елемента з slug "${slug}" з колекції "${collection}":`,
      error
    );
    return null;
  }
}
