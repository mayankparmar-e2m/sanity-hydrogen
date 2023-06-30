import {StackCompactIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.heroSlider',
  title: 'Hero Slider',
  type: 'array',
  icon: StackCompactIcon,
  of: [{type: 'hero.home'}]
})
