import { forwardRef } from 'react'

type VideoComponentProps = {
  src: string
}

const VideoComponent = forwardRef<HTMLVideoElement, VideoComponentProps>(({ src }, ref) => {
  return (
    <video ref={ref} autoPlay muted loop className="object-cover w-full h-full" key={src}>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  )
})

export default VideoComponent
