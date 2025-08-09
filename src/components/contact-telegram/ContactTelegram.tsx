import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { telegramBots, telegramChannels } from '@/constants/constants.ts'

const ContactTelegram = () => {
  const { t } = useTranslation('contacts', { keyPrefix: 'socials' })
  const [selected, setSelected] = useState(false)
  const switchRef = useRef(null)

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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const rightLimit = switchRef.current?.clientWidth - switchRef.current?.children[0].clientWidth

  return (
    <section className={'min-h-[250px] flex justify-center mt-16'}>
      <div className={'w-[95%] flex flex-col'}>
        <h2 className={'text-4xl font-semibold '}>{t('inTelegram')}</h2>
        <div className={'flex flex-col md:flex-row w-full items-center md:items-start justify-between mt-[20px]'}>
          <div className={'fex flex-col w-full md:w-1/4 min-w-[350px]'}>
            <p>{t('telegramDescription')}</p>
          </div>
          <div className={'w-full md:w-1/2 mt-[20px] md:m-0 flex items-center flex-col md:block'}>
            <div
              ref={switchRef}
              className={
                ' relative bg-quaternary rounded-full flex items-center h-[20%] w-[60%] min-w-[300px] max-w-[550px] min-h-[50px] cursor-pointer'
              }
              onClick={() => setSelected(!selected)}
            >
              <motion.div
                {...jitterVariants}
                className={'absolute bg-secondary rounded-full w-1/2 h-[80%] cursor-grab'}
                drag="x"
                dragConstraints={{ left: 0, right: rightLimit }}
                dragElastic={0.1}
                onDragEnd={() => setSelected(!selected)}
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
            <div className={'w-fit flex flex-wrap gap-y-[20px] mt-[20px] ml-[10px]'}>
              {!selected
                ? telegramChannels.map((item, index) => (
                    <div className={'relative group'}>
                      <Link
                        key={index}
                        to={item.link}
                        target={'_blank'}
                        rel="noopener noreferrer"
                        className={'underline mr-12 mb-5 duration-300 group-hover:text-tertiary mb:mb-10'}
                      >
                        {item.title}
                      </Link>
                      <div
                        className={
                          'hidden lg:group-hover:flex absolute top-full mt-[12px] p-1 justify-center items-center bg-quaternary text-secondary w-max rounded duration-300 z-50'
                        }
                      >
                        {t(`subText.${item.subText}`)}
                      </div>
                    </div>
                  ))
                : telegramBots.map((item, index) => (
                    <div className={'relative group'}>
                      <Link
                        key={index}
                        to={item.link}
                        target={'_blank'}
                        rel="noopener noreferrer"
                        className={'underline mr-12 mb-5 duration-300 group-hover:text-tertiary'}
                      >
                        {item.title}
                      </Link>
                      <div
                        className={
                          'hidden duration-300 p-1 justify-center items-center absolute mt-[12px] bg-quaternary text-secondary w-max rounded lg:group-hover:flex'
                        }
                      >
                        {t(`subText.${item.subText}`)}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactTelegram
