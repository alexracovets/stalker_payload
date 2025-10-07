import { ElementsPage } from "@/config/payload/payload-types";
import {
  BoldFeature,
  ItalicFeature,
  ParagraphFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const ElementsPages: CollectionConfig = {
  slug: "elements_pages",
  labels: {
    singular: "Елемент",
    plural: "Елементи",
  },
  admin: {
    useAsTitle: "title",
    description:
      "Тут створюються сторінки такі як Костюми, Маски, Пістолети, і тд. Які будуть відображатися в секціях.",
    group: "Контент",
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.parent) {
          const parentPage = await req.payload.findByID({
            collection: "sections",
            id: data.parent,
          });
          data.slug = `${parentPage.slug}/${data.slug_name}`;
        } else {
          data.slug = `${data.slug_name}`;
        }
        return data;
      },
    ],
    afterChange: [
      async ({ doc, req, previousDoc }) => {
        if (doc.parent !== previousDoc?.parent) {
          const newSlug = doc.slug;
          const sections = await req.payload.find({
            collection: "sections",
            where: {
              elements: {
                contains: doc.id,
              },
            },
          });

          for (const section of sections.docs) {
            const currentElementIds =
              section.elements?.map((element: number | ElementsPage) =>
                typeof element === "object" ? element.id : element
              ) || [];

            let updatedSections = currentElementIds;

            const shouldKeepInSection =
              newSlug && newSlug.startsWith(section.slug + "/");

            if (!shouldKeepInSection) {
              updatedSections = currentElementIds.filter(
                (elementId: number) => elementId !== doc.id
              );
            }

            await req.payload.update({
              collection: "sections",
              id: section.id,
              data: {
                elements: updatedSections,
              },
            });
          }
        }
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Контент",
          fields: [
            {
              label: "Зображення",
              name: "image",
              type: "relationship",
              relationTo: "media",
              hasMany: false,
              required: true,
            },
            {
              label: "Заголовок",
              name: "title",
              type: "text",
              required: true,
            },
            {
              label: "Підзаголовок",
              name: "sub_title",
              type: "text",
              required: true,
            },
            {
              label: "Опис",
              name: "description",
              type: "richText",
              editor: lexicalEditor({
                features: [ParagraphFeature(), BoldFeature(), ItalicFeature()],
              }),
            },
            {
              name: "icons",
              label: "Іконки",
              type: "relationship",
              relationTo: "sections_icons",
              hasMany: false,
              required: true,
            },
          ],
        },
        {
          label: "Конфігурація",
          fields: [
            {
              name: "slug_name",
              label: "Назва сторінки",
              type: "text",
              required: true,
            },
            {
              name: "slug",
              type: "text",
              required: true,
              admin: {
                hidden: true,
              },
            },
            {
              name: "parent",
              label: "Батьківська сторінка",
              type: "relationship",
              relationTo: "sections",
              hasMany: false,
            },
          ],
        },
      ],
    },
  ],
};
