import assetPrefix from "~/config/assetPrefix"

export interface ProjectSettings {
  titleText: string
  svgUrl: string
  svgAlt: string
  copy: string
  linkText: string
  linkUrl: string
}

const settings: ProjectSettings = {
  titleText: 'Some projects I have worked on',
  copy: `
  <p>I\'ve worked on a range of stuff including:</p>
    <ul>
      <li>Working with and developing static site generators</li>
      <li>Contributing to continuous integration techniques and processes</li>
      <li>Working with configuring and deploying to cloud services (Amazon, Google)</li>
      <li>Developing and maintaining single page apps with React</li>
      <li>Working with microservice architectures using Express and SQL</li>
      <li>Building and maintaining REST and GraphQL backend APIs</li>
      <li>Contributing to SEO through optimising page speed and content</li>
      <li>Working with Git and github</li>
      <li>Writing tests using libraries such as Jest, Mocha and Enzyme</li>
    </ul>
  `,
  svgUrl: `${assetPrefix}/img/svg/portfolio.svg`,
  svgAlt: 'Image of projects in a folder',
  linkText: 'See example projects',
  linkUrl: '/project'
}

export default settings
