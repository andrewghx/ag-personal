import { PageProps } from '~/@types'
import glob from 'glob'
import PostPage from '~/components/postPage'
import matter from 'gray-matter'
import { readFileSync } from 'fs'
import getDomain from '~/config/pages/helpers/getDomain'

const ArticlePage: React.FC<PageProps> = props => <PostPage {...props}/>

export default ArticlePage

export const getStaticPaths = async () => {
  const files = glob.sync('posts/article/**/*.md').map(file => {
    return { params: { post: file.replace('posts/article/', '').replace('.md', '') } }
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
  const { content, data } = matter(readFileSync(`posts/article/${post}.md`).toString())

  return {
    props: Object.assign({
      page: `article/${post}`,
      metaUrl: `${getDomain()}/article/${post}`,
      smallerTitle: true,
      html: content 
    }, data)  
  }
}
