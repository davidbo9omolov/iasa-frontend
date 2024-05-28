import { useTranslation } from 'react-i18next'
import { whatDoWeDoInformation } from '@/constants/constants.ts'
import MobileDropDown from 'components/mobileDropDown/MobileDropDown.tsx'

const WhatDoWeDo = () => {
  const { t } = useTranslation('home')

  const translatedText = whatDoWeDoInformation.map((item) => {
    return {
      title: t(`whatDoWeDo.${item.title.charAt(0).toLowerCase() + item.title.slice(1)}`),
      description: t(`whatDoWeDo.${item.description.charAt(0).toLowerCase() + item.description.slice(1)}`),
      dropdown: item.dropdown?.map((item) => ({
        description: t(`whatDoWeDo.${item.description.charAt(0).toLowerCase() + item.description.slice(1)}`),
      })),
    }
  })

  return (
    <section className={'min-h-[500px] flex justify-center '}>
      <div className={'w-[95%]'}>
        <p className={'text-4xl font-bold '}>{t('whatDoWeDo.title')}</p>
        <div className={'flex flex-col justify-center border-t-2 border-tertiary mt-6 mb-0 md:mb-48'}>
          {translatedText.map((item, index) => (
            <MobileDropDown key={index} selected={item.title} item={item} className={'my-7 text-lg '} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatDoWeDo
