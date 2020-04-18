import React from 'react'
import styled from 'styled-components'
import theme from '~/config/theme'
import logo from '~/config/svg/logoSvg'

interface Props {
  inline?: boolean,
  color?: string
}

const LogoDiv = styled.div<Props>`
  display: ${props => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const Logo: React.FC<Props> = props => {
  const replacedSVG = logo.replace(/{COLOR}/g, props.color || theme.colors.primary)
  return <LogoDiv {...props} dangerouslySetInnerHTML={{ __html: replacedSVG }} />
}

export default Logo