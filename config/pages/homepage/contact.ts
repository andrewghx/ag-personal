export interface ContactSectionSettings {
  titleText: string
  linkText: string
  linkHref: string
  socialMediaExclusions?: string[]
}

const settings: ContactSectionSettings = {
  titleText: 'Need my skills? Want to ask me something?',
  linkText: 'Get in touch',
  linkHref: '/contact',
  socialMediaExclusions: []
}

export default settings
