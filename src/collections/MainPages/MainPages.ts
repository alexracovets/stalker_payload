import type { CollectionConfig } from "payload";
import { HomeLogo, HomeVideo } from "@fields";

export const MainPages: CollectionConfig = {
  slug: "mainPages",
  labels: {
    singular: "Головна сторінка",
    plural: "Головні сторінки",
  },
  admin: {
    useAsTitle: "title",
    description:
      "Тут створюються сторінки такі як Головна, Захист, Зброя, і тд. Для головної slug має бути '/' ",
    group: "Контент",
  },
  fields: [
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    HomeLogo(),
    {
      label: "Заголовок",
      type: "text",
      name: "title",
      required: true,
    },
    HomeVideo(),
  ],
};
