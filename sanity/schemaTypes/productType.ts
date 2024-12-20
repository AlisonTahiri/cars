import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",

  // @ts-ignore
  // icon: TrolleyIcon,
  fields: [
    defineField({
      name: "title",
      title: "Advertisement title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "make",
      title: "Make",
      type: "reference",
      to: { type: "carMake" },
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "fuel",
      title: "Fuel Type",
      type: "string",
      options: {
        list: [
          { title: "Nafte", value: "Nafte" },
          { title: "Benzine", value: "Benzine" },
          { title: "Benzine-Gaz", value: "Benzine-Gaz" },
        ],
      },
    }),

    defineField({
      name: "transmission",
      title: "Transmission",
      type: "string",
      options: {
        list: [
          { title: "Automatike", value: "Automatike" },
          { title: "Manuale", value: "Manuale" },
        ],
      },
    }),

    defineField({
      name: "ngjyra",
      title: "Ngjyra",
      type: "string",
      options: {
        list: [
          { title: "E Zeze", value: "E Zeze" },
          { title: "E Bardhe", value: "E Bardhe" },
          { title: "E Kuqe", value: "E Kuqe" },
          { title: "E Verdhe", value: "E Verdhe" },
          { title: "Blu", value: "Blu" },
          { title: "Gri", value: "Gri" },
        ],
      },
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) =>
          `${doc.title}-${doc.year}-${new Date(doc._createdAt).toLocaleDateString()}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
            sources: [],
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),

    defineField({
      name: "kilometers",
      title: "Kilometers",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    }),

    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "sold",
      title: "Sold",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "images",
      price: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `$${select.price}`,
        media: select.media[0],
      };
    },
  },
});
