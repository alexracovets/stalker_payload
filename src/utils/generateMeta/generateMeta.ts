import type { Metadata } from "next";

import { mergeOpenGraph } from "./mergeOpenGraph";

interface GenerateMetaArgs {
  title: string;
  description: string;
  image: string | { url?: string | null | undefined } | number;
  slug: string | string[];
}

export const generateMeta = async ({
  title,
  description,
  image,
  slug,
}: GenerateMetaArgs): Promise<Metadata> => {
  const ogImage =
    (typeof image === "object" &&
      image !== null &&
      "url" in image &&
      image.url &&
      `${process.env.NEXT_PUBLIC_SERVER_URL}${image.url}`) ||
    (typeof image === "string" && image) ||
    undefined;

  const titleMeta = title || "S.T.A.L.K.E.R. 2 | Heart of Chornobyl";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"),
    description: description,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: mergeOpenGraph({
      description: description,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title: titleMeta,
      url: Array.isArray(slug) ? slug.join("/") : "/",
    }),
    title: titleMeta,
  };
};
