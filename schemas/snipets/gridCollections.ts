import {defineField} from 'sanity'
import {PAGE_REFERENCES} from '../../constants'

export default defineField({
  name: 'gridCollection',
  title: 'Select Grid Collection',
  type: 'object',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    // Link
    defineField({
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: PAGE_REFERENCES,
    }),

    // Content
    defineField({
      name: 'image',
      title: 'Slider Image',
      type: 'image',
    }),
  ],
})
