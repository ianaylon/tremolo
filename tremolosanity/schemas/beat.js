export default {
  title: 'Beat Evolution',
  name: 'beat',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true,
      },
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
      name: 'beatVideos',
      type: 'array',
      title: 'Videos',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'title', title: 'Title'},
            {type: 'text', name: 'text', title: 'Text'},
            {type: 'image', name: 'image', title: 'Image'},
            {type: 'string', name: 'video', title: 'Youtube Video'},
          ],
        },
      ],
    },
  ],
}
