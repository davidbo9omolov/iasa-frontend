import { useDispatch, useSelector } from 'react-redux'
import { setTeamCard, toggleTeamCard } from '@/store/slices/app.ts'
import { useTranslation } from 'react-i18next'
import { teamCardsInformation } from '@/constants/constants.ts'

import TeamCards, { TeamMember } from '@/components/team-cards/TeamCards.tsx'
import CustomLink from 'components/customLink/CustomLink.tsx'
import { RootState } from '@/store/store.ts'

const OurTeam = () => {
  const { t } = useTranslation('home')
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.app.selectedTeamCard.isOpen)

  const onMoreInfo = (item: TeamMember) => {
    console.log('item,', item)
    dispatch(toggleTeamCard())
    dispatch(setTeamCard({ ...item }))
  }

  return (
    <>
      <div
        className={` absolute h-full w-full z-40 left-0 bottom-0 bg-transparentBlack flex items-end duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>

      <section className={' min-h-[250px] flex justify-center mt-14 mb-36'}>
        <div
          className={
            'relative w-[95%] flex items-center justify-center md:items-center lg:justify-between flex-col lg:flex-row'
          }
        >
          <div className={'mb-10 w-full lg:w-[40%] lg:mb-0'}>
            <h1 className={'text-2xl lg:text-4xl font-bold '}>{t('ourTeam.title')}</h1>
            <p className={'sm:text-sm md:text-md my-6 w-auto lg:w-[80%]'}>{t('ourTeam.description')}</p>
            <CustomLink className={'bg-tertiary text-primary w-fit rounded-full p-2 hidden lg:flex'}>
              <p className={'text-primary'}>{t('ourTeam.more')}</p>
            </CustomLink>
          </div>
          <div className={'w-full lg:w-[60%] flex justify-center lg:justify-start'}>
            <div className={'grid grid-cols-2 gap-[20px] gap-x-full w-[700px]  h-fit sm:grid-cols-1'}>
              {teamCardsInformation.map((item, index) => (
                <TeamCards key={index} item={item} onMoreInfo={onMoreInfo} />
              ))}
            </div>
          </div>
          <CustomLink
            link={'/about-us'}
            className={'absolute bottom-[-80px] left-0 bg-tertiary text-primary w-fit rounded-full p-2 px-3 lg:hidden'}
          >
            <p className={'text-primary'}>{t('ourTeam.more')}</p>
          </CustomLink>
        </div>
      </section>
    </>
  )
}

export default OurTeam
