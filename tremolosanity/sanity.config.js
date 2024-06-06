import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['pages'])

export default defineConfig({
  name: 'default',
  title: 'tremolo_sanity',

  projectId: 'pfo7xbm2',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Home').id('home').child(S.document().schemaType('home').id('home')),
            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').id('about')),
            S.listItem()
              .title('Tremolo Center')
              .id('tremoloCenter')
              .child(S.document().schemaType('tremoloCenter').id('tremoloCenter')),
            S.listItem()
              .title('Music Education')
              .id('musicEducation')
              .child(S.document().schemaType('musicEducation').id('musicEducation')),
            S.listItem().title('Team').id('team').child(S.document().schemaType('team').id('team')),
            S.listItem().title('Tour').id('tour').child(S.document().schemaType('tour').id('tour')),
            S.listItem()
              .title('Repertoire')
              .id('repertoire')
              .child(S.document().schemaType('repertoire').id('repertoire')),
            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').id('contact')),
            S.listItem()
              .title('Tremolo')
              .id('tremolo')
              .child(S.document().schemaType('tremolo').id('tremolo')),
            S.listItem()
              .title('Beat Evolution')
              .id('beat')
              .child(S.document().schemaType('beat').id('beat')),
            S.divider(),
            S.documentTypeListItem('dates').title('Dates'),
            orderableDocumentListDeskItem({
              type: 'teamMembers',
              title: 'Team Members',
              id: 'team-members',
              S,
              context,
            }),
          ])
          .showIcons(false),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
