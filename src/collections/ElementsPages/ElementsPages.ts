import { ElementsPage } from "@/config/payload/payload-types";
import { ArmorFields, ExoFields, MaskFields, ObjectsFields } from "@/fields";
import type { CollectionConfig } from "payload";
import {
  BoldFeature,
  ItalicFeature,
  ParagraphFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

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
              type: "row",
              fields: [
                {
                  name: "type",
                  type: "select",
                  label: "Тип Сторінки",
                  options: [
                    { label: "Костюми", value: "suits" },
                    { label: "Маски", value: "masks" },
                    { label: "Комбінована броня", value: "exosuits" },
                    { label: "Предмети", value: "objects" },
                  ],
                  defaultValue: "suits",
                  admin: {
                    width: "30%",
                  },
                },
              ],
            },
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
                    width: "50%",
                  },
                },
                {
                  label: "Підзаголовок",
                  name: "sub_title",
                  type: "text",
                  required: true,
                  admin: {
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
                    features: [
                      ParagraphFeature(),
                      BoldFeature(),
                      ItalicFeature(),
                    ],
                  }),
                },
              ],
            },
            ...ArmorFields(),
            ...MaskFields(),
            ...ExoFields(),
            ...ObjectsFields(),
          ],
        },
        {
          label: "Конфігурація",
          fields: [
            {
              name: "slug_name",
              label: "Назва сторінки(slug)",
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
