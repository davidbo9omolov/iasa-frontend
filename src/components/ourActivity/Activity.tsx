import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { socialNetworks } from '@/constants/constants.ts'
import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'

import Iphone from '@/assets/iphoneScreen.png'
import IphoneCamera from '@/assets/iphoneCamera.png'

const Activity = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current

      if (!section) return

      const blocks = section.querySelectorAll('.scroll-opacity-iphone') as NodeListOf<HTMLElement>
      const textBlocks = section.querySelectorAll('.scroll-opacity-text') as NodeListOf<HTMLElement>

      blocks.forEach((block, index) => {
        const scrollPercentage = (window.scrollY / (section.offsetHeight - window.innerHeight)) * 100
        let opacity = 0
        const quantyOfElements = blocks.length * 10

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
        const quantyOfElements = textBlocks.length * 15

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
      <div className={'w-[95%] flex justify-between items-center sticky top-[10%] visible h-fit'}>
        <div className={'w-1/3 mt-5'}>
          <p className={'text-4xl font-bold mb-4'}>
            Діяльність <br /> Cтудради
          </p>
          <p className={'my-6 text-gray'}>
            Це захист прав та інформування студентів, вирішення адміністративних питань. Наші зусилля націлені на
            покращення навчання та створення умов, щоб було зручно здобувати знання. Також ми добре розуміємося на
            створенні якісного відпочинку й проведення часу з користю
          </p>
          {socialNetworks.map((network) => (
            <Link to={network.link} className={'underline mr-5'}>
              {network.name}
            </Link>
          ))}
        </div>
        <div className={'w-fit'}>
          <div className={'rounded w-full h-[550px] flex justify-center items-center relative'}>
            <img src={Iphone} alt={'iphone'} className={'h-[100%]'} />
            <img src={IphoneCamera} alt={'iphoneCamera'} className={'absolute z-10 top-[20px] w-1/4'} />
            <div className={'bg-red-800 w-[90%] h-[95%] rounded-3xl absolute scroll-opacity-iphone'}></div>
            <div className={'bg-green-500 w-[90%] h-[95%] rounded-3xl absolute scroll-opacity-iphone'}></div>
            <div className={'bg-blue-500 w-[90%] h-[95%] rounded-3xl absolute scroll-opacity-iphone'}></div>
          </div>
        </div>
        <div className={'w-1/4 mt-5 relative'}>
          <p className={'my-3 text-gray  scroll-opacity-text'}>
            Сайт призначений для інформування студентства щодо діяльності Студради ІПСА, знайомства з нашою командою,
            полегшення пошуку необхідної інформації для абітурієнтів й привернення уваги до всіх онлайн-ресурсів та
            вебпродуктів ІПСА.
          </p>
          <p className={'my-3 text-gray absolute scroll-opacity-text top-0'}>
            Сайт стане в нагоді не тільки ІПСАшникам, а й абітурієнтам, котрі ще думають про вступ до нашого інституту.
          </p>
          <p className={'text-2xl font-bold mb-4'}>Ще більше фото тут</p>
          <ButtonLink link={'#'} className={'bg-tertiary w-fit rounded-full px-3 py-1 text-primary'}>
            Дивитися
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default Activity
