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
  const payload = await getPayload({ config: config as SanitizedConfig });
  const item = await payload.find({
    collection: collection,
    where: { slug: { equals: slug } },
  });
  return item.docs[0];
}
