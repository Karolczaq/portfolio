import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "color",
      type: "color",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
});
