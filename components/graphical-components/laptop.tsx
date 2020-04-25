import React from 'react'
import styled from 'styled-components'
import Image from '~/components/common-styled-elements/image'
import laptopSvg from '~/config/svg/laptopSvg'
const assetPrefix = process.env.ASSET_PREFIX

interface Props {
  inline?: boolean
  staticImg?: boolean
}

const LaptopDiv = styled.div`
  display: ${(props: Props) => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const Laptop: React.FC<Props> = props => {
  if (props.staticImg) return <LaptopDiv {...props}><Image alt='Cartoon laptop' fillContainer src={`${assetPrefix}/img/svg/laptop.svg`} /></LaptopDiv>
  return <LaptopDiv {...props} dangerouslySetInnerHTML={{ __html: laptopSvg }} />
}

export default Laptop
