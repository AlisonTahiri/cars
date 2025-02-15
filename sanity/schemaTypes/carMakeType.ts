import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const carMakeType = defineType({
  name: "carMake",
  title: "Car Make",
  type: "document",
  // @ts-expect-error tag icon error
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
  ],
});
