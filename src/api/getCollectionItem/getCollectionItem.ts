"use server";

import { CollectionSlug, Config, getPayload, SanitizedConfig } from "payload";

interface getCollectionItemProps {
  collection: CollectionSlug;
  slug: string;
  config: Config;
}

export async function getCollectionItem({
  collection,
  slug,
  config,
}: getCollectionItemProps) {
  try {
    const payload = await getPayload({ config: config as SanitizedConfig });
    const item = await payload.find({
      collection: collection,
      where: { slug: { equals: slug } },
      depth: 4,
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
