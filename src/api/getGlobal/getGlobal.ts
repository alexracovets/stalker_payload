"use server";

import { getPayload, GlobalSlug } from "payload";
import config from "@payload-config";

interface getGlobalProps {
  slug: GlobalSlug;
  depth: number;
}

export const getGlobal = async ({ slug, depth }: getGlobalProps) => {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: slug,
    depth: depth,
  });

  return result;
};
