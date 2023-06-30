import {defineField} from 'sanity'

export default defineField({
  name: 'hero.home',
  title: 'Home hero',
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
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
    }),
    // Content
    defineField({
      name: 'sliderImages',
      title: 'Slider Image',
      type: 'object',
      fields: [
        {
          name: 'mobile_image',
          title: 'Mobile Image',
          type: 'mobile_image',
        },
        {
          name: 'desktop_image',
          title: 'Desktop Image',
          type: 'desktop_image',
        },
      ]
    }),
  ],
})
