import type { CollectionConfig } from 'payload';

import { AsideSearchFields } from '@/fields';

export const SystemFields: CollectionConfig = {
    slug: 'system-fields',
    labels: {
        singular: 'UI System',
        plural: 'UI System',
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
        group: "Додатково",
    },
    fields: [
        {
            name: "type",
            type: "select",
            label: "Тип Поля",
            options: [
                { label: "Aside Search", value: "search_aside" },
            ],
            defaultValue: "search_aside",
        },
        {
            type: "row",
            fields: [
                {
                    name: "title",
                    type: "text",
                    label: "Назва",
                    required: true,
                    admin: {
                        width: "50%",
                    },
                },
                {
                    name: "slug",
                    type: "text",
                    label: "Системна назва",
                    unique: true,
                    required: true,
                    admin: {
                        width: "50%",
                    },
                },
            ]
        },
        {
            type: "row",
            fields: [
                ...AsideSearchFields(),
            ],
        },
    ],
}
