import type { Field } from "payload";

export const MaskFields = (): Field[] => {
  return [
    {
      type: "group",
      name: "mask_group",
      label: "Поля для масок",
      admin: {
        condition: (data) => data.type === "masks",
      },
      fields: [

      ],
    },
  ];
};
