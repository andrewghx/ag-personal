import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  inline: boolean,
  fillContainer: string
}

const Image = styled.img<Props>`
  display: ${props => props.inline ? 'inline' : 'block'};
  width: ${props => props.fillContainer ? '100%' : ''};
  max-width: 100%;
`

export default Image
