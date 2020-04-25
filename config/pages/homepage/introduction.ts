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
      img: 'img/svg/developer.svg',
      title: 'Web Developer',
      body: 'Designing and building modern, responsive, optimised and intuitive websites since school days'
    },
    {
      img: 'img/svg/engineer.svg',
      title: 'Software Engineer',
      body: 'Designing, implementing and maintaining full stack web apps for a living'
    }
  ]
}

export default settings
