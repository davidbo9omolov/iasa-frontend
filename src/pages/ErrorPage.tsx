import React, { useEffect } from 'react'
import CustomLink from 'components/customLink/CustomLink.tsx'
import { LinkRoutes } from '@/constants/constants.ts'
import { useTranslation } from 'react-i18next'

type ErrorPageProps = {
  icon: React.ReactNode
  errorCode: string
}

const ErrorPage = ({ icon, errorCode }: ErrorPageProps) => {
  const { t } = useTranslation('error')
  useEffect(() => {
    const upsert = (name: string, content: string) => {
      let el = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    upsert('robots', 'noindex, nofollow')
    upsert('googlebot', 'noindex, nofollow')
  }, [])

  return (
    <div className={'flex flex-col justify-center items-center h-fit'}>
      <div className={'flex items-center mb-5'}>
        <p className={'text-7xl font-bold mr-5'}> {t(`error-${errorCode}.ops`)}</p>
        {icon}
      </div>
      <p className={'text-secondary mt-5 text-xl font-bold'}>{t(`error-${errorCode}.title`)}</p>
      <p className={' my-5 text-gray'}>{t(`error-${errorCode}.message`)}</p>
      <CustomLink link={LinkRoutes.Home} className={'bg-tertiary w-fit rounded-full my-5 px-3 py-1 text-primary'}>
        {t(`error-${errorCode}.goBack`)}
      </CustomLink>
    </div>
  )
}

export default ErrorPage
