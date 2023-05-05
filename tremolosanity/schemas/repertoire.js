export default {
  title: 'Repertoire',
  name: 'repertoire',
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
      name: 'repertoireItems',
      type: 'array',
      title: 'Repertoire Items',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'title', title: 'Title'},
            {type: 'text', name: 'text', title: 'Text'},
            {type: 'image', name: 'image', title: 'Image'},
            {type: 'string', name: 'video', title: 'Youtube Video'},
            {type: 'boolean', name: 'approved', title: 'Approved'},
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
