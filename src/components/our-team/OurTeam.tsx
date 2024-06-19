import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { teamCardsInformation } from '@/constants/constants.ts'
import TeamCards, { TeamMember } from '@/components/team-cards/TeamCards.tsx'
import CustomLink from 'components/customLink/CustomLink.tsx'

const OurTeam = () => {
  const { t } = useTranslation('home')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<TeamMember>(teamCardsInformation[0])

  const onMoreInfo = (item: TeamMember) => {
    setIsOpen(!isOpen)
    setSelectedItem(item)
  }

  return (
    <>
      <div
        className={`absolute h-full w-full z-40 left-0 bottom-0 bg-transparentBlack flex items-end duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      <section className={' min-h-[250px] flex justify-center mb-48'}>
        <div
          className={
            'relative w-[95%] flex items-center justify-center md:items-center lg:justify-between flex-col lg:flex-row'
          }
        >
          <div className={'mb-10 w-full lg:w-[40%] lg:mb-0'}>
            <p className={'text-2xl lg:text-4xl font-bold '}>{t('ourTeam.title')}</p>
            <p className={'sm:text-sm md:text-md my-6'}>{t('ourTeam.description')}</p>
            <CustomLink className={'bg-tertiary text-primary w-fit rounded-full p-2 hidden lg:flex'}>
              <p className={'text-primary'}>{t('ourTeam.more')}</p>
            </CustomLink>
          </div>
          <div className={'w-full lg:w-[60%] flex justify-center lg:justify-start'}>
            <div className={'grid grid-cols-2 gap-[20px] justify-items-between w-[700px]  h-fit sm:grid-cols-1'}>
              {teamCardsInformation.map((item, index) => (
                <TeamCards key={index} item={item} onMoreInfo={onMoreInfo} />
              ))}
            </div>
          </div>
          <CustomLink
            className={'absolute bottom-[-80px] left-0 bg-tertiary text-primary w-fit rounded-full p-2 lg:hidden'}
          >
            <p className={'text-primary'}>{t('ourTeam.more')}</p>
          </CustomLink>
          <div
            className={`absolute  h-[75vh] w-[90%] lg:w-[35vw] lg:bottom-[15vh] lg:right-[7vh]   bg-quaternary rounded-2xl duration-500 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className={`flex flex-col p-7 h-full`}>
              <div className={'w-full h-[60%] bg-secondary rounded-2xl'}></div>
              <div>
                <div className={'border-b-2 border-tertiary'}>
                  <p className={'my-3 font-bold text-xl'}>
                    {selectedItem.name} {selectedItem.surname}
                  </p>
                  <p className={'my-3 text-gray'}>{selectedItem.position}</p>
                </div>
                <div>
                  <p className={'my-3 text-gray'}>Пошта</p>
                  <p className={'underline'}>dsasaddasdasda@gmail.com</p>
                  <p className={'my-3 text-gray'}>Соц мережі</p>
                  <div className={'flex'}>
                    <p className={'underline mr-3'}>Telegram</p>
                    <p className={'underline mr-3'}>Instagram</p>
                    <p className={'underline mr-3'}>Linkedin</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`w-full bg-quaternary text-secondary mt-3 z-10 px-10 py-2 rounded-full text-center`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {t('ourTeam.goBack')}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurTeam
