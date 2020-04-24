export interface SkillSettings {
  titleText: string
  skills: Skill[]
}

export interface Skill {
  name: string
  competency?: number
}

const settings: SkillSettings = {
  titleText: 'What I can do',
  skills: [
    {
      name: 'Javascript',
      competency: 100
    },
    {
      name: 'Typescript',
      competency: 50
    },
    {
      name: 'HTML',
      competency: 20
    },
    {
      name: 'CSS/Sass/Less',
      competency: 20
    },
    {
      name: 'React',
      competency: 20
    },
    {
      name: 'Babel',
      competency: 20
    },
    {
      name: 'Webpack',
      competency: 20
    },
    {
      name: 'Nodejs',
      competency: 20
    },
    {
      name: 'Expressjs',
      competency: 20
    },
    {
      name: 'SQL',
      competency: 20
    },
    {
      name: 'GraphQL',
      competency: 20
    },
    {
      name: 'AWS',
      competency: 20
    },
    {
      name: 'Google Cloud',
      competency: 20
    },
    {
      name: 'Nextjs',
      competency: 20
    },
    {
      name: 'SSG',
      competency: 20
    },
    {
      name: 'Single page apps',
      competency: 20
    },
    {
      name: 'Microservices',
      competency: 20
    },
    {
      name: 'REST APIs',
      competency: 20
    },
    {
      name: 'AMP',
      competency: 20
    },
    {
      name: 'SEO',
      competency: 20
    },
  ]
}

export default settings
