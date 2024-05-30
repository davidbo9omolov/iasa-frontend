import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
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
            <>
              <MobileDropDown key={index} selected={item.title} item={item} className={'my-7 text-lg '} />
              <motion.div
                key={index}
                className={'mt-8  justify-between flex-col  md:flex-row hidden md:flex'}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                }}
                viewport={{ once: true }}
              >
                <p className={'text-2xl font-bold mb-4 w-full md:w-[30%]'}>{item.title}</p>
                <p className={'text-gray w-full md:w-[60%]'}>{item.description}</p>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatDoWeDo
