import React from 'react'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'

type CommonLayoutProps = {
  children: React.ReactNode
}
export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className={'w-full'}>
      <Header />
      <main className={'flex justify-center min-h-[80vh]'}>{children}</main>
      <Footer />
    </div>
  )
}
