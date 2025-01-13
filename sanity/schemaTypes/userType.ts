import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const userType = defineType({
  name: "app-user",
  title: "User",
  type: "document",
  // @ts-expect-error users icon error
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),

    defineField({
      name: "email",
      type: "string",
    }),

    defineField({
      name: "profilePicSrc",
      type: "string",
    }),
  ],
});
