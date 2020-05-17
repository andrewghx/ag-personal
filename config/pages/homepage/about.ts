export interface AboutSettings {
  titleText: string
  aboutCopy: string
  linkHeading: string
  buttonText: string
}

const settings: AboutSettings = {
  titleText: 'A bit about me',
  aboutCopy: `<p>Hey! I'm Andrew, a software developer.</p>
  <p>I can build you a website. This could range from a smaller static one to a more complex web app involving users, data and authentication. No project is too big or small and I can help with the whole process: design through to deployment. I also have experience in techniques for effective SEO.</p>
  <p>Based in Kent in the the southeast of England. My day job (which extends into an evening hobby) is software engineer. Designing and building websites and apps is a long term hobby and my skills extend across the full stack and the infrastructure that supports it.</p>
  <p>Learning new and exciting technologies and applying these where necessary is my passion along with striving for the best possible solution to problems.</p>`,
  linkHeading: 'Check out my skills and experience to find out more about me',
  buttonText: 'Find out about me'
}

export default settings
