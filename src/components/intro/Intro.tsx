import { useRef, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import video from '@/assets/sample-5s.mp4'
import { useTranslation } from 'react-i18next'

const Intro = () => {
  const { t } = useTranslation('home')
  const [fullScreen, setFullScreen] = useState(false)
  const [close, setClose] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: window.innerWidth - 600, y: window.innerHeight - 500 })
  const customBlockRef = useRef<HTMLDivElement | null>(null)

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
  }, [fullScreen])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (customBlockRef.current) {
        const { left, top, width, height } = customBlockRef.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          setCursorPosition({ x, y })
        }
      }
    }

    const handleMouseLeave = () => {
      setCursorPosition({ x: window.innerWidth - 600, y: window.innerHeight - 500 })
    }

    const currentBlockRef = customBlockRef.current
    if (currentBlockRef) {
      currentBlockRef.addEventListener('mousemove', handleMouseMove)
      currentBlockRef.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        currentBlockRef.removeEventListener('mousemove', handleMouseMove)
        currentBlockRef.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <section
      className={`min-h-[500px] flex justify-center z-20 mb-16 duration-700 ${fullScreen ? 'translate-y-[-90px] fixed  w-full h-full' : ''}`}
    >
      <div
        ref={customBlockRef}
        className={`${fullScreen ? 'w-[100%] h-[100vh]' : 'w-[95%] h-[85vh]'} duration-500 relative`}
        onClick={onClick}
      >
        <video
          id="screen"
          autoPlay
          muted
          loop
          className={`object-cover ${fullScreen ? '' : 'rounded-3xl'}  duration-500 h-full w-full`}
        >
          <source src={video} type={'video/mp4'} />
        </video>
        <div className={'absolute z-10 top-0 bg-blackGradient w-full h-full'}></div>
        <div
          style={{ perspective: '1000', backfaceVisibility: 'hidden', left: cursorPosition.x, top: cursorPosition.y }}
          className={
            'cursor-transition absolute flex justify-center items-center  translate-x-[-50%] translate-y-[-50%]  z-20 select-none min-w-[80px] min-h-[80px] w-[7vw] h-[7vw]'
          }
        >
          <span className={'bg-cursor absolute w-full h-full rounded-full '}></span>
          {close ? (
            <IoClose className={'h-[50%] w-[50%] absolute'} />
          ) : (
            <p className={' absolute text-secondary'}> {t('intro.play')}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Intro
