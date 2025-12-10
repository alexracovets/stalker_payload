import { type Field, SanitizedConfig, getPayload } from "payload";
import { config } from "node:process";

export const PistolFields = (): Field[] => {
  return [
    {
      type: "group",
      name: "pistol_group",
      label: "Поля для пістолета",
      admin: {
        condition: (data) => data.type === "pistols",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              label: "Автор дизайну",
              name: "designer_name",
              type: "text",
              admin: {
                width: "50%",
              },
            },
            {
              label: "Посилання",
              name: "designer_link",
              type: "text",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "resistance",
          admin: {
            condition: (data) => data.type === "pistols",
          },
          type: "array",
          label: "Показники зброї",
          labels: {
            singular: "Показник",
            plural: "Покази",
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "indicator",
                  label: "Показник",
                  type: "relationship",
                  relationTo: "resistance_table",
                  required: true,
                  hasMany: false,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "value",
                  label: "Значення",
                  type: "number",
                  min: 0,
                  max: 5,
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Додаткова інформація",
          name: "details",
          type: "array",
          admin: {
            condition: (data) => data.type === "pistols",
          },
          labels: {
            singular: "Показник",
            plural: "Покази",
          },
          defaultValue: async () => {
            const detaileTable = await getPayload({
              config: config as unknown as SanitizedConfig,
            });
            const detaileTableData = await detaileTable.find({
              collection: "detaile_table",
              where: {
                id: {
                  in: [1, 2, 3],
                },
              },
              depth: 0,
            });
            return detaileTableData.docs.reverse().map((item) => ({
              indicator: item,
              value: "0",
            }));
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "indicator",
                  label: "Показник",
                  type: "relationship",
                  relationTo: "detaile_table",
                  required: true,
                  hasMany: false,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "value",
                  label: "Значення",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "effect",
                  type: "radio",
                  label: "Ефект",
                  required: true,
                  defaultValue: "normal",
                  options: [
                    {
                      label: "Позитивний ефект",
                      value: "positive",
                    },
                    {
                      label: "Негативний ефект",
                      value: "negative",
                    },
                    {
                      label: "Нейтрально",
                      value: "normal",
                    },
                  ],
                },
                {
                  name: "efect_power",
                  type: "radio",
                  label: "Сила ефекту",
                  required: true,
                  defaultValue: "normal",
                  dbName: "ef_pwr",
                  options: [
                    {
                      label: "Низька",
                      value: "low",
                    },
                    {
                      label: "Середня",
                      value: "medium",
                    },
                    {
                      label: "Висока",
                      value: "high",
                    },
                    {
                      label: "Нейтрально",
                      value: "normal",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};
