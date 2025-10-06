import type { CollectionConfig } from "payload";

export const Sections: CollectionConfig = {
  slug: "sections",
  labels: {
    singular: "Секція",
    plural: "Секції",
  },
  admin: {
    useAsTitle: "title",
    description:
      "Тут створюються сторінки такі як Костюми, Маски, Пістолети, і тд. Які будуть відображатися в головних сторінках.",
    group: "Контент",
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.slug_name && data.perent) {
          // Отримуємо дані батьківської сторінки
          const parentPage = await req.payload.findByID({
            collection: "mainPages",
            id: data.perent,
          });
          
          // Формуємо slug як ${parent.slug}/${slug_name}
          data.slug = `/${parentPage.slug}/${data.slug_name}`;
        }
        return data;
      },
    ],
  },
  fields: [
    {
      label: "Заголовок",
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Додаткова інформація",
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "icons",
      label: "Іконки",
      type: "relationship",
      relationTo: "sections_icons",
      hasMany: false,
      required: true,
    },
    {
      name: "slug_name",
      label: "Назва сторінки",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "perent",
      label: "Батьківська сторінка",
      type: "relationship",
      relationTo: "mainPages",
      hasMany: false,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
        hidden: true,
      },
    },
  ],
};
