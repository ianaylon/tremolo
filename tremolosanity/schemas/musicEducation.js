export default {
  title: 'Music Education',
  name: 'musicEducation',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'title', title: 'Title'},
            {type: 'image', name: 'image', title: 'Image'},
          ],
        },
      ],
    },
    {
      name: 'titleTextImage',
      type: 'array',
      title: 'Additional Subjects',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'title', title: 'Title'},
            {type: 'text', name: 'text', title: 'Text'},
            {type: 'image', name: 'image', title: 'Image'},
          ],
        },
      ],
    },
    {
      name: 'sponsors',
      type: 'array',
      title: 'Sponsors',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'title', title: 'Title'},
            {type: 'image', name: 'image', title: 'Image'},
          ],
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'string',
      title: 'CTA Text',
    },
    {
      name: 'ctaButton',
      type: 'string',
      title: 'CTA Button ',
    },
  ],
}
