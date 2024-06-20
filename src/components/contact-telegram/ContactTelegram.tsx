import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, Variants } from 'framer-motion'

const ContactTelegram = () => {
  const { t } = useTranslation('contacts', { keyPrefix: 'socials' })
  const [toggleState, setToggleState] = useState(false)

  const onToggle = () => {
    setToggleState(!toggleState)
  }

  const jitterVariants = {
    initial: {},
    animate: {
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  }

  const variants: Variants = {
    firstOption: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    secondOption: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className={'min-h-[250px] flex justify-center mt-16'}>
      <div className={'w-[95%] flex justify-between'}>
        <div className={'fex flex-col w-1/3'}>
          <h2 className={'text-2xl font-semibold mb-7'}>{t('inTelegram')}</h2>
          <p>{t('telegramDescription')}</p>
        </div>
        <div className={'w-1/2'}>
          <motion.div
            className={'relative bg-quaternary rounded-full flex items-center h-[20%] w-1/2'}
            {...jitterVariants}
            variants={variants}
          >
            <motion.div variants={variants} onClick={onToggle} className={'w-1/2 flex justify-center z-10'}>
              <p>{t('telegramChannel')}</p>
            </motion.div>
            <motion.div variants={variants} onClick={onToggle} className={'w-1/2 flex justify-center z-10'}>
              <p>{t('telegramBots')}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactTelegram
