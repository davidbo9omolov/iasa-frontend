import React from 'react'
import Header from '../src/components/header/Header'

type PageNotFoundLayoutProps = {
  children: React.ReactNode
}
export function PageNotFoundLayout({ children }: PageNotFoundLayoutProps) {
  return (
    <div className={'w-full'}>
      <Header />
      <main className={'flex justify-center min-h-[80vh]'}>{children}</main>
    </div>
  )
}
