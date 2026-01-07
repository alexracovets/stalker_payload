import type { Field } from "payload";

export const HomeLogo = (): Field => {
  return {
    relationTo: "media" as const,
    name: "logo",
    type: "relationship",
    label: "Логотип",
    required: true,
    hasMany: false,
    admin: {
      condition: (data) => data.slug === "/",
    },
  };
};
