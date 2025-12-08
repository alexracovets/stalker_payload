import { CollectionConfig } from "payload";

export const ResistanceTable: CollectionConfig = {
  slug: "resistance_table",
  labels: {
    singular: "Таблиця Опорів",
    plural: "Таблиці Опорів",
  },
  admin: {
    useAsTitle: "title",
    group: "Додатково",
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
