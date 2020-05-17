import { useInView } from 'react-intersection-observer'
import Image from '~/components/common-styled-elements/image'
import styled from 'styled-components'

interface Props {
  [key: string]: string | boolean | null | undefined
  lazy?: boolean
  margin?: string
  height?: string
}

const ImageContainer = styled.div<{ height: string, [key: string]: any }>`
  height: ${props => props.height ? props.height : 'initial'};
`

const LazyLoadedImage: React.FC<Props> = ({ height, margin = '200px', lazy = true, ...props}) => {
  const [ref, inView] = useInView({
    rootMargin: margin
  })

  if (!lazy) return <Image {...props} />
  return (
    <ImageContainer className='image-container' height={height} ref={ref}>
      { inView && <Image {...props} /> }
    </ImageContainer>
  )
}

export default LazyLoadedImage
