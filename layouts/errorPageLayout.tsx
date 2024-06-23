import React from 'react'
import Header from '../src/components/header/Header'

type PageNotFoundLayoutProps = {
  children: React.ReactNode
}
export function PageNotFoundLayout({ children }: PageNotFoundLayoutProps) {
  return (
    <div className={'w-full'}>
      <Header />
      <main style={{ height: '80vh' }} className={'flex justify-center items-center'}>
        {children}
      </main>
    </div>
  )
}
