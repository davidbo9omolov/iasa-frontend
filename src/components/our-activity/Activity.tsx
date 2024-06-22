import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { activityImages, socialNetworks } from '@/constants/constants.ts'
import CustomLink from 'components/customLink/CustomLink.tsx'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from 'react-slick'

import Iphone from '@/assets/iphoneScreen.png'
import IphoneCamera from '@/assets/iphoneCamera.png'
import LogoInstaType from '@/assets/logoInstaType.tsx'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ThreeDots from '@/assets/threeDots.tsx'
import ReplyInsta from '@/assets/replyInsta.tsx'
import LikeInsta from '@/assets/likeInsta.tsx'
import SendMessageInsta from '@/assets/sendMessageInsta.tsx'

type ArrowsProps = {
  arrows: React.MutableRefObject<Slider | null>
}

function Arrows({ arrows }: ArrowsProps) {
  return (
    <div className={'flex h-[80px] w-full absolute  md:hidden items-center justify-between '}>
      <button className={'h-[50px] w-[50px] -translate-x-[100%]'} onClick={() => arrows?.current?.slickPrev()}>
        <IoIosArrowBack className={'text-secondary  w-full h-full duration-300 hover:opacity-50 '} />
      </button>
      <button className={'h-[50px] w-[50px] translate-x-[100%]'} onClick={() => arrows?.current?.slickNext()}>
        <IoIosArrowForward className={'text-secondary w-full h-full duration-300  hover:opacity-50'} />
      </button>
    </div>
  )
}

const Activity = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const arrows = useRef(null)
  const { t } = useTranslation('home')

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current

      if (!section) return

      const blocks = section.querySelectorAll('.scroll-opacity-iphone') as NodeListOf<HTMLElement>
      const textBlocks = section.querySelectorAll('.scroll-opacity-text') as NodeListOf<HTMLElement>

      blocks.forEach((block, index) => {
        const scrollPercentage = (window.scrollY / (section.offsetHeight - window.innerHeight)) * 100
        let opacity = 0
        const quantyOfElements = blocks.length

        if (index === 0 && scrollPercentage < quantyOfElements) {
          opacity = 1
        } else {
          if (index * quantyOfElements <= scrollPercentage && scrollPercentage < (index + 1) * quantyOfElements) {
            opacity = (scrollPercentage % quantyOfElements) / quantyOfElements
          } else if (index === blocks.length - 1 && scrollPercentage > quantyOfElements * blocks.length) {
            opacity = 1
          }
        }

        block.style.transition = 'opacity 0.3s'
        block.style.opacity = opacity.toString()
      })

      textBlocks.forEach((textBlock, index) => {
        const scrollPercentage = (window.scrollY / (section.offsetHeight - window.innerHeight)) * 100
        let opacity = 0
        const quantyOfElements = textBlocks.length * 35

        if (index === 0 && scrollPercentage < quantyOfElements) {
          opacity = 1
        } else {
          if (index * quantyOfElements <= scrollPercentage && scrollPercentage < (index + 1) * quantyOfElements) {
            opacity = (scrollPercentage % quantyOfElements) / quantyOfElements
          } else if (index === textBlocks.length - 1 && scrollPercentage > quantyOfElements * textBlocks.length) {
            opacity = 1
          }
        }

        textBlock.style.transition = 'opacity 0.3s'
        textBlock.style.opacity = opacity.toString()
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
  }

  return (
    <section ref={sectionRef} className={` md:min-h-[9000px] my-14 flex justify-center relative  visible`}>
      <div
        className={
          'flex-col lg:flex-row w-[95%] flex md:h-screen justify-between items-center md:sticky top-0 visible h-full md:py-6'
        }
      >
        <div className={'w-full lg:w-1/3 mt-5 xs:mt-3'}>
          <h1 className={'text-2xl lg:text-4xl font-bold mb-4'}>{t('ourActivity.title')}</h1>
          <p className={'sm:text-sm my-6 text-gray md:text-md'}>{t('ourActivity.description')}</p>
          <div className={'flex w-full justify-evenly lg:w-auto md:justify-normal'}>
            {socialNetworks.map((network, index) => (
              <Link target={'_blank'} key={index} to={network.path} className={'flex mr-5'}>
                <network.icon className={'w-[24px] h-[24px]'} />
              </Link>
            ))}
          </div>
        </div>
        <div className={'w-fit my-5 md:my-9 '}>
          <div
            className={
              ' rounded w-full h-[40vh] md:h-[40vw] min-w-[150px] min-h-[360px] max-h-[650px]  flex justify-center items-center relative select-none'
            }
          >
            <img src={Iphone} alt={'iphone'} className={'h-full'} loading="lazy" />
            <img src={IphoneCamera} alt={'iphoneCamera'} className={'absolute z-10 top-[20px] w-1/4'} loading="lazy" />
            <Arrows arrows={arrows} />
            <div className={'absolute top-[40px] flex md:hidden z-20 items-center justify-between w-[80%] '}>
              <div className={'flex items-center '}>
                <LogoInstaType />
                <p className={'text-xs ml-1'}>studrada_iasa...</p>
              </div>
              <ThreeDots />
            </div>
            <div className={'absolute bottom-[20px] z-20  flex md:hidden justify-between items-center w-[80%]'}>
              <ReplyInsta />
              <div className={'flex items-center'}>
                <LikeInsta />
                <SendMessageInsta />
              </div>
            </div>

            <Slider ref={arrows} className={'md:hidden w-[90%] h-full  absolute '} {...settings}>
              {activityImages.map((elem, index) => (
                <div key={index} className={'w-[150px] h-[360px] relative !flex justify-center items-center'}>
                  <img
                    src={elem.image}
                    alt={'iphone'}
                    className={'h-[92%] w-full  object-center absolute'}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>

            {activityImages.map((elem, index) => (
              <div key={index} className={' w-[90%] h-[95%] absolute scroll-opacity-iphone hidden md:block '}>
                <img
                  src={elem.image}
                  alt={'iphone'}
                  className={'h-full w-full object-center rounded-3xl'}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={'w-full lg:w-1/4 xs:mt-0 mt-5 relative flex flex-col md:-translate-y-[25px]'}>
          <p
            className={
              'mt-3 sm:h-fit md:h-[30px] lg:h-auto text-gray sm:text-sm md:text-md scroll-opacity-text -translate-y-[20px]'
            }
          >
            {t('ourActivity.animatedDescriptionOne')}
          </p>
          <p
            className={
              'sm:text-sm sm:h-fit md:h-[30px] lg:h-auto  lg:text-md mt-3 text-gray absolute scroll-opacity-text top-0 md:text-md -translate-y-[20px]'
            }
          >
            {t('ourActivity.animatedDescriptionTwo')}
          </p>
          <p className={'hidden md:block text-2xl font-bold my-4 xs:my-2'}> {t('ourActivity.more')}</p>
          <CustomLink
            target="_blank"
            blankLink={
              'https://photos.google.com/share/AF1QipO2LHqQ0OCVl-lgAKyhbInBu90PDb1EPiWqEpY8SYZ9roz1T-0lnqS_Ha9IubgzNQ?key=WXNpYWJ4RGxmOFRoODluQUp6NXpLZkZtRnFvdHl3'
            }
            className={'mt-4 md:mt-0 bg-tertiary w-fit rounded-full px-3 py-1 text-primary'}
            withArrow
          >
            {t('ourActivity.check')}
          </CustomLink>
        </div>
      </div>
    </section>
  )
}

export default Activity
