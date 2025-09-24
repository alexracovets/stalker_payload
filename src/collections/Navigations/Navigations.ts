import type { GlobalConfig } from "payload";

export const Navigations: GlobalConfig = {
  slug: "nav_home",
  label: "Навігація HOME PAGE",
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "page",
          type: "relationship",
          relationTo: "mainPages",
          required: true,
        },
      ],
    },
  ],
};
