import React from 'react'
import styled from 'styled-components'
import laptopSvg from '~/config/svg/laptopSvg'

interface Props {
  inline?: boolean
}

const LaptopDiv = styled.div`
  display: ${(props: Props) => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const Laptop: React.FC<Props> = props => {
  return <LaptopDiv {...props} dangerouslySetInnerHTML={{ __html: laptopSvg }} />
}

export default Laptop
