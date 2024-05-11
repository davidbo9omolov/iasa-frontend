import { useTranslation } from 'react-i18next'
import { whatDoWeDoInformation } from '@/constants/constants.ts'

const WhatDoWeDo = () => {
  const { t } = useTranslation('home')

  const translatedText = whatDoWeDoInformation.map((item) => {
    return {
      title: t(`whatDoWeDo.${item.title.charAt(0).toLowerCase() + item.title.slice(1)}`),
      description: t(`whatDoWeDo.${item.description.charAt(0).toLowerCase() + item.description.slice(1)}`),
    }
  })

  return (
    <section className={'min-h-[500px] flex justify-center '}>
      <div className={'w-[95%]'}>
        <p className={'text-4xl font-bold '}>{t('whatDoWeDo.title')}</p>
        <div className={'flex flex-col justify-center border-t-2 border-tertiary mt-6 mb-48'}>
          {translatedText.map((item, index) => (
            <div key={index} className={'mt-8 flex justify-between'}>
              <p className={'text-2xl font-bold mb-4 w-[30%]'}>{item.title}</p>
              <p className={'text-gray  w-[60%]'}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatDoWeDo
