type VideoComponentProps = {
  src: string
}

const VideoComponent = ({ src }: VideoComponentProps) => {
  return (
    <video id="screen" autoPlay muted loop className={`object-cover w-full h-full z-10`} key={src}>
      <source src={src} type={'video/mp4'} />
      Your browser does not support HTML5 video.
    </video>
  )
}

export default VideoComponent
