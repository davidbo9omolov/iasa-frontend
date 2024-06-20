import React, { useRef } from 'react'
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

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: className,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: 'justify-center flex',
        },
      },
    ],
  }

  return (
    <>
      <div className={' flex justify-between relative items-center mb-6 md:translate-x-[35px]'}>
        <h1 className={'text-2xl lg:text-4xl font-bold w-[fit]'}>Відділи Студради</h1>
        <Arrows arrows={arrows} />
      </div>
      <Slider ref={arrows} {...settings}>
        {children}
      </Slider>
    </>
  )
}

export default SliderInform
