import { CollectionConfig } from "payload";

export const ArmorTable: CollectionConfig = {
  slug: "armor_table",
  labels: {
    singular: "Таблиця Броні",
    plural: "Таблиці Броні",
  },
  admin: {
    useAsTitle: "title",
    group: "Додатково",
    preview: (doc) => {
      return `${doc.title}`;
    },
  },
  fields: [
    {
      name: "image",
      type: "relationship",
      relationTo: "media",
      label: "Зображення",
      required: true,
    },
    {
      name: "title",
      type: "text",
      label: "Назва",
      required: true,
    },
  ],
};
