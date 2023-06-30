import {defineField} from 'sanity'
export default defineField({
    name: 'module.homeGridCollection',
    title: 'Home Feature Collections',
    type: 'array',
    of: [
        {
            type: 'gridCollection',
        }
    ]
  })
  