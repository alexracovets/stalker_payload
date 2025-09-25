import type { CollectionConfig, CollectionSlug } from "payload";

export const Sections: CollectionConfig = {
  slug: "sections",
  labels: {
    singular: "Секція",
    plural: "Секції",
  },
  admin: {
    useAsTitle: "title",
    description:
      "Тут створюються сторінки такі як Костюми, Маски, Пістолети, і тд. Які будуть відображатися в головних сторінках.",
    group: "Контент",
  },
  fields: [
    {
      label: "Заголовок",
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Додаткова інформація",
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "icons",
      label: "Іконки",
      type: "relationship",
      relationTo: "sections_icons",
      hasMany: false,
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
