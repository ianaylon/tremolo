export default {
  title: 'Tremolo Center',
  name: 'tremoloCenter',
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
      name: 'feature1',
      type: 'string',
      title: '1st Feature',
    },
    {
      name: 'featureContent1',
      type: 'text',
      title: '1st Feature Content',
    },
    {
      name: 'featureImage1',
      type: 'image',
      title: '1st Feature Image',
    },
    {
      name: 'feature2',
      type: 'string',
      title: '2nd Feature',
    },
    {
      name: 'featureContent2',
      type: 'text',
      title: '2nd Feature Content',
    },
    {
      name: 'featureImage2',
      type: 'image',
      title: '2nd Feature Image',
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
