type VideoSource = { src: string; type: string }
type VideoComponentProps = {
  src?: string
  sources?: VideoSource[]
  poster?: string
  ariaLabel?: string
  autopauseOffscreen?: boolean
}

const VideoComponent = ({ src, sources, poster, ariaLabel, autopauseOffscreen = true }: VideoComponentProps) => {
  return (
    <video
      id="screen"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={`object-cover w-full h-full`}
      aria-label={ariaLabel || 'background video'}
      controlsList="nodownload noplaybackrate"
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
      key={(src || (sources && sources[0]?.src)) as string}
      ref={(el) => {
        if (!el || !autopauseOffscreen) return
        const io = new IntersectionObserver(
          (entries) => {
            const entry = entries[0]
            if (!entry) return
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              el.play().catch(() => {})
            } else {
              el.pause()
            }
          },
          { threshold: [0, 0.5, 1] },
        )
        io.observe(el)
      }}
    >
      {sources && sources.length > 0 ? (
        sources.map((s, i) => <source key={i} src={s.src} type={s.type} />)
      ) : (
        <source src={src!} type={'video/mp4'} />
      )}
      Your browser does not support HTML5 video.
    </video>
  )
}

export default VideoComponent
