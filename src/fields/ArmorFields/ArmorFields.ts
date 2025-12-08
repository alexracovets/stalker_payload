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

export const ArmorFields = (): Field[] => {
  return [
    {
      type: "group",
      name: "armor_group",
      label: "Поля для костюмів",
      fields: [
        {
          label: "Показники",
          name: "armor_table_wrapper",
          type: "array",
          defaultValue: async () => {
            const armorTable = await getPayload({
              config: config as unknown as SanitizedConfig,
            });
            const armorTableData = await armorTable.find({
              collection: "armor_table",
              depth: 0,
            });
            return [
              {
                indicator: armorTableData.docs.find((item) => item.id === 1),
                value: "0",
              },
              {
                indicator: armorTableData.docs.find((item) => item.id === 2),
                value: "0",
              },
              {
                indicator: armorTableData.docs.find((item) => item.id === 3),
                value: "0",
              },
              {
                indicator: armorTableData.docs.find((item) => item.id === 4),
                value: "0",
              },
              {
                indicator: armorTableData.docs.find((item) => item.id === 5),
                value: "0",
              },
              {
                indicator: armorTableData.docs.find((item) => item.id === 6),
                value: "0",
              },
            ];
          },
          admin: {
            condition: (data) => data.type === "suits",
          },
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
                  filterOptions: ({ data, siblingData }) => {
                    // Отримуємо всі вже вибрані indicator з масиву armor_table_wrapper
                    const selectedIndicators = (data?.armor_table_wrapper || [])
                      .map((item: unknown) => {
                        // Перевіряємо, чи це не поточний елемент
                        if (item === siblingData) return null;
                        const typedItem = item as {
                          indicator?:
                            | { id?: string | number }
                            | string
                            | number;
                        };
                        return typeof typedItem?.indicator === "object"
                          ? typedItem?.indicator?.id
                          : typedItem?.indicator;
                      })
                      .filter(
                        (
                          id: string | number | null | undefined
                        ): id is string | number => id != null
                      );
                    return {
                      id: {
                        not_in: selectedIndicators,
                      },
                    };
                  },
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
          label: "Деталі Елемента",
          name: "detaile_table_wrapper",
          type: "array",
          defaultValue: async () => {
            const detaileTable = await getPayload({
              config: config as unknown as SanitizedConfig,
            });
            const detaileTableData = await detaileTable.find({
              collection: "detaile_table",
              depth: 0,
            });
            return [
              {
                indicator: detaileTableData.docs.find((item) => item.id === 1),
                value: "0",
              },
              {
                indicator: detaileTableData.docs.find((item) => item.id === 2),
                value: "0",
              },
              {
                indicator: detaileTableData.docs.find((item) => item.id === 3),
                value: "0",
              },
            ];
          },
          admin: {
            condition: (data) => data.type === "suits",
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
                  filterOptions: ({ data, siblingData }) => {
                    // Отримуємо всі вже вибрані indicator з масиву detaile_table_wrapper
                    const selectedIndicators = (
                      data?.detaile_table_wrapper || []
                    )
                      .map((item: unknown) => {
                        // Перевіряємо, чи це не поточний елемент
                        if (item === siblingData) return null;
                        const typedItem = item as {
                          indicator?:
                            | { id?: string | number }
                            | string
                            | number;
                        };
                        return typeof typedItem?.indicator === "object"
                          ? typedItem?.indicator?.id
                          : typedItem?.indicator;
                      })
                      .filter(
                        (
                          id: string | number | null | undefined
                        ): id is string | number => id != null
                      );

                    // Виключаємо вже вибрані indicator з опцій
                    return {
                      id: {
                        not_in: selectedIndicators,
                      },
                    };
                  },
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
