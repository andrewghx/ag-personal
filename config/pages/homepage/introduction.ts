import assetPrefix from '~/config/assetPrefix'

export interface Role {
  img: string
  title: string
  body: string
}

export interface IntroductionSettings {
  titleText: string
  roles: Role[]
}

const settings: IntroductionSettings = {
  titleText: 'Hi! I\'m Andrew, I\'m a...',
  roles: [
    {
      img: `${assetPrefix}/img/svg/developer.svg`,
      title: 'Web Developer',
      body: 'Designing and building modern, responsive, optimised and intuitive websites since my childhood'
    },
    {
      img: `${assetPrefix}/img/svg/engineer.svg`,
      title: 'Software Engineer',
      body: 'Designing, implementing and maintaining full stack web apps and their infrastructure for a living'
    }
  ]
}

export default settings
