import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store.ts'
import { PresidiumCard } from '@/types/reduxStore'
import { useTranslation } from 'react-i18next'
import { setPresidiumCard, togglePresidiumCard } from '@/store/slices/app.ts'
import { presidiumCardsInformation } from '@/constants/constants.ts'

import PresidiumCards from '@/components/presidium-cards/PresediumCards.tsx'

const PresidiumBoard = () => {
  const { t } = useTranslation('about_us')
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.presidium.selectedPresidiumCard.isOpen)

  const onMoreInfo = useCallback(
    (item: PresidiumCard) => {
      dispatch(togglePresidiumCard())
      dispatch(setPresidiumCard({ ...item }))
    },
    [dispatch],
  )

  return (
    <>
      <div
        className={`absolute h-full w-full z-40 left-0 bottom-0 bg-transparentBlack flex items-end duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>
      <section className={'min-h-screen flex flex-col justify-start my-[150px]'}>
        <div className="flex justify-center">
          <div className="w-[95%]">
            <h1 className={'text-2xl lg:text-[48px] leading-[110%] tracking-[0.32px] font-[550]'}>
              {t('Presidium.title')}
            </h1>
            <p className={'text-[20px] sm:text-sm md:text-md text-gray w-full mt-12 mb-12'}>
              {t('Presidium.description')}
            </p>
            <div className={'w-full flex lg:justify-center lg:justify-start mb-5'}>
              <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-fit'}>
                {presidiumCardsInformation.map((item, index) => (
                  <PresidiumCards key={index} item={item} onMoreInfo={onMoreInfo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PresidiumBoard
