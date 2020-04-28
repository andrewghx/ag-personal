import Parser from 'html-styled-react-parser'
import replacements from '~/config/content-parser/parser-replacements'

interface Props {
  html: string
}

const ParserWrapper = (props: Props) => <Parser html={props.html} replacements={replacements} />

export default ParserWrapper
