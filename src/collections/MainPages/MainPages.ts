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
      "Тут створюються сторінки такі як Головна, Захист, Зброя, і тд. Для головної slug має бути '/'.",
    group: "Контент",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Контент",
          fields: [
            {
              label: "Заголовок",
              type: "text",
              name: "title",
              required: true,
            },
            HomeLogo(),
            {
              label: "Додаткова інформація",
              name: "description",
              type: "text",
              required: true,
              admin: {
                condition: (data) => data.slug !== "/",
              },
            },
            HomeVideo(),
          ],
        },
        {
          label: "Конфігурація",
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
            {
              name: "sections",
              label: "Відображати Секції",
              type: "relationship",
              relationTo: "sections",
              hasMany: true,
              required: false,
              admin: {
                condition: (data) => data.slug !== "/",
                position: "sidebar",
              },
            },
          ],
        },
      ],
    },
  ],
};
