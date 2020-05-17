import { useInView } from 'react-intersection-observer'
import Video from '~/components/common-styled-elements/video'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

interface Props {
  [key: string]: any
  lazy?: boolean
  margin?: string
  height?: string
  srcSet?: string | { [key: number]: string }
}

const VideoContainer = styled.div<{ height: string, [key: string]: any }>`
  height: ${props => props.height ? props.height : 'initial'};
`

const useVideoSrc = (videos: { [key: number]: string }) => {
  const [src, setSrc] = useState('')
  
  const updateSrc = () => {
    const widths = Object.keys(videos).sort((a, b) => Number(a) - Number(b))
    let videoSrc = ''
    for (let i = 0; i < widths.length; i++) {
      const vidWidth = Number(widths[i])
      if (vidWidth >= window.innerWidth || i === widths.length - 1) {
        videoSrc = videos[vidWidth]
        break
      }
    }
    setSrc(videoSrc)
  }

  useEffect(() => {
    updateSrc()
    window.addEventListener('resize', updateSrc)
    return () => {
      window.removeEventListener('resize', updateSrc)
    }
  }, [])
  return src
}

const LazyLoadedVideo: React.FC<Props> = ({ srcSet, height, margin = '200px', lazy = true, ...props}) => {
  const [ref, inView] = useInView({
    rootMargin: margin
  })

  let parsedSrcSet = srcSet || ''
  if (typeof parsedSrcSet === 'string') {
    try { parsedSrcSet = JSON.parse(parsedSrcSet) }
    catch (err) {}
  }
  const src = useVideoSrc(parsedSrcSet)

  const video = <Video src={src} {...props} />

  if (!lazy) return video
  return (
    <VideoContainer className='video-container' height={height} ref={ref}>
      { inView && video }
    </VideoContainer>
  )
}

export default LazyLoadedVideo
