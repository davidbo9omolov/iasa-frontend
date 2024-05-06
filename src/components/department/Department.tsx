import CustomSlider from '../slider/Slider'
import { sliderCardsInformation } from '@/constants/constants.ts'
import SliderCard from 'components/slider-card/SliderCard.tsx'

const Department = () => {
  return (
    <section className={'h-[500px] flex flex-col w-[100%] my-48 overflow-hidden '}>
      <div className={'h-full flex flex-col justify-center'}>
        <CustomSlider className={'translate-x-[35px]'}>
          {sliderCardsInformation.map((data, index) => (
            <SliderCard key={index} data={data} />
          ))}
        </CustomSlider>
      </div>
    </section>
  )
}

export default Department
