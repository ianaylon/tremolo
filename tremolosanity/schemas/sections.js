export default {
  name: 'sections',
  title: 'Sections',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: ['home', 'tremolo-center'],
      },
    },
  ],
}
