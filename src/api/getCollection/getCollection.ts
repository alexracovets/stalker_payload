"use server";

import { CollectionSlug, Config, getPayload, SanitizedConfig } from "payload";
import config from "@payload-config";

interface getCollectionProps {
  collection: CollectionSlug;
}

export async function getCollection({
  collection,
}: getCollectionProps) {
  try {
    const resolvedConfig = (await config) as Config;
    const payload = await getPayload({ config: resolvedConfig as SanitizedConfig });
    const collectionData = await payload.find({
      collection: collection,
      limit: -1,
    });

    return collectionData.docs;
  } catch (error) {
    console.error(`Помилка при отриманні колекції "${collection}":`, error);
    return [];
  }
}
