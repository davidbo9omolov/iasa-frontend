import React from 'react'
import { ButtonLink } from 'components/buttonLink/ButtonLink.tsx'

type ErrorPageProps = {
  icon: React.ReactNode
  errorType?: string
  errorMessage?: string
}

const ErrorPage = ({ icon, errorType, errorMessage }: ErrorPageProps) => {
  return (
    <div className={'flex flex-col justify-center items-center h-fit'}>
      <div className={'flex items-center mb-5'}>
        <p className={'text-7xl font-bold mr-5'}>Oops</p>
        {icon}
      </div>
      <p className={'text-secondary mt-5 text-xl font-bold'}>{errorType && errorType}</p>
      <p className={' my-5 text-gray'}>{errorMessage && errorMessage}</p>
      <ButtonLink link={'/'} className={'bg-tertiary w-fit rounded-full my-5 px-3 py-1 text-primary'}>
        На головну
      </ButtonLink>
    </div>
  )
}

export default ErrorPage
