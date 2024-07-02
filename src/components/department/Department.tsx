import SliderInform from '@/components/slider/SliderInform.tsx'
import { sliderCardsInformation } from '@/constants/constants.ts'
import SliderCard from 'components/slider-card/SliderCard.tsx'

const Department = () => {
  return (
    <section className={'min-h-[400px] flex flex-col w-[100%] my-14 md:my-36 overflow-hidden items-center '}>
      <div className={'h-full w-[95%] flex flex-col justify-center'}>
        <SliderInform className={' overflow-hidden flex justify-center md:block'}>
          {sliderCardsInformation.map((data, index) => (
            <SliderCard key={index} data={data} />
          ))}
        </SliderInform>
      </div>
    </section>
  )
}

export default Department
