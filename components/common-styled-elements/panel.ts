import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  noBackground?: boolean
}

const Panel = styled.div<Props>`
  margin: 0.5rem;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0px 4px 4px ${props => props.theme.boxShadowColor};
`

const PanelBody = styled.div<Props>`
  padding: 1.25rem 1.25rem;
`

const PanelHeading = styled.h2<Props>`
  background: ${props => props.noBackground ? '' : props.theme.colors.primary};
  padding-top: 1.25rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin: 0;
  color: ${props => props.noBackground ? props.theme.colors.primary : props.theme.colors.secondary};
`

export { Panel, PanelBody, PanelHeading }
