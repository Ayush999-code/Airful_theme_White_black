import { defineType, defineField } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
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
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Example: Development, UI/UX, Technology",
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "Brief description for blog cards and SEO preview (~160 characters)",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text content for the blog post",
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
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
});

