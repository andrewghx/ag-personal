import { PageProps } from '~/@types'
import glob from 'glob'
import PostPage from '~/components/postPage'
import getDomain from '~/config/pages/helpers/getDomain'
import { readFileSync } from 'fs'
import matter from 'gray-matter'

const ProjectPage: React.FC<PageProps> = props => <PostPage {...props}/>

export default ProjectPage

export const getStaticPaths = async () => {
  const files = glob.sync('posts/project/**/*.md').map(file => {
    return { params: { post: file.replace('posts/project/', '').replace('.md', '') } }
  })
  return {
    paths: files,
    fallback: false
  }
}

interface StaticProps {
  params: {
    post: string
  }
}

export async function getStaticProps({ params: { post } }: StaticProps) {
  const { content, data } = matter(readFileSync(`posts/project/${post}.md`).toString())

  return {
    props: Object.assign({
      page: `project/${post}`,
      metaUrl: `${getDomain()}/project/${post}`,
      smallerTitle: true,
      html: content 
    }, data)  
  }
}
