import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  width?: string
}

const Row = styled.div<Props>`
  display: block;
  @media(min-width: ${props => props.theme.breakpoints.smMin}) {
    display: flex;
    align-content: stretch;
  }
`

const Col = styled.div<Props>`
  width: 100%;
  padding: 0rem 1rem;
  @media(min-width: ${props => props.theme.breakpoints.smMin}) {
    width: ${props => props.width ? props.width : '100%'};
  }
  
`

export { Row, Col }
