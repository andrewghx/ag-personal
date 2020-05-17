import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import { PageProps } from '~/@types'
import Footer from '~/components/footer/footer'
import Container from '~/components/common-styled-elements/container'
import glob from 'glob'
import matter from 'gray-matter'
import { readFileSync } from 'fs'
import ArticleListItem, { ArticleProps } from '~/components/articleListItem'

interface Props extends PageProps {
  projects: Array<ArticleProps>
}

const ProjectPage = ({ projects, titleText, smallerTitle, headTitle, metaDescription, metaOgImg }: Props) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <Container>
      {projects.map((project, index) => <ArticleListItem key={index} {...project} />)}
    </Container>
    <Footer />
  </>
)

export default ProjectPage

export async function getStaticProps() {
  const files = glob.sync('posts/project/**/*.md').map(file => {
    const { data } = matter(readFileSync(file).toString())
    return {
      ...data,
      href: file.replace(/^posts\//, '').replace('.md', '')
    }
  })
  const { project } = await import('~/config/pages')
  project.props = Object.assign(project.props, { projects: files })
  return {
    ...project,
  }
}
