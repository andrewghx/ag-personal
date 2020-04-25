import React from 'react'
import styled from 'styled-components'
import Image from '~/components/common-styled-elements/image'
import theme from '~/config/theme'
import logo from '~/config/svg/logoSvg'
const assetPrefix = process.env.ASSET_PREFIX

interface Props {
  inline?: boolean
  color?: string
  staticImg?: boolean
}

const LogoDiv = styled.div<Props>`
  display: ${props => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const Logo: React.FC<Props> = props => {
  if (props.staticImg && !props.color) return <LogoDiv {...props}><Image alt='Andrew Griffiths Logo' fillContainer src={`${assetPrefix}/img/svg/aglogo.svg`} /></LogoDiv>
  const replacedSVG = logo.replace(/{COLOR}/g, props.color || theme.colors.primary)
  return <LogoDiv {...props} dangerouslySetInnerHTML={{ __html: replacedSVG }} />
}

export default Logo
