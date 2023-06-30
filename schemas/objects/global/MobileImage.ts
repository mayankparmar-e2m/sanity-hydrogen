import {MobileDeviceIcon} from '@sanity/icons'
import {defineField} from 'sanity'
export default defineField({
    title:"Mobile Image",
    name:"mobile_image",
    type: 'image',
    icon: MobileDeviceIcon,
});