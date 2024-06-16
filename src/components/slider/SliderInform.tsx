import React, { useRef, useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type SliderProps = {
  children: React.ReactNode
  className?: string
}
type ArrowsProps = {
  arrows: React.MutableRefObject<Slider | null>
}

function Arrows({ arrows }: ArrowsProps) {
  return (
    <div className={' h-[80px] w-[100px]  flex items-center justify-evenly z-20'}>
      <button className={' h-full w-[30%]'} onClick={() => arrows?.current?.slickPrev()}>
        <IoIosArrowBack className={'text-secondary  w-full h-full duration-300 hover:opacity-50 '} />
      </button>
      <button className={'h-full w-[30%]'} onClick={() => arrows?.current?.slickNext()}>
        <IoIosArrowForward className={'text-secondary w-full h-full duration-300  hover:opacity-50'} />
      </button>
    </div>
  )
}

const SliderInform = ({ children, className }: SliderProps) => {
  const arrows = useRef(null)
  const [quantityOfSlides, setQuantityOfSlides] = useState(3)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: quantityOfSlides,
    slidesToScroll: 1,
    className: className,
  }

  useEffect(() => {
    const breakpoints = [
      { width: 1900, slides: 6 },
      { width: 1700, slides: 5 },
      { width: 1500, slides: 4 },
      { width: 1024, slides: 3 },
      { width: 768, slides: 2 },
      { width: 0, slides: 1 },
    ]

    function handleResize() {
      const { slides } = breakpoints.find((bp) => window.innerWidth > bp.width) || breakpoints[breakpoints.length - 1]
      setQuantityOfSlides(slides)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className={'w-[95%] flex justify-between relative items-center mb-6 lg:translate-x-[35px]'}>
        <p className={'text-4xl font-medium w-[fit]'}>Відділи Студради</p>
        <Arrows arrows={arrows} />
      </div>
      <Slider ref={arrows} {...settings}>
        {children}
      </Slider>
    </>
  )
}

export default SliderInform
