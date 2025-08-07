import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { toggleTeamCard } from '@/store/slices/app.ts'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store.ts'

const SelectedUserTeamCard = () => {
  const { t } = useTranslation('home', { keyPrefix: 'ourTeam' })
  const cardRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.app.selectedTeamCard.isOpen)
  const teamCard = useSelector((state: RootState) => state.app.selectedTeamCard.teamCard)
  const [bottomSpace, setBottomSpace] = useState(30)

  const onClose = useCallback(() => {
    dispatch(toggleTeamCard())
  }, [dispatch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        dispatch(toggleTeamCard({ isOpen: false }))
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 850) {
        const scrollPosition = window.scrollY + window.innerHeight
        const pageHeight = document.body.scrollHeight
        const footerHeight = 400

        const distanceToFooter = pageHeight - scrollPosition

        if (distanceToFooter > footerHeight) return setBottomSpace(30)
        else {
          const maxBottomSpace = 400

          const percentage = Math.max(0, Math.min(1, distanceToFooter / footerHeight))

          const newBottomSpace = maxBottomSpace * (1 - percentage)

          setBottomSpace(newBottomSpace)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialNetworks = useMemo(() => {
    return teamCard?.socialNetworks?.map((item, index) => (
      <Link key={index} to={item.link} target="_blank" className="underline mr-3">
        {item.name}
      </Link>
    ))
  }, [teamCard?.socialNetworks])

  return (
    <div
      ref={cardRef}
      className={`fixed right-1/2 translate-x-1/2 md:translate-x-0 md:!bottom-[10vh] md:absolute mb-16 mt-4 h-[75vh] w-[90%] lg:w-[35vw] max-w-[450px] lg:max-w-[700px] md:right-[7vh] bg-quaternary rounded-lg duration-500 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 hidden pointer-events-none'}`}
      style={{ bottom: bottomSpace }}
    >
      <div className={`flex flex-col p-7 h-full`}>
        <div className={'w-full h-[60%] bg-secondary rounded-lg'}>
          {teamCard?.image ? (
            <img src={teamCard?.image} alt={'team member'} className={'rounded-lg w-full h-full object-cover'} />
          ) : (
            <div className={'bg-tertiary w-full h-full rounded-lg'}></div>
          )}
        </div>

        <div className={'flex flex-col h-[40%] overflow-hidden mt-4'}>
          <div className={'shrink-0 border-b-2 border-tertiary pb-2'}>
            <p className={'my-1 font-[550] text-xl'}>
              {t(`members.${teamCard.position}.name`)} {t(`members.${teamCard.position}.surname`)}
            </p>
          </div>
          <div className={'overflow-y-auto mt-2'}>
            {teamCard?.email ? (
              <>
                <p className={'my-3 text-gray'}>{t(`members.${teamCard.position}.position`)}</p>
                <p className={'my-3 text-gray'}>{t('email')}</p>
                <p className={'underline'}>{teamCard.email}</p>
              </>
            ) : null}
            {teamCard?.socialNetworks && <p className={'my-3 text-gray'}>{t('socialNetworks')}</p>}
            <div className="flex">{socialNetworks}</div>
          </div>
        </div>
      </div>
      <button
        className={`w-full bg-quaternary text-secondary mt-3 z-10 px-10 py-2 rounded-full text-center`}
        onClick={onClose}
      >
        {t('goBack')}
      </button>
    </div>
  )
}

export default React.memo(SelectedUserTeamCard)
