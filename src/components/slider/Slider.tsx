import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from 'react-slick'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'

type SliderProps = {
  children: React.ReactNode
  className?: string
}
type ArrowsProps = {
  arrows: React.MutableRefObject<Slider | null>
}

function Arrows({ arrows }: ArrowsProps) {
  return (
    <div
      className={
        'bg-tertiary w-[70px] h-[70px] rounded-full flex items-center justify-evenly absolute left-[29%] z-20 translate-y-[-100px]'
      }
    >
      <button className={' h-full w-[30%]'} onClick={() => arrows?.current?.slickPrev()}>
        <IoMdArrowDropleft className={'text-primary'} />
      </button>
      <button className={'h-full w-[30%]'} onClick={() => arrows?.current?.slickNext()}>
        <IoMdArrowDropright className={'text-primary'} />
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
      <Arrows arrows={arrows} />
      <Slider ref={arrows} {...settings}>
        {children}
      </Slider>
    </>
  )
}

export default CustomSlider
