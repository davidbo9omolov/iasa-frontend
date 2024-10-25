import { useTranslation } from 'react-i18next'
type SliderCardProps = {
  data: {
    type?: string
    image?: string
    path?: string
  }
}

const SliderCard = ({ data }: SliderCardProps) => {
  const { t } = useTranslation('home', { keyPrefix: 'sliderCards' })

  return (
    <div className={'bg-quaternary h-[300px] min-w-[300px] max-w-[400px] mx-2 md:mr-4 md:ml-0 rounded-lg p-5'}>
      <div className={'rounded-lg bg-sliderCardGradient h-[45%]'}>
        <img src={data.image} alt={t(`${data.type}.title`)} className={'w-full h-full object-cover rounded-lg'} />
      </div>
      <div className={'h-[55%]'}>
        <p className={'text-xl md:text-2xl font-bold mt-2 mb-4'}>{t(`${data.type}.title`)}</p>
        <p className={'sm:text-sm md:text-md overflow-y-auto max-h-[70%]'}>{t(`${data.type}.description`)}</p>
      </div>
    </div>
  )
}

export default SliderCard
