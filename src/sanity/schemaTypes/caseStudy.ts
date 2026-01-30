import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Studies",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "serviceCategory",
      title: "Service Category",
      type: "string",
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),

    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "solution",
      title: "Solution",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "keyResults",
      title: "Key Results",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
  ],
});
