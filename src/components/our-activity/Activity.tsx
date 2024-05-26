import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { socialNetworks } from '@/constants/constants.ts'
import { CustomLink } from 'components/customLink/CustomLink.tsx'

import Iphone from '@/assets/iphoneScreen.png'
import IphoneCamera from '@/assets/iphoneCamera.png'

const Activity = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
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
        const quantyOfElements = blocks.length * 15

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

  return (
    <section ref={sectionRef} className={'min-h-[3000px] flex justify-center  relative  visible'}>
      <div className={'w-[95%] flex justify-between items-center sticky top-[15%] visible h-fit'}>
        <div className={'w-1/3 mt-5'}>
          <p className={'text-4xl font-bold mb-4'}>{t('ourActivity.title')}</p>
          <p className={'my-6 text-gray'}>{t('ourActivity.description')}</p>
          <div className={'flex'}>
            {socialNetworks.map((network, index) => (
              <Link target={'_blank'} key={index} to={network.path} className={'flex mr-5'}>
                <network.icon className={'w-[24px] h-[24px]'} />
              </Link>
            ))}
          </div>
        </div>
        <div className={'w-fit min-w-[300px]'}>
          <div className={'rounded w-full h-[50vh] min-h-[615px] flex justify-center items-center relative'}>
            <img src={Iphone} alt={'iphone'} className={'h-[100%]'} loading="lazy" />
            <img src={IphoneCamera} alt={'iphoneCamera'} className={'absolute z-10 top-[20px] w-1/4'} loading="lazy" />
            <div className={'bg-red-800 w-[90%] h-[95%] rounded-3xl absolute scroll-opacity-iphone'}></div>
            <div className={'bg-green-500 w-[90%] h-[95%] rounded-3xl absolute scroll-opacity-iphone'}></div>
            <div className={'bg-blue-500 w-[90%] h-[95%] rounded-3xl absolute scroll-opacity-iphone'}></div>
          </div>
        </div>
        <div className={'w-1/4 mt-5 relative'}>
          <p className={'my-3 text-gray  scroll-opacity-text'}>{t('ourActivity.animatedDescriptionOne')}</p>
          <p className={'my-3 text-gray absolute scroll-opacity-text top-0'}>
            {t('ourActivity.animatedDescriptionTwo')}
          </p>
          <p className={'text-2xl font-bold mb-4'}> {t('ourActivity.more')}</p>
          <CustomLink link={'#'} className={'bg-tertiary w-fit rounded-full px-3 py-1 text-primary'} withArrow>
            {t('ourActivity.check')}
          </CustomLink>
        </div>
      </div>
    </section>
  )
}

export default Activity
