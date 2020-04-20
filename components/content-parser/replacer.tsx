import styled, { StyledComponent } from 'styled-components'
import { parse } from 'node-html-parser'
import replacements from '~/config/content-parser/parser-replacements'

type IHTMLToReactComponent = (html: string) => (StyledComponent<any, any> | React.FC)[]

const HTMLToReactComponent: IHTMLToReactComponent = (html: string) => {
  const root = parse(html)
  if (!root.childNodes.length) return []
  return root.childNodes.map((node: any, index) => {
    if (node.nodeType === 3) return node.text // 3 is a TextNode
    let Component: StyledComponent<any, any> | React.FC = replacements[node.tagName] || node.tagName
    if (node.hasAttribute('addstyle')) Component = styled(Component)`${node.getAttribute('addstyle')}`
    if (!node.childNodes.length) return <Component suppressHydrationWarning={true} {...node.attributes} key={index} />
    return <Component suppressHydrationWarning={true} {...node.attributes} key={index}>{HTMLToReactComponent(node.innerHTML)}</Component>
  })
}

export default HTMLToReactComponent
