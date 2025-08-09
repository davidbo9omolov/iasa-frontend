import React from 'react'
import Footer from '../src/components/footer/Footer'

type CommonLayoutProps = {
  children: React.ReactNode
}
export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className={'w-full'}>
      <main className={'flex justify-center min-h-[80vh]'} role={'main'}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
