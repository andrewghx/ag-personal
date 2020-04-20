import HTMLToReactComponent from '~/components/content-parser/replacer'

interface Props {
  html?: string
}
const ContentParser: React.FC<Props> = ({ html = '' }) => <>{HTMLToReactComponent(html)}</>

export default ContentParser
