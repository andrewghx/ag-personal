import { Row, Col } from "./common-styled-elements/flexRow"
import Link from "next/link"
import { Panel } from "./common-styled-elements/panel"
import styled, { ThemeProps } from "styled-components"
import Heading from "./common-styled-elements/heading"
import Paragraph from "./common-styled-elements/paragraph"

export interface ArticleProps {
  href: string
  listImgSrcSet: string
  titleText: string
  postDate: string
  metaDescription: string
}

const StyledRow = styled(Row)`
  cursor: pointer;
  align-items: center;
  min-height: 200px;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    min-height: 300px;
  }
`

const ImageCol = styled(Col)<ThemeProps<any> & { listImgSrcSet?: string, width: string }>`
  cursor: pointer;
  min-height: 200px;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    min-height: 300px;
  } 
  background: ${props => `url('${props.listImgSrcSet}')`};
  background-position: center;
  @media (min-width: ${props => props.theme.breakpoints.smMin}){
    padding: 0px;
  }
`
const TitleCol = styled(Col)`
  cursor: pointer;
  text-align: center;
`

const StyledPanel = styled(Panel)`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

const StyledHeading = styled(Heading)`
  padding-top: 2rem;
`

const StyledParagraph = styled(Paragraph)`
  padding: 0rem 1rem;
  padding-bottom: 2rem;
`
const ArticleListItem: React.FC<ArticleProps> = ({ metaDescription, listImgSrcSet, titleText, href }) => {
  return (
    <Link href={href}>
      <StyledPanel>
        <StyledRow>
          <ImageCol listImgSrcSet={listImgSrcSet} width='500px' />
          <TitleCol>
            <StyledHeading as='h2'>{titleText}</StyledHeading>
            <StyledParagraph>{metaDescription}</StyledParagraph>
          </TitleCol>
        </StyledRow>
      </StyledPanel>
    </Link>
  )
}

export default ArticleListItem
