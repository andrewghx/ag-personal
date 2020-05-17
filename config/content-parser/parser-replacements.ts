import { StyledComponent } from 'styled-components'
import Anchor from '~/components/common-styled-elements/anchor'
import Button from '~/components/common-styled-elements/button'
import Heading from '~/components/common-styled-elements/heading'
import HorizontalRuler from '~/components/common-styled-elements/horizontalRuler'
import Image from '~/components/image'
import Video from '~/components/video'
import List from '~/components/common-styled-elements/list'
import ListItem from '~/components/common-styled-elements/listItem'
import Paragraph from '~/components/common-styled-elements/paragraph'
import { Table, HeaderRow, HeaderCell, Row, Cell } from '~/components/common-styled-elements/table'
import { Panel, PanelBody, PanelHeading } from '~/components/common-styled-elements/panel'

interface ParserReplacements {
  [key: string]: StyledComponent<any, any> | React.FC
}

const replacements: ParserReplacements = {
  a: Anchor,
  button: Button,
  h1: Heading,
  heading: Heading,
  hr: HorizontalRuler,
  img: Image,
  ul: List,
  ol: List,
  li: ListItem,
  p: Paragraph,
  table: Table,
  thead: HeaderRow,
  th: HeaderCell,
  tr: Row,
  td: Cell,
  panel: Panel,
  pbody: PanelBody,
  pheading: PanelHeading,
  video: Video
}

export default replacements
