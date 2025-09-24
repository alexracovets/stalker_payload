"use server";

import { getPayload, GlobalSlug } from "payload";
import config from "@payload-config";

interface getGlobalProps {
  slug: GlobalSlug;
}

export const getGlobal = async ({ slug }: getGlobalProps) => {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: slug,
  });

  return result;
};
