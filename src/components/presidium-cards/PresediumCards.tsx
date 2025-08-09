import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { motion } from 'framer-motion'
import { PresidiumCard } from '@/types/reduxStore'
import { useTranslation } from 'react-i18next'

type PresidiumCardProps = {
  item: PresidiumCard
  onMoreInfo: (item: PresidiumCard) => void
}

const PresidiumCards: React.FC<PresidiumCardProps> = ({ item, onMoreInfo }) => {
  const { t } = useTranslation('about_us', { keyPrefix: 'Presidium.members.' + item.position })

  return (
    <>
      <motion.div
        className={'relative h-fit w-full bg-quaternary items-center rounded-2xl flex cursor-pointer min-h-[105px]'}
        onClick={() => onMoreInfo(item)}
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        viewport={{ once: true }}
      >
        <div className={'p-3'}>
          {item?.image ? (
            <img
              src={item?.image}
              alt={`${t('name')} ${t('surname')} — ${t('position')}`}
              className={'rounded-full min-w-[80px] max-w-[80px]'}
              loading="lazy"
            />
          ) : (
            <div className={'rounded-full bg-tertiary w-[80px] h-[80px]'}></div>
          )}
        </div>
        <div className={'w-4/5 flex flex-col items-start'}>
          <p className={'md:text-md mb-1 whitespace-normal w-[85%]'}>
            {t('name')} {t('surname')}
          </p>
          <p className={'text-xs sm:text-sm md:text-sm truncate w-[75%] md:text-clip md:whitespace-normal md:w-[90%]'}>
            {t('position')}
          </p>
        </div>
        <div className={'w-1/10 flex justify-center absolute right-[10px]'}>
          <GoArrowUpRight className={'rotate-90 w-[30px] h-[30px] text-tertiary cursor-pointer'} />
        </div>
      </motion.div>
    </>
  )
}

export default React.memo(PresidiumCards)
