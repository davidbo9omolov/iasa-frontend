import { useTranslation } from 'react-i18next'
import { teamCardsInformation } from '@/constants/constants.ts'
import TeamCards from '@/components/team-cards/TeamCards.tsx'

const OurTeam = () => {
  const { t } = useTranslation('home')

  return (
    <section className={'min-h-[500px] flex justify-center '}>
      <div className={'w-[95%] flex justify-between'}>
        <div>
          <p className={'text-4xl font-bold '}>{t('ourTeam.title')}</p>
        </div>
        <div className={'flex flex-wrap'}>
          {teamCardsInformation.map((item, index) => (
            <TeamCards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
