import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { whatDoWeDoInformation } from '@/constants/constants.ts'
import MobileDropDownMotion from 'components/mobileDropDown/MobileDropDown.tsx'

const WhatDoWeDo = () => {
  const { t } = useTranslation('home')

  const translatedText = useMemo(() => {
    return whatDoWeDoInformation.map((item) => ({
      title: t(`whatDoWeDo.${item.title.charAt(0).toLowerCase() + item.title.slice(1)}`),
      description: t(`whatDoWeDo.${item.description.charAt(0).toLowerCase() + item.description.slice(1)}`),
      dropdown: item.dropdown?.map((dropdownItem) => ({
        description: t(
          `whatDoWeDo.${dropdownItem.description.charAt(0).toLowerCase() + dropdownItem.description.slice(1)}`,
        ),
      })),
    }))
  }, [t])

  return (
    <section className={'min-h-[400px] my-14 md:mb-36 flex justify-center '}>
      <div className={'w-[95%]'}>
        <h1 className={'text-2xl lg:text-4xl font-bold '}>{t('whatDoWeDo.title')}</h1>
        <div className={'flex flex-col justify-center border-t-2 border-tertiary mt-6 '}>
          {translatedText.map((item, index) => (
            <React.Fragment key={index}>
              <MobileDropDownMotion selected={item.title} item={item} className={'my-7 text-lg md:hidden'} />
              <motion.div
                className={'mt-8  justify-between flex-col md:flex-row hidden md:flex'}
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
                <p className={'sm:text-xl text-2xl font-bold mb-4 w-full md:w-[30%]'}>{item.title}</p>
                <p className={'sm:text-sm md:text-md text-gray w-full md:w-[60%]'}>{item.description}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhatDoWeDo)
