import { useRef, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import VideoComponent from 'components/video-component/VideoComponent.tsx'
import videoFull1 from '@/assets/full_mp4.mp4'
import videoShort1 from '@/assets/short_mp4.mp4'
import { useTranslation } from 'react-i18next'
import useMouse from '@react-hook/mouse-position'
import { motion, Variants } from 'framer-motion'

const Intro = () => {
  const { t } = useTranslation('home')
  const [fullScreen, setFullScreen] = useState(false)
  const [close, setClose] = useState(false)

  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const [lastMouseX, setLastMouseX] = useState(window?.innerWidth / 2)
  const [lastMouseY, setLastMouseY] = useState(window?.innerHeight / 2)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const customBlockRef = useRef<HTMLDivElement | null>(null)

  const mediumScreenResolution = window?.innerWidth < 1024
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
          if (!mediumScreenResolution) {
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
  }, [customBlockRef, t, mediumScreenResolution])

  useEffect(() => {
    if (mediumScreenResolution) {
      setCursorText(t('intro.play'))
      setCursorVariant('screen')
    }
  }, [mediumScreenResolution])

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
    if (!mediumScreenResolution) {
      setCursorText(t('intro.play'))
      setCursorVariant('screen')
    }
  }

  function projectLeave() {
    if (!mediumScreenResolution) {
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
    setFullScreen(!fullScreen)
    setClose(!close)
  }

  useEffect(() => {
    if (fullScreen && !mediumScreenResolution) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [fullScreen, mediumScreenResolution])

  useEffect(() => {
    const video = videoRef.current
    if (mediumScreenResolution && fullScreen && video?.requestFullscreen) {
      video.requestFullscreen()

      if (video) {
        video.addEventListener('fullscreenchange', () => {
          if (!document.fullscreenElement) {
            setFullScreen(false)
            document.exitFullscreen()
          }
        })
      }
    }
  }, [mediumScreenResolution, fullScreen])

  return (
    <section
      ref={customBlockRef}
      className={`min-h-[400px] flex justify-center mb-14 md:mb-36 cursor-none  duration-700 z-50 ${fullScreen && !mediumScreenResolution ? 'translate-y-[-90px] fixed  w-full h-full' : ''}`}
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
        onClick={mediumScreenResolution ? undefined : onClick}
        onMouseEnter={projectEnter}
        onMouseLeave={projectLeave}
      >
        <VideoComponent ref={videoRef} src={fullScreen ? videoFull1 : videoShort1} />
        <button
          className={`absolute  z-20 mt-48 backdrop-blur-[10px] bg-cursor p-3 px-5 rounded-full lg:hidden`}
          onClick={onClick}
        >
          <span className="text-md">{cursorText}</span>
        </button>
        <div className={'absolute top-0 bg-blackGradient w-full h-full'}></div>
      </div>
      {fullScreen && <div className={'absolute  top-0  w-full h-full bg-primary'}></div>}
    </section>
  )
}

export default Intro
