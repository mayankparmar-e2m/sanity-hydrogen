import {ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'
export default defineField({
    title:"Desktop Image",
    name:"desktop_image",
    type: 'image',
    icon: ImageIcon,
});