import {
  BoldFeature,
  ItalicFeature,
  ParagraphFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Field } from "payload";
import { getPayload } from "payload";
import { config } from "node:process";
import { SanitizedConfig } from "payload";

export const MaskFields = (): Field[] => {
  return [
    {
      type: "group",
      name: "mask_group",
      label: "Поля для масок",
      fields: [
       
      ],
    },
  ];
};
