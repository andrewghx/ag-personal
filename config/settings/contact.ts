export interface ContactSettings {
  socialMedia: SocialMediaLinks
}

export interface SocialLink {
  img: string
  href: string
}

export interface SocialMediaLinks {
  [key: string]: SocialLink
}

const contactSettings = {
  socialMedia: {
    github: {
      img: '',
      href: ''
    },
    linkedIn: {
      img: '',
      href: ''
    },
    twitter: {
      img: '',
      href: ''
    },
    facebook: {
      img: '',
      href: ''
    }
  }
}

export default contactSettings
