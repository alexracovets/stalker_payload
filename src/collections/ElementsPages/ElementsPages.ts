import { ElementsPage } from "@/config/payload/payload-types";
import type { CollectionConfig } from "payload";

import {
  TacticalKitFields,
  MachineGunFields,
  PageConfigFields,
  AutomaticFields,
  ElementsFields,
  ObjectsFields,
  ShotgunFields,
  GrenadeFields,
  SniperFields,
  PistolFields,
  ArmorFields,
  MaskFields,
  ExoFields,
} from "@/fields";

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
    afterRead: [
      async ({ doc, req }) => {
        // працюємо тільки для сторінок пістолетів
        if (doc.type !== "pistols") return doc;

        // важливо: вимикаємо внутрішні хуки, щоб уникнути рекурсії цього ж afterRead
        const payloadWithInternal = req.payload as unknown as {
          find: (args: {
            collection: "elements_pages";
            where: {
              and: {
                type?: { equals: string };
                "tactical_kit_group.relation"?: { contains: number | string };
              }[];
            };
            disableInternalHooks?: boolean;
            depth?: number;
          }) => Promise<{ docs: ElementsPage[] }>;
        };

        const result = await payloadWithInternal.find({
          collection: "elements_pages",
          where: {
            and: [
              { type: { equals: "tactical_kit" } },
              { "tactical_kit_group.relation": { contains: doc.id } },
            ],
          },
          disableInternalHooks: true,
          depth: 0,
        });

        type PistolGroup = {
          tactical_kits_api?: ElementsPage[];
          [key: string]: unknown;
        };

        const typedDoc = doc as ElementsPage & {
          pistol_group?: PistolGroup;
        };

        if (!typedDoc.pistol_group) {
          typedDoc.pistol_group = {};
        }

        typedDoc.pistol_group.tactical_kits_api = result.docs as ElementsPage[];

        return typedDoc;
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
            ...ElementsFields(),
            ...ArmorFields(),
            ...MaskFields(),
            ...ExoFields(),
            ...ObjectsFields(),
            ...PistolFields(),
            ...AutomaticFields(),
            ...ShotgunFields(),
            ...MachineGunFields(),
            ...GrenadeFields(),
            ...SniperFields(),
            ...TacticalKitFields(),
          ],
        },
        {
          label: "Конфігурація",
          fields: [...PageConfigFields()],
        },
      ],
    },
  ],
};
