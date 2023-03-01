export default {
  name: 'teamMembers',
  type: 'document',
  title: 'Team Member',
  fields: [
    {
      name: 'image1',
      type: 'image',
      title: '1st Image',
    },
    {
      name: 'image2',
      type: 'image',
      title: '2nd Image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
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
  ],
}
