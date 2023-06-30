import {defineField} from 'sanity'
export default  defineField({
    name: 'Singlecollection',
    title: 'Collection',
    type: 'reference',
    weak: true,
    to: [{type: 'collection'}],
    validation: (Rule) => Rule.required(),
  })