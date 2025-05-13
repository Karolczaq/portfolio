import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      initialValue: 999,
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "shortDescription",
      type: "text",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "githubUrl",
      type: "url",
    }),
    defineField({
      name: "liveUrl",
      type: "url",
    }),
    defineField({
      name: "color",
      type: "color",
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
  ],
});
