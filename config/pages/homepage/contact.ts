import contactSettings, { SocialMediaLinks } from '~/config/settings/contact'

export interface ContactSectionSettings {
  titleText: string
  linkText: string
  socialIcons: SocialMediaLinks
}

const settings: ContactSectionSettings = {
  titleText: 'A bit about me',
  linkText: 'See example projects',
  socialIcons: contactSettings.socialMedia
}

export default settings
