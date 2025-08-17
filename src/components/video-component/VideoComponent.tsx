import { forwardRef } from 'react'

type VideoComponentProps = {
  src: string
  controls?: boolean
}

const VideoComponent = forwardRef<HTMLVideoElement, VideoComponentProps>(({ src, controls = true }, ref) => {
  return (
    <video ref={ref} controls={!controls} autoPlay muted loop className="object-cover w-full h-full" key={src}>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  )
})

export default VideoComponent
