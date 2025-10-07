import {
  BoldFeature,
  ItalicFeature,
  ParagraphFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Field } from "payload";

export const ArmorFields = (): Field[] => {
  return [
    {
      type: "row",
      fields: [
        {
          label: "Зображення",
          relationTo: "media",
          name: "image",
          type: "upload",
          required: true,
          admin: {
            condition: (data) => data.type === "suits",
            width: "30%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          label: "Заголовок",
          name: "title",
          type: "text",
          required: true,
          admin: {
            condition: (data) => data.type === "suits",
            width: "50%",
          },
        },
        {
          label: "Підзаголовок",
          name: "sub_title",
          type: "text",
          required: true,
          admin: {
            condition: (data) => data.type === "suits",
            width: "50%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          label: "Опис сторінки",
          name: "description",
          type: "richText",
          editor: lexicalEditor({
            features: [ParagraphFeature(), BoldFeature(), ItalicFeature()],
          }),
          admin: {
            condition: (data) => data.type === "suits",
          },
        },
      ],
    },
    {
      label: "Показники",
      name: "armor_table",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "indicator",
              label: "Показник",
              type: "relationship",
              relationTo: "armor_table",
              required: true,
              hasMany: false,
            },
            {
              name: "value",
              label: "Значення",
              type: "number",
              min: 0,
              max: 5,
              required: true,
            },
          ],
        },
      ],
      admin: {
        condition: (data) => data.type === "suits",
      },
    },
  ];
};
