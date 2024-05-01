import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { socialNetworks } from '@/constants/constants.ts'
import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'

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

        if (index === 0 && scrollPercentage < 30) {
          opacity = 1
        } else {
          if (index * 30 <= scrollPercentage && scrollPercentage < (index + 1) * 30) {
            opacity = (scrollPercentage % 30) / 30
          } else if (scrollPercentage > 90 && index === blocks.length - 1) {
            opacity = 1
          }
        }

        block.style.transition = 'opacity 0.3s'
        block.style.opacity = opacity.toString()
      })

      textBlocks.forEach((textBlock, index) => {
        const scrollPercentage = (window.scrollY / (section.offsetHeight - window.innerHeight)) * 100
        let opacity = 0

        if (index === 0 && scrollPercentage < 30) {
          opacity = 1
        } else {
          if (index * 30 <= scrollPercentage && scrollPercentage < (index + 1) * 30) {
            opacity = (scrollPercentage % 30) / 30
          } else if (scrollPercentage > 90 && index === textBlocks.length - 1) {
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
      <div className={'w-[95%] flex justify-between sticky top-[25%] visible h-fit'}>
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
        <div className={'w-1/3'}>
          <div className={'bg-quaternary rounded w-full h-[450px] flex justify-center items-center relative'}>
            <div className={'bg-primary w-[90%] h-[90%] rounded scroll-opacity-iphone'}></div>
            <div className={'bg-red-800 w-[90%] h-[90%] rounded absolute scroll-opacity-iphone'}></div>
            <div className={'bg-green-500 w-[90%] h-[90%] rounded absolute scroll-opacity-iphone'}></div>
            <div className={'bg-blue-500 w-[90%] h-[90%] rounded absolute scroll-opacity-iphone'}></div>
          </div>
        </div>
        <div className={'w-1/4 mt-5 relative'}>
          <p className={'my-3 text-gray scroll-opacity-text '}>
            Сайт стане в нагоді не тільки ІПСАшникам, а й абітурієнтам, котрі ще думають про вступ до нашого інституту.
            <br />
            <br />
            Для студентів тут розміщено навчальні матеріали, розклад пар, інформаційний блок, де можна знайти посилання
            на всі канали та багато іншої інформації
          </p>
          <p className={'my-3 text-gray absolute scroll-opacity-text top-0'}>
            Тест текст 1
            <br />
            <br />
            Тест текст 1
          </p>
          <p className={'my-3 text-gray absolute scroll-opacity-text top-0'}>
            Тест текст 2
            <br />
            <br />
            Тест текст 2
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
