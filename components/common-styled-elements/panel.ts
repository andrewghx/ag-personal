import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  noBackground?: boolean
}

const Panel = styled.div`
  margin: 0.5rem;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0px 4px 4px ${props => props.theme.boxShadowColor};
`

const PanelBody = styled.div`
  padding: 0.5rem 0.5rem;
`

const PanelHeading = styled.h2<Props>`
  background: ${props => props.noBackground ? '' : props.theme.colors.primary};
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin: 0;
  color: ${props => props.noBackground ? 'inherit' : props.theme.colors.secondary};
`

export { Panel, PanelBody, PanelHeading }
