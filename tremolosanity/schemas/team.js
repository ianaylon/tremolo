export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
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
