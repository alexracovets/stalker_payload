import type { GlobalConfig } from "payload";

export const Navigations: GlobalConfig = {
  slug: "navigations",
  label: "Навігації",
  fields: [
    {
      name: "homeNavigation",
      label: "Навігація на головній сторінці:",
      type: "relationship",
      relationTo: "mainPages",
      hasMany: true,
    },
  ],
};
