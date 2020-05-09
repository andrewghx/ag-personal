import { useInView } from 'react-intersection-observer'
import Image from '~/components/common-styled-elements/image'

interface Props {
  [key: string]: string | boolean | null | undefined
  lazy?: boolean
  margin?: string
}

const LazyLoadedImage: React.FC<Props> = ({ margin = '200px', lazy = true, ...props}) => {
  const [ref, inView] = useInView({
    rootMargin: margin
  })

  if (!lazy) return <Image {...props} />
  return (
    <div ref={ref} >
      { inView && <div><Image {...props} /></div> }
    </div>
  )
}

export default LazyLoadedImage
