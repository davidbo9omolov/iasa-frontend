import { useRef, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
// import video1 from '@/assets/sample-5s.mp4'
import videoFull1 from '@/assets/full_mp4.mp4'
import videoFull2 from '@/assets/full_webM.webm'

import videoShort1 from '@/assets/short_mp4.mp4'
import videoShort2 from '@/assets/short_webM.webm'
import { useTranslation } from 'react-i18next'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'

const Intro = () => {
  const { t } = useTranslation('home')
  const [fullScreen, setFullScreen] = useState(false)
  const [close, setClose] = useState(false)

  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const customBlockRef = useRef<HTMLDivElement | null>(null)
  const mouse = useMouse(customBlockRef, {
    enterDelay: 100,
    leaveDelay: 0,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null && mouse.x !== undefined) {
    mouseXPosition = mouse.clientX || 0
  }

  if (mouse.y !== null && mouse.y !== undefined) {
    mouseYPosition = mouse.clientY || 0
  }

  const variants = {
    default: {
      scale: 0,
      height: 10,
      width: 10,
      background: '#FFF',
      fontSize: '16px',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    project: {
      scale: 1,
      background: '#000',
      color: '#FFF',
      height: '7vw',
      width: '7vw',
      fontSize: '18px',
      x: mouseXPosition - 50,
      y: mouseYPosition - 50,
    },
  }

  function projectEnter() {
    setCursorText(t('intro.play'))
    setCursorVariant('project')
  }

  function projectLeave() {
    setCursorText('')
    setCursorVariant('default')
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  }

  const onClick = () => {
    setFullScreen(!fullScreen)
    setClose(!close)
  }

  useEffect(() => {
    if (fullScreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    console.log(fullScreen)
  }, [fullScreen])

  return (
    <section
      ref={customBlockRef}
      className={`min-h-[500px] flex justify-center mb-16 cursor-none relative duration-700 ${fullScreen ? 'translate-y-[-90px] fixed  w-full h-full z-20' : ''}`}
    >
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={spring}
        className={`fixed left-0 top-0 flex justify-center items-center pointer-events-none z-20 select-none rounded-full`}
      >
        {close ? <IoClose className={'h-[30%] w-[30%] absolute'} /> : <span className="p-2 text-sm">{cursorText}</span>}
      </motion.div>
      <div
        className={`${fullScreen ? 'w-[100%] h-[100vh]' : 'w-[95%] h-[85vh]'} relative`}
        onClick={onClick}
        onMouseEnter={projectEnter}
        onMouseLeave={projectLeave}
      >
        {fullScreen ? (
          <video
            id="screen"
            autoPlay
            muted
            loop
            className={`object-cover ${fullScreen ? '' : 'rounded-3xl'}  duration-500 h-full w-full`}
          >
            <source src={videoFull1} type={'video/mp4'} />
            <source src={videoFull2} type={'video/webM'} />
          </video>
        ) : (
          <video
            id="screen"
            autoPlay
            muted
            loop
            className={`object-cover ${fullScreen ? '' : 'rounded-3xl'}  duration-500 h-full w-full`}
          >
            <source src={videoShort1} type={'video/mp4'} />
            <source src={videoShort2} type={'video/webM'} />
          </video>
        )}

        <div className={'absolute top-0 bg-blackGradient w-full h-full'}></div>
      </div>
    </section>
  )
}

export default Intro
