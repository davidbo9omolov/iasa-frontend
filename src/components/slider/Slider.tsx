import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from 'react-slick'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

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
        <IoArrowBack className={'text-secondary  w-full h-full duration-300 hover:opacity-50 '} />
      </button>
      <button className={'h-full w-[30%]'} onClick={() => arrows?.current?.slickNext()}>
        <IoArrowForward className={'text-secondary w-full h-full duration-300  hover:opacity-50'} />
      </button>
    </div>
  )
}

const CustomSlider = ({ children, className }: SliderProps) => {
  const arrows = React.useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: className,
  }

  return (
    <>
      <div className={'w-[95%] flex justify-between relative items-center mb-6 translate-x-[35px]'}>
        <p className={'text-4xl font-medium w-[fit]'}>Відділи Студради</p>
        <Arrows arrows={arrows} />
      </div>
      <Slider ref={arrows} {...settings}>
        {children}
      </Slider>
    </>
  )
}

export default CustomSlider
