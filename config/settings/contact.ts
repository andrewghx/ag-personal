import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export interface ContactSettings {
  socialMedia: SocialMediaLinks
}

export interface SocialLink {
  img: IconDefinition
  href: string
  name: string
}

export type SocialMediaLinks = SocialLink[]

const contactSettings = {
  socialMedia: [
    {
      img: faGithub,
      name: 'Github',
      href: 'https://www.github.com/andrewghx'
    },
    {
      img: faLinkedin,
      name: 'LinkedIn',
      href: 'http://linkedin.com/in/andrew-griffiths-a3a98b1a6'
    },
    {
      img: faTwitter,
      name: 'Twitter',
      href: 'https://twitter.com/andrewg010'
    },
    {
      img: faFacebook,
      name: 'Facebook',
      href: 'https://www.facebook.com/griffithsa.development/'
    }
  ]
}

export default contactSettings
