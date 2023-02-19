import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['pages'])

export default defineConfig({
  name: 'default',
  title: 'tremolo_sanity',

  projectId: 'pfo7xbm2',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Home').id('home').child(S.document().schemaType('home').id('home')),
            S.divider(),
            S.documentTypeListItem('dates').title('Dates'),
            S.documentTypeListItem('sections').title('Sections'),
          ])
          .showIcons(false),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
