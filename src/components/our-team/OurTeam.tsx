import { useTranslation } from 'react-i18next'
import { teamCardsInformation } from '@/constants/constants.ts'
import TeamCards from '@/components/team-cards/TeamCards.tsx'
import { CustomLink } from 'components/customLink/CustomLink.tsx'

const OurTeam = () => {
  const { t } = useTranslation('home')

  return (
    <section className={'min-h-[250px] flex justify-center mb-48'}>
      <div className={'w-[95%] flex justify-between'}>
        <div className={'w-[30%]'}>
          <p className={'text-4xl font-bold '}>{t('ourTeam.title')}</p>
          <p className={'my-6'}>{t('ourTeam.description')}</p>
          <CustomLink withArrow={false} className={'bg-tertiary w-fit rounded-full p-2'}>
            <p className={'text-primary'}>{t('ourTeam.more')}</p>
          </CustomLink>
        </div>
        <div className={'flex flex-wrap w-[60%] justify-start'}>
          {teamCardsInformation.map((item, index) => (
            <TeamCards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
