import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { telegramBots, telegramChannels } from '@/constants/constants.ts'

const ContactTelegram = () => {
  const { t } = useTranslation('contacts', { keyPrefix: 'socials' })
  const [selected, setSelected] = useState(false)

  const jitterVariants = {
    initial: {
      x: selected ? '2%' : '98%',
    },
    animate: {
      x: selected ? '98%' : '2%',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 400,
        damping: 22,
      },
    },
  }

  return (
    <section className={'min-h-[250px] flex justify-center mt-16'}>
      <div className={'w-[95%] flex flex-col'}>
        <h2 className={'text-4xl font-semibold '}>{t('inTelegram')}</h2>
        <div className={'flex flex-col md:flex-row w-full items-center md:items-start justify-between mt-7'}>
          <div className={'fex flex-col w-full md:w-1/4 min-w-[350px]'}>
            <p>{t('telegramDescription')}</p>
          </div>
          <div className={'w-full md:w-1/2 mt-7 md:m-0 flex items-center flex-col md:block'}>
            <div
              className={
                ' relative bg-quaternary rounded-full flex items-center h-[20%] w-[60%] min-w-[300px] max-w-[550px] min-h-[50px] cursor-pointer'
              }
              onClick={() => setSelected(!selected)}
            >
              <motion.div
                {...jitterVariants}
                className={'absolute bg-secondary rounded-full w-1/2 h-[80%] cursor-grab'}
                drag="x"
                dragConstraints={{ left: 0, right: 300 }}
              />
              <div className={'w-1/2 h-full flex justify-center z-10 pointer-events-none'}>
                <motion.button
                  className={'ml-1 select-none '}
                  initial={{
                    color: '#fff',
                  }}
                  animate={{ color: selected ? '#fff' : '#000' }}
                >
                  {t('telegramChannel')}
                </motion.button>
              </div>
              <div className={'w-1/2 h-full flex justify-center z-10 pointer-events-none'}>
                <motion.button
                  className={'mr-1 select-none'}
                  initial={{
                    color: '#000',
                  }}
                  animate={{ color: selected ? '#000' : '#fff' }}
                >
                  {t('telegramBots')}
                </motion.button>
              </div>
            </div>
            <div className={'w-fit flex flex-wrap mt-7'}>
              {!selected
                ? telegramChannels.map((item, index) => (
                    <Link key={index} to={item.link} target={'_blank'} className={'underline mr-5 mb-5'}>
                      {item.title}
                    </Link>
                  ))
                : telegramBots.map((item, index) => (
                    <Link key={index} to={item.link} target={'_blank'} className={'underline mr-5 mb-5'}>
                      {item.title}
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactTelegram
