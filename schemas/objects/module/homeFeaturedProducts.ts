import {ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'
export default defineField({
    name: 'module.homeFeaturedProducts',
    title: 'Home Feature Collections',
    type: 'array',
    icon: ImageIcon,
    of: [
        {
            type: 'Singlecollection',
        }
    ]
  })
  