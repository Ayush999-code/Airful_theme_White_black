import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
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
      name: "icon",
      title: "Icon Image",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief description for service cards (2-3 lines max)",
    }),

    defineField({
      name: "order",
      title: "Order / Position",
      type: "number",
      initialValue: 0,
      description: "Used for sorting services (lower numbers appear first)",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Development", value: "development" },
          { title: "Marketing", value: "marketing" },
          { title: "Strategy", value: "strategy" },
        ],
      },
    }),

    // Detail page fields
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text content for the service detail page",
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

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "icon",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle ? `Category: ${subtitle}` : 'No category',
        media: media,
      };
    },
  },

  orderings: [
    {
      title: 'Order (Ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Order (Descending)',
      name: 'orderDesc',
      by: [{ field: 'order', direction: 'desc' }],
    },
  ],
});

