import { useRef, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import VideoComponent from 'components/video-component/VideoComponent.tsx'
import videoFullMp4 from '@/assets/full_mp4.mp4'
import videoShortMp4 from '@/assets/short_mp4.mp4'
import videoFullWebm from '@/assets/full_webM.webm'
import videoShortWebm from '@/assets/short_webM.webm'
import { useTranslation } from 'react-i18next'
import useMouse from '@react-hook/mouse-position'
import { motion, Variants } from 'framer-motion'

const Intro = () => {
  const { t } = useTranslation('home')
  const [fullScreen, setFullScreen] = useState(false)
  const [close, setClose] = useState(false)

  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const [lastMouseX, setLastMouseX] = useState(window.innerWidth / 2)
  const [lastMouseY, setLastMouseY] = useState(window.innerHeight / 2)
  const customBlockRef = useRef<HTMLDivElement | null>(null)

  const midiumScreenResolution = window.innerWidth < 1024
  const mouse = useMouse(customBlockRef, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  useEffect(() => {
    if (mouse.x !== null && mouse.x !== undefined) {
      setLastMouseX(mouse.clientX || 0)
    }
    if (mouse.y !== null && mouse.y !== undefined) {
      setLastMouseY(mouse.clientY || 0)
    }
  }, [mouse])

  useEffect(() => {
    const handleScroll = () => {
      if (customBlockRef.current) {
        const blockRect = customBlockRef.current.getBoundingClientRect()
        if (blockRect.top < window.innerHeight / 2 && blockRect.bottom > window.innerHeight / 2) {
          setCursorText(t('intro.play'))
          setCursorVariant('screen')
        } else {
          if (!midiumScreenResolution) {
            setCursorText('')
            setCursorVariant('default')
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [customBlockRef, t, midiumScreenResolution])

  useEffect(() => {
    if (midiumScreenResolution) {
      setCursorText(t('intro.play'))
      setCursorVariant('screen')
    }
  }, [midiumScreenResolution, t])

  const variants: Variants = {
    default: {
      scale: 0,
      height: 10,
      width: 10,
      background: '#FFF',
      fontSize: '16px',
      x: lastMouseX,
      y: lastMouseY,
      transition: {
        type: 'spring',
        mass: 0.4,
      },
    },
    screen: {
      scale: 1,
      background: 'rgba(25, 25, 25, .4)',
      backdropFilter: 'blur(10px)',
      backfaceVisibility: 'hidden',
      color: '#FFF',
      height: '7vw',
      width: '7vw',
      maxWidth: '160px',
      maxHeight: '160px',
      minWidth: '95px',
      minHeight: '95px',
      x: lastMouseX - 50,
      y: lastMouseY - 50,
    },
  }

  function projectEnter() {
    if (!midiumScreenResolution) {
      setCursorText(t('intro.play'))
      setCursorVariant('screen')
    }
  }

  function projectLeave() {
    if (!midiumScreenResolution) {
      setCursorText('')
      setCursorVariant('default')
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 1600,
    damping: 44,
  }

  const onClick = () => {
    if (midiumScreenResolution) {
      const video = document.getElementById('screen') as
        | (HTMLVideoElement & {
            webkitEnterFullscreen?: () => void
          })
        | null
      if (video) {
        // Start playback as part of the click gesture
        try {
          video.play().catch(() => {})
        } catch (e) {
          /* noop */
        }
        // Prefer native iOS fullscreen, fallback to standard
        if (typeof video.webkitEnterFullscreen === 'function') {
          try {
            video.webkitEnterFullscreen()
          } catch (e) {
            /* noop */
          }
        } else if (video.requestFullscreen) {
          video.requestFullscreen().catch(() => {})
        }
      }
      setFullScreen(true)
      setClose(true)
      return
    }
    // Desktop: toggle overlay fullscreen
    setFullScreen(!fullScreen)
    setClose(!close)
  }

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    if (fullScreen && !midiumScreenResolution) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevBodyOverflow || ''
      document.documentElement.style.overflow = prevHtmlOverflow || ''
    }
    return () => {
      document.body.style.overflow = prevBodyOverflow || ''
      document.documentElement.style.overflow = prevHtmlOverflow || ''
    }
  }, [fullScreen, midiumScreenResolution])

  useEffect(() => {
    const video = document.getElementById('screen') as
      | (HTMLVideoElement & {
          webkitEnterFullscreen?: () => void
        })
      | null

    const onStdFsChange = () => {
      if (!document.fullscreenElement) {
        setFullScreen(false)
        setClose(false)
      }
    }

    const onWebkitEndFs = () => {
      setFullScreen(false)
      setClose(false)
    }

    if (midiumScreenResolution && fullScreen && video) {
      // Ensure playback starts on user interaction
      video.play().catch(() => {})
      if (typeof video.webkitEnterFullscreen === 'function') {
        try {
          video.webkitEnterFullscreen()
        } catch (e) {
          /* ignore */
        }
      } else if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {})
      }
    }

    document.addEventListener('fullscreenchange', onStdFsChange)
    // iOS Safari fullscreen end event on the video element
    video?.addEventListener('webkitendfullscreen' as unknown as keyof HTMLVideoElement, onWebkitEndFs as EventListener)

    return () => {
      document.removeEventListener('fullscreenchange', onStdFsChange)
      video?.removeEventListener(
        'webkitendfullscreen' as unknown as keyof HTMLVideoElement,
        onWebkitEndFs as EventListener,
      )
    }
  }, [midiumScreenResolution, fullScreen])

  useEffect(() => {
    const onVisibility = () => {
      const el = document.getElementById('screen') as HTMLVideoElement | null
      if (!el) return
      if (document.hidden) {
        el.pause()
      } else {
        el.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <section
      ref={customBlockRef}
      className={`min-h-[400px] flex justify-center mb-14 md:mb-36 cursor-none  duration-700 z-50 ${fullScreen && !midiumScreenResolution ? 'translate-y-[-90px] fixed  w-full h-full' : ''}`}
    >
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={spring}
        className={`hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:justify-center lg:items-center lg:pointer-events-none lg:z-20 lg:select-none lg:rounded-full`}
      >
        {close ? (
          <IoClose className={' h-[30%] w-[30%] absolute'} />
        ) : (
          <span className="p-2 text-md">{cursorText}</span>
        )}
      </motion.div>
      <div
        className={`${fullScreen ? 'w-[100%] h-[100vh]' : 'w-[95%] h-[85vh]'} relative z-10 flex justify-center items-center`}
        onClick={midiumScreenResolution ? undefined : onClick}
        onMouseEnter={projectEnter}
        onMouseLeave={projectLeave}
      >
        <VideoComponent
          sources={
            fullScreen
              ? [
                  { src: videoFullWebm, type: 'video/webm' },
                  { src: videoFullMp4, type: 'video/mp4' },
                ]
              : [
                  { src: videoShortWebm, type: 'video/webm' },
                  { src: videoShortMp4, type: 'video/mp4' },
                ]
          }
          ariaLabel={t('intro.play')}
          autopauseOffscreen={!fullScreen}
        />
        <button
          type="button"
          className={`absolute  z-20 mt-48 backdrop-blur-[10px] bg-cursor p-3 px-5 rounded-full lg:hidden`}
          onClick={onClick}
        >
          <span className="text-md">{cursorText}</span>
        </button>
        <div className={'absolute top-0 bg-blackGradient w-full h-full pointer-events-none'}></div>
      </div>
      {fullScreen && <div className={'absolute  top-0  w-full h-full bg-primary'}></div>}
    </section>
  )
}

export default Intro
